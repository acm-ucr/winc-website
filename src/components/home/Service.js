"use client";
import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
const Service = () => {
  return (
    <div className="bg-winc-yellow w-96 h-96 rounded-lg  flex items-center justify-center">
      <div className="flex flex-column items-center w-11/12">
        <HiCodeBracket className="text-winc-pink" size="45" />
        <div></div>
        <h1 className="text-winc-pink  text-center text-3xl mb-4 justify-center font-bold">
          WORKSHOPS
        </h1>
        <p className="text-winc-pink text-center  text-xl">
          Tried and true methods from our network of members to break into tech.
        </p>

        {/* Smaller Rectangle */}
        <div className="bg-winc-pink w-187 h-57 mt-4 rounded-lg flex items-center justify-center">
          <p className="text-winc-yellow text-3xl justify-center font-light">
            YOUTUBE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
