import Image from "next/image";
import aboutImage from "@/public/aboutpage/WincBoard_group_pic.webp";
import groupImage from "@/public/aboutpage/wincgroupphoto.webp";

const WhatIs = () => {
  return (
    <div className="relative grid grid-cols-1 grid-rows-4 justify-center md:grid-cols-2 md:grid-rows-2 md:p-20">
      <div className="p-5 md:p-0 lg:p-10">
        <p className="mb-5 flex justify-center text-xl font-bold md:mb-10 md:justify-end md:text-3xl lg:text-5xl">
          What is Women in Computing (WINC)?
          <p className="border-b-4 border-winc-red-400 text-xl md:pb-3 md:text-3xl lg:text-5xl"></p>
        </p>
        <p className="text-base lg:text-2xl">
          WINC is the University of California, Riverside's dedicated organization
          for women in tech.
        </p>
        <p className="text-base lg:text-2xl">
          We are a welcoming, all-inclusive community that empowers and supports
          our members by providing the mentorship, resources, and environment
          needed to thrive in the tech industry.
        </p>
      </div>

      <div className="-mt-14 mb-10 h-3/4 w-3/4 translate-x-20 bg-winc-red-400 md:ml-10 md:mt-0 md:h-3/4 md:w-10/12 md:translate-x-10 lg:h-5/6 2xl:h-2/3 2xl:w-2/3">
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
          interview with our workshops, attend company tours, demonstrate your
          innovative mind and computing skills at RoseHack, our award-winning
          event, or maybe just hang out with a community, WINC is the place for
          you!
        </p>
      </div>
    </div>
  );
};

export default WhatIs;
