import Image, { StaticImageData } from "next/image";
import leftHeart from "@/public/events/picture/leftHeart.webp";
import rightHeart from "@/public/events/picture/rightHeart.webp";

interface EventPictureCardProps {
  title: string;
  image: StaticImageData;
};

const EventPictureCard = ({title, image} : EventPictureCardProps ) => {
  return (
    <div className="mx-auto">
      <div className="h-3 w-full bg-winc-red-400" />
      <div className="h-7 w-full bg-white" />
      <div className="relative flex flex-col items-center justify-center bg-winc-red-400 py-5">
        <p className="text-3xl font-bold text-white">{title}</p>
        <div className="h-1 w-24 bg-winc-red-600" />
        <div className="h-1 w-16 bg-winc-red-100" />

        <div className="relative mt-5 flex items-center justify-center pb-10">
          <Image
            src={image}
            alt="Board group photo"
            className="w-3/4 md:w-1/2 border-8 border-winc-red-600"
          />
          <Image
            src={leftHeart}
            alt="leftheart"
            className="absolute md:left-96 md:-top-24 md:w-full w-1/4 left-4 -top-10"
          />
          <Image
            src={rightHeart}
            alt="rightheart"
            className="absolute md:right-96 md:-bottom-12 md:w-full w-1/4 right-4 bottom-0"
          />
        </div>
      </div>
      <div className="h-7 w-full bg-white" />
      <div className="h-3 w-full bg-winc-red-400" />
    </div>
  );
};

export default EventPictureCard;
