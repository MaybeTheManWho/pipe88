import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/dashboard/Sidebar';

// Import all dashboard page components
import Dashboard from './pages/Dashboard';
import Robots from './pages/Robots';
import Inspections from './pages/Inspections';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import RobotDetails from './pages/RobotDetails';

const DashboardMain = ({ onLogout }) => {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState(null);
  
  useEffect(() => {
    // Determine which component to show based on the path
    const path = location.pathname;
    
    if (path === '/dashboard') {
      setActiveComponent(<Dashboard />);
    } 
    else if (path.startsWith('/robots/')) {
      const id = path.split('/')[2]; // Get robot ID from path
      setActiveComponent(<RobotDetails />);
    }
    else if (path === '/robots') {
      setActiveComponent(<Robots />);
    }
    else if (path === '/inspections') {
      setActiveComponent(<Inspections />);
    }
    else if (path === '/analytics') {
      setActiveComponent(<Analytics />);
    }
    else if (path === '/reports') {
      setActiveComponent(<Reports />);
    }
    else if (path === '/settings') {
      setActiveComponent(<Settings />);
    }
    else {
      // Default to dashboard if no match
      setActiveComponent(<Dashboard />);
    }
  }, [location]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;