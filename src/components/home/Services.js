import React from "react";
import Service from "./Service";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMiniCodeBracket } from "react-icons/hi2";
import Title from "../Title";
const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Title text="Grow and Thrive" textcolor="text-winc-black" />
      <div className="flex justify-center">
        <div className="bg-winc-pink w-14 h-1 mt-4"></div>
      </div>

      <div className="flex justify-center my-8 text-lg md:text-2xl text-center font-normal font-urbanist text-winc-black">
        <p>
          We offer all the opportunities and resources necessary for success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 w-11/12 justify-center my-8">
        {/* <div> */}
        <Service
          icon={<BsFillPersonFill className="text-winc-white" size={50} />}
          topic="COMMUNITY"
          textColor="text-winc-white"
          description="Interact with each other in a more casual setting with our inclusive bonding events."
          media="SLACK"
          mediaBG="bg-winc-white"
          mediaText="text-winc-pink"
          backgroundColor="bg-winc-pink"
          mediaLink="https://join.slack.com/t/wincucr/shared_invite/zt-27xdsp07m-sPKN9hnqg0KRzYi832tm7Q"
        />
        {/* </div> */}
        <Service
          icon={<HiMiniCodeBracket className="text-winc-pink" size={50} />}
          topic="WORKSHOPS"
          textColor="text-winc-pink"
          description="Tried and true methods from our network of members to break into tech."
          media="YOUTUBE"
          mediaBG="bg-winc-pink"
          mediaText="text-winc-yellow"
          backgroundColor="bg-winc-yellow"
          mediaLink="https://youtube.com/@womenincomputingatucr1832?si=lCvZPMiG5SVdginI"
        />
        <Service
          icon={<FaPeopleGroup className="text-winc-white" size={50} />}
          topic="MENTORSHIP"
          textColor="text-winc-white"
          description="Learn from your peers about academia, industry, research, internships and much more."
          media="COMING SOON"
          mediaBG="bg-gray-400"
          mediaText="black"
          backgroundColor="bg-winc-black"
        />
      </div>
    </div>
  );
};

export default Services;
