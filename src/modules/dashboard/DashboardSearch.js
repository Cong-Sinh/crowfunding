import { defaultImage } from 'constants/Global';
import React from 'react';
import { useState } from 'react';

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full  flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results w-full lg:w-[843px] z-50 bg-white absolute top-full left-0 translate-y-5 pb-6 rounded-3xl ">
          <div className="flex items-center justify-between w-full p-3 bg-graySoft rounded-3xl">
            <h4 className="pl-4 text-sm font-medium underline">See all </h4>
            <button className="flex items-center justify-center rounded-xl bg-error bg-opacity-20 text-error w-[72px] h-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col mb-6 gap-y-5">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="mb-5 text-sm font-semibold">Relative search</h3>
            <div className="flex flex-col text-sm gap-y-3 text-text2">
              <p>
                <strong>education</strong> fund
              </p>
              <p>education fund</p>
              <p>
                <strong>education</strong> fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex item-center gap-x-5">
      <img className="w-[50px] h-[50px] rounded-lg object-cover" src={defaultImage} alt="" />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Education</strong> fund for durgham Family
        </h3>
        <p className="text-text3">By Sinh dz</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
