"use client";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";

import Stat from "./Stat";

// style the background rectangle here

const Stats = () => {
  return (
    <div className="flex justify-center items-center bg-winc-pink w-full p-16 outline outline-8 outline-winc-pink outline-offset-8 my-4">
      <div className=""></div>
      <div className="bg-winc-pink flex flex-row w-11/12">
        <Stat
          icon={<FaChalkboardTeacher size="84px" />}
          stat="100+"
          type="Workshops"
        />
        <Stat icon={<IoPersonSharp size="70px" />} stat="500+" type="Members" />
        <Stat
          icon={<FaUserGraduate size="70px" />}
          stat="1000+"
          type="Alumni"
        />
      </div>
    </div>
  );
};

export default Stats;
