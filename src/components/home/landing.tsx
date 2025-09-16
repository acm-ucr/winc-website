import harvard from "@/public/homepage/harvard.webp";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center py-4 md:grid-cols-2">
      <div className="mx-auto w-3/4">
        <p className="text-center text-2xl font-semibold text-winc-red-400 md:text-left">
          we are...
        </p>
        <p className="text-center text-5xl font-extrabold text-winc-blue-500 md:text-left">
          Women in Computing;
        </p>
        <p className="my-8 pt-3 text-center text-xl text-winc-blue-500 md:my-4 md:text-left">
          Supporting, celebrating, and advocating for women in all aspects of
          the computing field at the University of California, Riverside (UCR).
        </p>
        <div className="flex justify-center pb-8 md:justify-end md:pb-0">
          <Link
            className="rounded-2xl bg-winc-red-400 px-16 py-2 text-2xl font-bold italic text-white hover:scale-105 hover:opacity-80"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform"
          >
            Join Now
          </Link>
        </div>
      </div>
      <div className="mx-auto aspect-square w-11/12 rounded-full border-4 border-winc-red-700 bg-winc-red-400 md:mx-0 md:w-full md:-translate-y-8 md:p-6">
        <div className="flex aspect-square items-center justify-center rounded-full border-4 border-winc-red-700 bg-winc-red-300">
          <Image
            src={harvard}
            alt="harvard"
            className="mx-auto w-11/12 py-4 md:mx-0 md:w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
