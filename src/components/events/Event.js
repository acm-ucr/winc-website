import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const Event = ({
  month = "FEB",
  day = "29",
  start = "7:00PM",
  title = "Life in the Industry: PM",
  location = "http://google.com",
  description = "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position.",
  color = "bg-winc-pink",
}) => {
  return (
    <div className="font-urbanist flex rounded-2xl overflow-hidden max-w-5xl m-40">
      <div className={`${color} text-winc-white text-center w-60 h-60`}>
        <div className="text-6xl font-bold pt-9">{month}</div>
        <div className="text-6xl font-bold pt-3">{day}</div>
        <div className="text-2xl font-normal py-3">{start}</div>
      </div>
      <div className="flex-1 pt-3 pl-7 bg-winc-beige h-60">
        <p className="text-4xl text-winc-black font-bold">{title}</p>
        <div className="flex text-winc-black items-center">
          <p className="text-2xl flex font-normal">zoom: link</p>
          <Link className="text-winc-black pl-1" href={`${location}`}>
            <FiExternalLink />
          </Link>
        </div>
        <p className="text-2xl font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Event;
