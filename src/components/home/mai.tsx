import mai from "@/public/homepage/mai.webp";
import group from "@/public/homepage/group.webp";
import Image from "next/image";
const Mai = () => {
  return (
    <div className="my-10">
      <div className="mx-auto grid w-5/6 grid-cols-1 items-center md:grid-cols-2">
        <div className="mx-auto flex w-11/12 justify-center rounded-full bg-winc-red-400">
          <Image src={group} alt="Group" />
        </div>
        <div className="mx-auto mt-8 flex w-11/12 flex-col items-center text-center text-winc-blue-500 md:mt-0">
          <p className="text-3xl font-bold">Empowering Women in Tech</p>
          <div className="mt-1 h-1 w-8 bg-winc-red-400" />
          <p className="mt-4 text-xl font-semibold">
            We're dedicated to empowering and supporting a network of leading
            women in tech at the University of California, Riverside. We're UCR
            Women in Computing.
          </p>
        </div>
        <div className="mx-auto mt-8 flex w-11/12 flex-col items-center text-center text-winc-blue-500 md:mt-0">
          <p className="text-3xl font-bold">Shout out to Mai!</p>
          <div className="mt-1 h-1 w-8 bg-winc-red-400" />
          <p className="mt-4 text-xl font-semibold">
            Mai Temraz is one of our key advisors for WINC. She helps us
            navigate the club accordingly and provides us students with support.
            We greatly appreciate her work!
          </p>
        </div>
        <div className="mx-auto flex w-10/12 justify-center rounded-full bg-winc-red-400">
          <Image src={mai} alt="Mai" className="w-10/12 py-6" />
        </div>
      </div>
    </div>
  );
};

export default Mai;
