import Image, { StaticImageData } from "next/image";
import leftHeart from "@/public/events/picture/leftHeart.webp";
import rightHeart from "@/public/events/picture/rightHeart.webp";

interface EventPictureCardProps {
  title: string;
  image: StaticImageData;
}

const EventPictureCard = ({ title, image }: EventPictureCardProps) => {
  return (
    <div className="mx-auto">
      <div className="h-3 w-full bg-winc-red-400" />
      <div className="h-10 w-full bg-white" />
      <div className="relative flex flex-col items-center justify-center bg-winc-red-400 py-5">
        <p className="text-3xl font-bold text-white">{title}</p>
        <div className="h-1 w-24 bg-winc-red-600" />
        <div className="h-1 w-16 bg-winc-red-100" />

        <div className="relative mt-5 flex items-center justify-center pb-10">
          <Image
            src={image}
            alt="Board group photo"
            className="w-3/4 border-8 border-winc-red-600 md:w-1/2"
          />
          <Image
            src={leftHeart}
            alt="leftheart"
            className="absolute -top-10 left-4 w-1/4 md:-top-16 md:left-96 md:ml-5 md:w-1/12"
          />
          <Image
            src={rightHeart}
            alt="rightheart"
            className="absolute bottom-0 right-4 w-1/4 md:-bottom-8 md:right-96 md:mr-5 md:w-1/12"
          />
        </div>
      </div>
      <div className="h-10 w-full bg-white" />
      <div className="h-3 w-full bg-winc-red-400" />
    </div>
  );
};

export default EventPictureCard;
