import { StaticImageData } from "next/image";
import Image from "next/image";
import EventTitle from "@/components/events/eventtitle";

interface whatIsProps {
  titleText: string;
  sideImage: StaticImageData;
  sideImage2?: StaticImageData;
  content: string;
  content2?: string;
}

const WhatIsRoseHack = ({
  titleText,
  sideImage,
  sideImage2,
  content,
  content2,
}: whatIsProps) => {
  return (
    <div className="mx-auto my-6 flex w-2/3 flex-col place-items-center justify-center gap-8 md:flex-row">
      <div className="flex-2 flex w-full flex-col gap-8 text-center text-lg md:w-2/3 md:text-left md:text-xl">
        <EventTitle text={titleText} />
        <p>{content}</p>
        {content2 && <p>{content2}</p>}
      </div>
      <div className="relative w-full md:ml-8 md:w-1/3">
        <Image
          src={sideImage}
          alt="Red Background"
          className="w-full border-4 border-winc-red-300 p-8"
        />

        {sideImage2 && (
          <Image
            src={sideImage2}
            alt="Hearts Icon"
            className="absolute -left-1 top-3 w-full md:-left-4 md:top-6"
          />
        )}
      </div>
    </div>
  );
};

export default WhatIsRoseHack;
