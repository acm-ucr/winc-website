import { memberCards } from "@/data/membercards";
import memberavatar from "@/public/about/memberavatar.webp";
import Image from "next/image";

const BecomeMember = () => {
  return (
    <>
      <div className="mb-3 h-2 w-full bg-winc-red-400" />
      <div className="w-full bg-winc-red-400 p-3 px-8 lg:px-16">
        <p className="p-3 pb-8 text-center text-4xl font-bold text-white">
          Become A Member
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-10">
          {memberCards.map((memberCard, index) => (
            <div
              key={index}
              className="m-3 flex aspect-square flex-col items-center justify-start space-y-4 rounded-xl bg-white p-4 text-center text-winc-red-400 outline outline-4 outline-offset-8 outline-white md:space-y-0 md:p-2 lg:space-y-6 lg:p-4"
            >
              <Image
                src={memberavatar}
                className="m-2 mb-6"
                alt={"avatar icon"}
                width={40}
                height={40}
              />
              <p className="mb-3 text-xl font-bold md:text-sm lg:text-xl">
                {memberCard.title}
              </p>
              <p className="text-md md:text-xs lg:text-lg">{memberCard.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 h-2 w-full bg-winc-red-400" />
    </>
  );
};

export default BecomeMember;
