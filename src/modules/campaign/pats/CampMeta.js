import React from 'react';
import classNames from 'utils/classNames';

const CampMeta = ({ amount = '$2,000', text = 'resabli boxes with', size = 'small' }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className={classNames(' font-semibold text-text2', size === 'small' ? 'text-sm' : 'text-xl')}>{amount}</p>
      <span className={classNames('text-4', size === 'small' ? 'text-xs' : 'text-base')}>{text}</span>
    </div>
  );
};

export default CampMeta;
