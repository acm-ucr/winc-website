import { StaticImageData } from "next/image";
import Image from "next/image";

import EventTitle from "@/components/events/EventTitle";

interface lookDownProps {
  titleText: string;
  sideImage: StaticImageData;
  sideImage2?: StaticImageData;
  content: string;
  content2?: string;
}

const LookDown = ({
  titleText,
  sideImage,
  sideImage2,
  content,
  content2,
}: lookDownProps) => {
  return (
    <div className="mx-auto flex w-2/3 flex-col justify-center gap-8 md:flex-row">
      <div className="flex flex-col gap-8">
        <EventTitle text={titleText} />
        <p className="text-center md:text-left">{content}</p>
        {content2 && <p className="text-center md:text-left">{content2}</p>}
      </div>
      <div className="relative w-full md:w-1/2">
        {sideImage2 && (
          <Image
            src={sideImage2}
            alt="Red Background"
            className="w-full md:w-3/4"
          />
        )}
        <Image
          src={sideImage}
          alt="Hearts Icon"
          className="absolute -left-4 top-6 w-full md:w-3/4"
        />
      </div>
    </div>
  );
};

export default LookDown;
