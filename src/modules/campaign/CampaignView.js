import React, { Fragment } from 'react';
import CampMeta from './pats/CampMeta';
import CampDescription from './pats/CampDescription';
import CampTitle from './pats/CampTitle';
import CampCategory from './pats/CampCategory';
import CampImage from './pats/CampImage';
import { Button } from 'components/button';
import CampViewAuthor from './CampViewAuthor';
import CampaignSupport from './CampaignSupport';
import CampaignPerk from './CampaignPerk';
import { v4 } from 'uuid';
import CampaignGrid from './CampaignGrid';
import CampaignItem from './CampaignItem';

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40
         flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner"
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={v4()}
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="max-w-[443px] flex-1">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture
          </CampTitle>
          <CampDescription className="mb-6 text-sm">
            Remake - We Make an exbition abount achidsfsdf
          </CampDescription>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full  h-[5px] mb-6 bg-[#EFEFEF]">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big" />
            <CampMeta size="big" />
            <CampMeta size="big" />
          </div>
          <Button className="w-full" kind="primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center gap-x-14 text-text3 ">
          <span className="cursor-pointer">Campaign</span>
        </div>
        <Button className="" kind="primary">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <div className="mb-5 text-lg font-semibold uppercase">Story</div>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10">You also may be intersted</h2>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={index}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
