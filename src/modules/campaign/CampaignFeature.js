import React from 'react';
import CampImage from './pats/CampImage';
import CampCategory from './pats/CampCategory';
import CampTitle from './pats/CampTitle';
import CampDescription from './pats/CampDescription';
import CampMeta from './pats/CampMeta';

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1084px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="max-w-[435px] flex-1">
        <CampCategory text="Architecture" className="text-sm"></CampCategory>
        <CampTitle className="mb-4 text-xl font-bold">Remake - We Make architecture</CampTitle>
        <CampDescription className="mb-6 text-sm">Remake - We Make an exbition abount achidsfsdf</CampDescription>
        <div className="w-full rounded-full  h-[5px] mb-6 bg-[#EFEFEF]">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big" />
          <CampMeta size="big" />
          <CampMeta size="big" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CampaignFeature;
