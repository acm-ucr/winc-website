import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
  year: string;
};

const YearCard = ({
  title,
  description,
  image,
  reverse,
  year,
}: ProjectCardProps) => {
  return (
    <div
      className={`xl:gap-30 flex flex-col items-center justify-center gap-14 p-10 md:flex-row md:p-20 xl:p-28 2xl:gap-72 2xl:px-48 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-5/6 text-center lg:w-2/5 xl:w-1/2 ${reverse ? "md:text-right" : "md:text-left"}`}
      >
        <div className="mb-5 inline-block lg:mb-10">
          <p className="text-3xl font-semibold text-winc-black-100 xl:text-4xl 2xl:text-5xl">
            {title}
          </p>
          <div className="flex justify-center">
            <p>{year}</p>
            <div className="ml-auto h-1 w-6 bg-winc-red-600 lg:mt-2 lg:h-1.5 lg:w-10 xl:w-14" />
          </div>
        </div>
        <p className="text-md lg:text-xl xl:text-2xl">{description}</p>
      </div>
      <div className="relative w-3/4 lg:w-5/12 xl:w-1/2">
        <div
          className={`absolute bottom-5 left-5 -z-10 h-full w-full bg-winc-red-400 ${reverse ? "right-5" : "left-5"}`}
        />
        <Image src={image} alt={title} className="" />
      </div>
    </div>
  );
};

export default YearCard;
