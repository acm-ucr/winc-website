import Socials from "@/data/socials";
import footer from "@/data/footer";
import WhiteLogo from "@/public/whiteLogo.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 pt-10">
      <div className="h-2 w-full bg-winc-red-400" />
      <div className="flex w-full flex-col items-center justify-center bg-winc-red-400 p-6 text-white md:flex-row md:items-end md:justify-between">
        <Image src={WhiteLogo} alt="WINC Logo" />
        <div className="mt-8 flex flex-col md:mt-0 md:flex-row md:space-x-20">
          {footer.map(({ title, links }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-4 md:gap-6 md:py-0"
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
          <div className="my-4 flex items-end justify-center gap-4 text-4xl md:my-0 md:flex-col md:gap-2">
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
