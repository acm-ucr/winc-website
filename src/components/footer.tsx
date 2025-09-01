import Socials from "@/data/socials";
import footer from "@/data/footer";
import WhiteLogo from "@/public/whiteLogo.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 pt-10">
      <div className="h-[1vh] w-full bg-winc-red-400" />
      <div className="flex h-[40vh] w-full items-end justify-between bg-winc-red-400 p-10 text-white">
        <Image src={WhiteLogo} alt="WINC Logo" />
        <div className="flex space-x-20">
          <div className="flex w-[45vw] space-x-20">
            {footer.map(({ title, links }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-6"
              >
                <p className="text-3xl font-bold">{title}</p>
                {links.map(({ name, link }, subIndex) =>
                  name === "wincucr@gmail.com" ? (
                    <Link
                      href={`mailto:${link}`}
                      key={subIndex}
                      className="text-2xl hover:text-winc-red-600"
                    >
                      {name}
                    </Link>
                  ) : (
                    <Link
                      href={link}
                      key={subIndex}
                      className="text-2xl hover:text-winc-red-600"
                    >
                      {name}
                    </Link>
                  ),
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end justify-center gap-2 text-4xl">
            {Socials.map(({ path, title, icon: Icon }, index) =>
              title === "Mail" ? (
                <Link
                  href={`mailto:${path}`}
                  key={index}
                  className="hover:text-winc-red-600"
                >
                  <Icon />
                </Link>
              ) : (
                <Link
                  key={index}
                  href={path}
                  target="_blank"
                  className="hover:text-winc-red-600"
                >
                  <Icon />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
