"use client";
import React from "react";
const Service = ({
  icon,
  topic,
  textColor,
  description,
  media,
  mediaBG,
  mediaText,
  backgroundColor,
}) => {
  return (
    <div
      className={` ${backgroundColor} p-6 w-11/12 rounded-lg flex items-center justify-center flex-col`}
    >
      {icon}
      <h1
        className={` ${textColor} text-center text-3xl mb-4 mt-2 justify-center font-bold`}
      >
        {topic}
      </h1>
      <p className={` ${textColor} text-center font-thin text-xl`}>
        {description}
      </p>

      {/* Smaller Rectangle */}
      <div
        className={` ${mediaBG} ${mediaText} w-8/12 h-1/6 rounded-md px-4 mt-4 flex text-4xl items-center font-light justify-center"`}
      >
        {media}
      </div>
    </div>
  );
};

export default Service;
