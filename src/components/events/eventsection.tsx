import Image from "next/image";
import { type StaticImageData } from "next/image";

const EventSection = ({
  title,
  description,
  image,
  imageAlt,
  reverseLayout = false,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  reverseLayout: boolean;
}) => {
  const textContent = (
    <div className="flex flex-1 flex-col justify-center p-8 text-center md:text-right">
      <p className="text-3xl font-bold text-winc-black-100">{title}</p>
      <div className="mb-2 flex items-center justify-center gap-2 md:justify-end">
        <p className="text-sm text-winc-gray-100">'24-25</p>
        <div className="h-1 w-8 bg-winc-red-600"></div>
      </div>
      <p className="text-xl leading-relaxed text-winc-black-100">
        {description}
      </p>
    </div>
  );

  const imageContent = (
    <div className="relative flex flex-1 items-center justify-center">
      <div
        className={`absolute top-0 -z-10 h-full w-full transform bg-winc-red-400 ${reverseLayout ? "right-0 translate-x-4 md:left-0 md:-translate-x-4" : "right-0 translate-x-4"} -translate-y-4`}
      />
      <div className="relative z-10">
        <Image alt={imageAlt} src={image} />
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row ${reverseLayout ? "md:flex-row-reverse" : "md:flex-row"} mb-16 items-center gap-8`}
    >
      {textContent}
      {imageContent}
    </div>
  );
};

export default EventSection;
