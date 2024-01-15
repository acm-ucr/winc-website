import logo from "@/public/assets/whiteLogo.webp";
import Socials from "@/data/Socials";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-winc-white border-t-8 border-winc-pink w-full">
      <div className="bg-winc-pink flex w-full p-6 md:px-8 md:py-12 border-t-8 border-winc-white">
        <div className="grid text-winc-white justify-between grid-cols-3 md:grid-cols-4 w-full ">
          <div className="flex items-center justify-start md:items-end ">
            <Link href="/home">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex flex-col space-y-4 min-w-fit items-center mb-6 md:mb-0">
            <div className="text-xl md:text-4xl font-semibold">PEOPLE</div>
            <Link href="/about">
              <div className="text-base md:text-2xl font-light">About</div>
            </Link>
            <Link href="/board">
              <div className="text-base md:text-2xl font-light">Board</div>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 min-w-fit items-center mb-6 md:mb-0">
            <div className="text-xl md:text-4xl font-semibold">JOIN</div>
            <Link href="/events">
              <div className="text-base md:text-2xl font-light">Events</div>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform">
              <div className="text-base md:text-2xl font-light">Membership</div>
            </Link>
          </div>
          {/* <div> */}
          <div className="flex flex-row space-x-2 justify-center items-center text-2xl md:text-4xl col-span-3 md:col-span-1">
            {Socials.map((social, index) => {
              return (
                <Link
                  href={
                    social.path.startsWith("http")
                      ? social.path
                      : `mailto:${social.path}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {social.image}
                </Link>
              );
            })}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
