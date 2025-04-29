import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';

const DashboardLayout = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;