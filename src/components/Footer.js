import logo from "@/public/assets/whiteLogo.webp";
import Socials from "@/data/Socials";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-winc-white border-t-8 border-winc-pink w-full">
      <div className="bg-winc-pink flex w-full justify-between items-end p-8 pt-4 border-t-8 border-winc-white">
        <Link href="/home">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="grid text-winc-white justify-between grid-cols-1 md:grid-cols-4 items-end w-8/12 ">
          <div className="flex flex-col space-y-4 min-w-fit mb-4">
            <div className="text-xl md:text-4xl font-semibold">PEOPLE</div>
            <Link href="/about">
              <div className="text-base md:text-2xl font-light">About</div>
            </Link>
            <Link href="/board">
              <div className="text-base md:text-2xl font-light">Board</div>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 min-w-fit mb-4">
            <div className="text-xl md:text-4xl font-semibold">JOIN</div>
            <Link href="/events">
              <div className="text-base md:text-2xl font-light">Events</div>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform">
              <div className="text-base md:text-2xl font-light">Membership</div>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 min-w-fit mb-4">
            <div className="text-xl md:text-4xl font-semibold">
              Stay In Touch
            </div>
            {/* <Link href=""> */}
            <div className="text-base md:text-2xl font-light">Slack</div>
            {/* </Link> */}
            <Link href="mailto:wincucr@gmail.com">
              <div className="text-base md:text-2xl font-light">
                wincucr@gmail.com
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 items-center md:items-end">
            {Socials.map((social, index) => {
              return (
                <Link href={social.path} key={index}>
                  {social.image}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
