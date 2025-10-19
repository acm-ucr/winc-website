import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
/* import { MdEmail } from "react-icons/md"; */

interface BoardProps {
  image: StaticImageData;
  name: string;
  position: string;
  linkedin?: string;
  email?: string;
  year: string;
  major: string;
  /* pronouns?: string;
  starsign?: string; */
}

const Card = ({
  image,
  name,
  position,
  linkedin,
  /* email, */
  year,
  major,
  /* pronouns,
  starsign, */
}: BoardProps) => {
  return (
    <div className="mx-auto mb-6 flex w-4/5 flex-col bg-winc-beige-100 shadow-[8px_-8px_0px_0px] shadow-winc-orange-100">
      <div className="flex flex-col items-center text-left">
        <Image
          src={image}
          alt="text"
          className="flex aspect-square w-full flex-col justify-center px-6 pb-2 pt-6"
        />
      </div>
      <div className="flex items-center justify-between px-6">
        <p className="text-2xl font-semibold text-winc-red-300">{name}</p>
        {linkedin && (
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-xl text-winc-red-300 hover:scale-105 hover:opacity-75 md:text-3xl" />
          </Link>
        )}
      </div>

      <p className="py-2 pl-6 text-lg text-winc-red-300 md:text-xl">
        {position}
      </p>

      <div className="items-left flex flex-col">
        <p className="pb-4 pl-6 text-sm text-winc-red-300 md:text-lg">
          {year} year · {major}
        </p>
      </div>
    </div>
  );
};

export default Card;
