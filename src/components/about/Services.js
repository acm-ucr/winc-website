"use client";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";

import Service from "./Service";

// style the background rectangle here

const Services = () => {
  return (
    <div className="flex justify-center items-center bg-winc-black w-full">
      <div className="bg-winc-pink flex flex-row px-2 w-10/12 p-8">
        <Service
          icon={<IoPersonSharp size={40} />}
          info="Meetings & Events"
          description="Sign-in sheets will be sent out at the beginning of every meeting and event.Sign in so we can track attendance and give you access to our newsletters."
        />
        <Service
          icon={<IoPersonSharp size={40} />}
          info="Join our Slack"
          description="Join our Slack to communicate with us and have access to all our channels including #opportunities — a great resouce for seeking internships and on-campus jobs."
        />
        <Service
          icon={<IoPersonSharp size={40} />}
          info="Follow our Socials"
          description="Following our socials will keep you updated on what's happening with Winc!"
        />
      </div>
    </div>
  );
};

export default Services;
