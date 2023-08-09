import { Button } from 'components/button';
import Heading from 'components/common/Heading';
import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignFeature from 'modules/campaign/CampaignFeature';
import CampaignGrid from 'modules/campaign/CampaignGrid';
import React from 'react';

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-x-6">
            <div className="flex items-center justify-center text-white rounded-full bg-opacity-60 bg-secondary w-14 h-14">
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
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[22px] font-semibold mb-2">
                Create Your campaign
              </div>
              <p className="mb-2 text-sm text-text3">
                Jump right into editor and create your first{' '}
              </p>
              <a className="text-sm text-primary" href="/">
                Need any help?
              </a>
            </div>
          </div>
          <Button
            type="button"
            kind="ghost"
            className="px-8"
            href="start-campaign"
          >
            Create Campaign
          </Button>
        </div>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center"></div>
      <Button kind="ghost" className="flex items-center px-8 mx-auto">
        <span>See more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 mb-[2px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </Button>
    </LayoutDashboard>
  );
};

export default CampaignPage;
