import { defaultImage } from 'constants/Global';
import React from 'react';
import classNames from 'utils/classNames';

const CampImage = ({ className = 'h-[158px]', image = defaultImage }) => {
  return (
    <div className={classNames('', className)}>
      <img src={image} alt="" className="object-cover w-full h-full rounded-2xl" />
    </div>
  );
};

export default CampImage;
