// "use client";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";

import Stat from "./Stat";

// style the background rectangle here

const Stats = () => {
  return (
    <div className="border-y-8  border-winc-pink py-2 mt-12 md:mt-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-winc-pink w-full md:px-8 py-6 md:py-10">
        <div className="flex justify-center items-center">
          <Stat
            icon={<FaChalkboardTeacher className="text-5xl md:text-8xl" />}
            stat="100+"
            type="Workshops"
          />
        </div>
        <div className="flex justify-center items-center">
          <Stat
            icon={<IoPersonSharp className="text-5xl md:text-7xl" />}
            stat="500+"
            type="Members"
          />
        </div>
        <div className="flex justify-center items-center">
          <Stat
            icon={<FaUserGraduate className="text-5xl md:text-7xl" />}
            stat="1000+"
            type="Alumni"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
