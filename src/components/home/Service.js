import React from "react";
import Link from "next/link";
const Service = ({
  icon,
  topic,
  textColor,
  description,
  media,
  mediaBG,
  mediaText,
  backgroundColor,
  mediaLink,
}) => {
  return (
    <div
      className={` ${backgroundColor} rounded-3xl min-w-fit flex items-center justify-center flex-col font-urbanist p-4`}
    >
      <div className="pt-6">{icon}</div>
      <div
        className={` ${textColor} flex text-center text-xl md:text-4xl my-4 justify-center font-bold`}
      >
        {topic}
      </div>
      <p
        className={` ${textColor} flex text-center px-8 text-base md:text-xl mt-2 md:mt-4`}
      >
        {description}
      </p>
      <Link
        href={`${mediaLink}`}
        className={`${mediaBG} flex justify-center text-center font-light text-xl md:text-4xl py-2 px-1 items-center w-9/12 min-w-fit whitespace-nowrap rounded-md mt-8 hover:scale-110`}
      >
        <div className={`${mediaText}`}> {media} </div>
      </Link>
    </div>
  );
};

export default Service;
