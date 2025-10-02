import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface BoardProps {
  image: StaticImageData;
  name: string;
  position: string;
  linkedin: string;
  email: string;
  year: string;
  major: string;
  pronouns: string;
  starsign?: string;
}

const Card = ({
  image,
  name,
  position,
  linkedin,
  email,
  year,
  major,
  pronouns,
  starsign,
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
      <p className="text-center text-2xl font-semibold text-winc-red-300">
        {name}
      </p>
      <p className="py-2 text-center text-lg text-winc-red-300 md:text-xl">
        {position}
      </p>
      <div className="ml-6 flex items-center gap-4 text-winc-red-300">
        {linkedin && (
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-3xl hover:scale-105 hover:opacity-75 md:text-4xl" />
          </Link>
        )}
        {email && (
          <Link href={email} target="_blank" rel="noopener noreferrer">
            <MdEmail className="text-3xl hover:scale-105 hover:opacity-75 md:text-5xl" />
          </Link>
        )}
      </div>
      <div className="items-left flex flex-col">
        <p className="pb-4 text-center text-sm text-winc-red-300 md:text-lg">
          {year} year · {major}
        </p>
        {pronouns && (
          <p className="text-sm text-winc-red-300 md:text-lg">
            Pronouns: {pronouns}
          </p>
        )}
        {starsign && (
          <p className="mb-4 text-sm text-winc-red-300 md:text-lg">
            Star Sign: {starsign}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
