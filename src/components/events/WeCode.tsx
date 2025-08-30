import Image from "next/image";

import EventTitle from "@/components/events/EventTitle";
import weCode from "@/public/events/weCode.webp";
import redBackground from "@/public/events/redBackground.svg";

const WeCode = () => {
  return (
    <div className="mx-auto flex w-2/3 flex-col justify-center gap-8 md:flex-row">
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        {/* <div className="mx-auto"> */}
        <EventTitle text={"What is WECode?"} />
        {/* </div> */}
        <p className="mt-4 text-center text-2xl md:text-left">
          WECode is a Harvard based conference run by students. It is a space
          that highlights underrepresented communities. It is THE largest
          student run Women in Computer Science run conference in the US.{" "}
        </p>
        <p className="text-center text-2xl md:text-left">
          WINC came up with the funding to send a few members there to enjoy the
          experience first hand.
        </p>
      </div>
      <div className="relative w-full md:w-1/2">
        <Image
          src={redBackground}
          alt="Red Background"
          className="w-full md:w-3/4"
        />
        <Image
          src={weCode}
          alt="Hearts Icon"
          className="absolute -left-4 top-6 w-full md:w-3/4"
        />
      </div>
    </div>
  );
};

export default WeCode;
