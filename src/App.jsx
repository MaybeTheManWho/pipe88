import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page components
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RobotDetails from './pages/RobotDetails';
import Robots from './pages/Robots';
import Inspections from './pages/Inspections';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

// Import providers
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Import styles
import './styles/global.css';
import './styles/darkMode.css';
import './styles/rtl.css';
import './styles/toggleSwitch.css';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

// AppContent component to handle conditional rendering of Footer
const AppContent = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('isAuthenticated') === 'true'
  );
  
  // Simple authentication handler
  const handleLogin = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  // Check if current path is a dashboard path
  const isDashboardPath = 
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/robots') ||
    location.pathname.startsWith('/inspections') ||
    location.pathname.startsWith('/analytics') ||
    location.pathname.startsWith('/reports') ||
    location.pathname.startsWith('/settings');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboardPath && <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          {/* Dashboard Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/robots/:id" 
            element={
              <ProtectedRoute>
                <RobotDetails onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/robots" 
            element={
              <ProtectedRoute>
                <Robots onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/inspections" 
            element={
              <ProtectedRoute>
                <Inspections onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <ProtectedRoute>
                <Analytics onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <ProtectedRoute>
                <Reports onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <Settings onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {/* Only show footer on non-dashboard routes */}
      {!isDashboardPath && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;