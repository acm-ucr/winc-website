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
  starsign: string;
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
    <div>
      <div className="mb-6 flex h-[98%] w-[70vw] flex-col bg-winc-orange-100 md:w-[17vw]">
        <div className="mr-4 mt-3 flex flex-col bg-winc-beige-100 px-2 text-left md:w-full">
          <div className="flex flex-row items-center justify-center">
            <Image
              src={image}
              alt="text"
              className="flex h-[40vh] w-[52vw] flex-col justify-center p-6 md:h-[32vh] md:w-[24vw]"
            />
          </div>
          <p className="ml-6 py-2 text-xl text-winc-red-300">{name}</p>
          <p className="ml-6 py-2 text-lg text-winc-red-300 md:text-xl">
            {position}
          </p>
          <div className="flew-row ml-6 flex items-center gap-4 text-winc-red-300">
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-3xl hover:scale-105 hover:opacity-75 md:text-4xl" />
            </Link>
            <Link href={email} target="_blank" rel="noopener noreferrer">
              <MdEmail className="text-3xl hover:scale-105 hover:opacity-75 md:text-5xl" />
            </Link>
          </div>
          <div className="items-left ml-6 flex flex-col">
            <p className="text-sm text-winc-red-300 md:text-lg">
              {year} year · {major}
            </p>
            <p className="text-sm text-winc-red-300 md:text-lg">
              Pronouns: {pronouns}
            </p>
            <p className="mb-4 text-sm text-winc-red-300 md:text-lg">
              Star Sign: {starsign}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
