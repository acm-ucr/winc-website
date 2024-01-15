// "use client";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import Title from "../Title";
import Service from "./Service";
// style the background rectangle here

const Services = () => {
  return (
    <div className="border-y-8  border-winc-pink my-14 py-2 md:my-24 w-full">
      <div className="bg-winc-pink flex flex-col w-full justify-center items-center p-6 ">
        <div className="flex text-center justify-center mb-8 md:mb-16">
          <Title text="Become a Member" textcolor="text-winc-white" />
        </div>
        <div className=" justify-center grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mb-8 md:mb-16 h-full">
          <div className="flex justify-center items-center">
            <Service
              icon={<IoPersonSharp size={40} />}
              info="Meetings & Events"
              description="Sign-in sheets will be sent out at the beginning of every meeting and event.Sign in so we can track attendance and give you access to our newsletters."
            />
          </div>
          <div className="flex justify-center items-center">
            <Service
              icon={<IoPersonSharp size={40} />}
              info="Join Our Slack"
              description="Join our Slack to communicate with us and have access to all our channels including #opportunities — a great resouce for seeking internships and on-campus jobs."
            />
          </div>
          <div className="flex justify-center items-center">
            <Service
              icon={<IoPersonSharp size={40} />}
              info="Follow Our Socials"
              description="Following our socials will keep you updated on what's happening with Winc!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
