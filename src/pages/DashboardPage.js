import React, { Fragment } from 'react';
import LayoutDashboard from '../layout/LayoutDashboard';
import Heading from '../components/common/Heading';
import CampaignGrid from '../modules/campaign/CampaignGrid';
import CampaignItem from '../modules/campaign/CampaignItem';
import { v4 } from 'uuid';
import CampaignFeature from 'modules/campaign/CampaignFeature';
import Gap from 'components/common/Gap';

const DashboardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your campaing</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular campaing</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
