import DashboardTopbar from 'modules/dashboard/DashboardTopbar';
import DashboardSidebar from '../modules/dashboard/DashboardSidebar';
import React from 'react';
import Overlay from 'components/common/Overlay';

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <Overlay />
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
