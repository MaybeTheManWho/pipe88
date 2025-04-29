import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';  // IMPORTANT: Make sure this path is correct
import RobotCard from '../components/dashboard/RobotCard';
import Chart from '../components/dashboard/Chart';
import AlertCard from '../components/dashboard/AlertCard';
import { robots, inspectionData, alertsData, pieData } from '../utils/mockData';
import { useLanguage } from '../context/LanguageContext';

const Dashboard = ({ onLogout }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('common.dashboard')}</h1>
            <p className="text-gray-600 dark:text-gray-400">{t('dashboard.welcome')}</p>
          </div>
          
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('dashboard.activeRobots')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {robots.filter(robot => robot.status === 'Active').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  12%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
            
            {/* Add more dashboard content here */}
            {/* ... (rest of your dashboard content) ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;