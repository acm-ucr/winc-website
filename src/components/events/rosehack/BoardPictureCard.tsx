import Image from "next/image";
import leftHeart from "@/public/events/picture/leftHeart.webp";
import rightHeart from "@/public/events/picture/rightHeart.webp";
import boardGroup from "@/public/events/picture/boardGroup.webp";
import gameSocial from "@/public/events/picture/GameSocial.webp";
import selfie from "@/public/events/picture/Selfie.webp";

const BoardPictureCard = () => {
  return (
    <div className="mx-auto">
      <div className="h-3 w-full bg-winc-red-400" />
      <div className="h-7 w-full bg-white" />
      <div className="relative flex flex-col items-center justify-center bg-winc-red-400 py-5">
        <p className="text-3xl font-bold text-white">Board</p>
        <div className="h-1 w-24 bg-winc-red-600" />
        <div className="h-1 w-16 bg-winc-red-100" />

        <div className="relative mt-5 flex items-center justify-center">
          <Image
            src={boardGroup}
            alt="Board group photo"
            className="w-1/2 border-8 border-winc-red-600"
          />
          <Image
            src={leftHeart}
            alt="leftheart"
            className="absolute -left-12 -top-16 w-1/5"
          />
          <Image
            src={rightHeart}
            alt="rightheart"
            className="absolute -bottom-16 -right-12 w-1/5"
          />
        </div>
      </div>
      <div className="h-7 w-full bg-white" />
      <div className="h-3 w-full bg-winc-red-400" />
    </div>
  );
};

export default BoardPictureCard;
