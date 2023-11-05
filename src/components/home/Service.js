"use client";
import React from "react";
/*
  Componenets in Service Card:
  icon
  name
  description
  socialMedia
*/

const Service = ({icon, name, description, socialMedia}) => {
  return (
    <div className="bg-winc-yellow w-11/12 h-96 rounded-lg flex items-center justify-center">
      <div className="flex flex-column items-center w-11/12">
        <div className="text-winc-pink" size="45" /> {icon} </div>
        <h1 className="text-winc-pink  text-center text-3xl mb-4 justify-center font-bold">
          {name}
        </h1>
        <p className="text-winc-pink text-center  text-xl">
          {description}
        </p>

        {/* Smaller Rectangle */}
        <div className="bg-winc-pink w-187 h-57 mt-4 rounded-lg flex items-center justify-center">
          <div className="text-winc-yellow text-3xl justify-center font-light">
            {socialMedia}
          </div>
        </div>
      </div>
  );
};

export default Service;
