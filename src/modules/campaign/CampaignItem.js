import React from 'react';
import CampCategory from './pats/CampCategory';
import CampMeta from './pats/CampMeta';
import CampDescription from './pats/CampDescription';
import CampTitle from './pats/CampTitle';
import CampAuthor from './pats/CampAuthor';
import CampImage from './pats/CampImage';

const campaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDescription></CampDescription>
        Fun, durable and resabli boxes with
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default campaignItem;
