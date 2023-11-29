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
      className={` ${backgroundColor} w-11/12 rounded-3xl min-w-fit h-full flex items-center justify-center flex-col font-urbanist p-4`}
    >
      <div className="pt-6">{icon}</div>
      <div
        className={` ${textColor} flex text-center text-4xl my-4 justify-center font-bold`}
      >
        {topic}
      </div>
      <p className={` ${textColor} flex text-center px-8 text-xl mt-4`}>
        {description}
      </p>
      <div
        className={`${mediaBG} flex justify-center text-center font-bold text-4xl py-2 px-1 items-center w-6/12 h-full rounded-md mt-8`}
      >
        <div className={`${mediaText}`}> {media} </div>
      </div>
    </div>
  );
};

export default Service;
