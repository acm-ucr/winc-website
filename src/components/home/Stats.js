"use client";
import React from "react";
import { GrWorkshop } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";

import Stat from "./Stat";

// style the background rectangle here

const Stats = () => {
  return (
    <div className="flex justify-center items-center bg-winc-black w-full">
      <div className="bg-winc-yellow flex flex-row px-2 w-8/12">
        <Stat icon={<GrWorkshop />} stat="100+" type="Workshops" />
        <Stat icon={<IoPersonSharp />} stat="500+" type="Members" />
        <Stat icon={<FaUserGraduate />} stat="1000+" type="Alumni" />
      </div>
    </div>
  );
};

export default Stats;
