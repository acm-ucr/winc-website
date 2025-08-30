import Image from "next/image";

import EventTitle from "@/components/events/EventTitle";
import hearts from "@/public/events/hearts.webp";

const RoseHack = () => {
  return (
    <div className="mx-auto flex w-2/3 flex-col justify-center gap-8 md:flex-row">
      <div className="flex flex-col gap-8">
        {/* <div className="mx-auto"> */}
        <EventTitle text={"What is Rose Hack?"} />
        {/* </div> */}
        <p className="text-center md:text-left">
          Rose Hack is a hackathon dedicated to uplifting underrepesented
          communities in the engineering field. The hackathon encourages
          participants to create projects, attend workshops, enjoy games, and
          talk to industry professionals! The hackathon has been around for ___
          years and continues to thrive.{" "}
        </p>
      </div>
      <Image
        src={hearts}
        alt="Hearts Icon"
        className="mx-auto w-2/3 place-items-center md:w-1/4"
      />
    </div>
  );
};

export default RoseHack;
