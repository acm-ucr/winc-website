import Image from "next/image";
import aboutImage from "@/public/about/about1.webp";
import groupImage from "@/public/about/wincgroupphoto.webp";

const WhatIs = () => {
  return (
    <div className="relative grid grid-cols-1 grid-rows-4 justify-center md:grid-cols-2 md:grid-rows-2 md:p-20">
      <div className="p-5 md:p-0 lg:p-10">
        <p className="mb-5 flex justify-center text-xl font-bold md:mb-10 md:justify-end md:text-3xl lg:text-5xl">
          What is WIN
          <p className="border-b-4 border-winc-red-400 text-xl md:pb-3 md:text-3xl lg:text-5xl">
            C?
          </p>
        </p>
        <p className="text-base lg:text-2xl">
          WINC is the University of California, Riverside's ACM-W chapter
          dedicated to empowering and supporting a network of women in tech.
        </p>
        <p className="text-base lg:text-2xl">
          We are an inclusive community for anyone who is interested in
          advocating for women in tech and anyone - regardless of skill - who is
          interested in the field of computing.
        </p>
      </div>

      <div className="-mt-14 mb-10 h-3/4 w-3/4 translate-x-20 bg-winc-red-400 md:ml-10 md:mt-0 md:h-3/4 md:w-10/12 md:translate-x-10 lg:h-5/6">
        <Image
          src={aboutImage}
          alt="about"
          className="mt-10 -translate-x-10 md:-translate-x-10"
        />
      </div>

      <div className="-mt-3 mb-10 h-3/4 w-3/4 translate-x-6 bg-winc-red-400 md:ml-12 md:mt-0 md:h-3/4 md:w-10/12 md:-translate-x-10 lg:h-5/6">
        <Image src={groupImage} alt="group" className="mt-10 translate-x-10" />
      </div>

      <div className="pl-10 lg:pt-10">
        <p className="mb-5 flex justify-center text-xl font-bold md:mb-10 md:justify-start md:text-3xl lg:text-5xl">
          <p className="border-b-4 border-winc-red-400 md:pb-3">Wh</p>
          at do we do?
        </p>
        <p className="text-base lg:text-2xl">
          We host a plethora of events. Whether you want to ace that coding
          interview with our workshops, or want to attend speaker panels with
          some of the most intelligent, down-to-earth people in the industry, or
          maybe you just want to hang out with a community, WINC is the place
          for you.
        </p>
      </div>
    </div>
  );
};

export default WhatIs;
