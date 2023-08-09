import DashboardTopbar from 'modules/dashboard/DashboardTopbar';
import DashboardSidebar from '../modules/dashboard/DashboardSidebar';
import React from 'react';
import Overlay from 'components/common/Overlay';
import { Outlet } from 'react-router-dom';
import ReactModal from 'react-modal';
import { Button } from 'components/button';
import CampaignPerk from 'modules/campaign/CampaignPerk';

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center "
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11  right-10 top-[10px] text-text1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="font-bold text-[25px] mb-10 text-center">
          Back this projects
        </div>
        <p>Enter thr contribuile</p>
        <input
          placeholder=""
          type="text"
          name="amount"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        />
        <p className="my-5 mb-10 text-sm text-text3">
          Contribution are not associatied
        </p>
        <Button className="text-white bg-primary">continew</Button>
        <div className="mt-[60px]"></div>
        <CampaignPerk></CampaignPerk>
      </ReactModal>
      <Overlay />
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
