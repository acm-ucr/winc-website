import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

interface Social {
  path: string;
  title: string;
  icon: React.ElementType;
}

const Socials: Social[] = [
  {
    path: "https://www.instagram.com/wincucr/",
    title: "Instagram",
    icon: FaInstagram,
  },
  {
    path: "wincucr@gmail.com",
    title: "Mail",
    icon: FaEnvelope,
  },
  {
    path: "https://github.com/winc-ucr",
    title: " Github",
    icon: FaGithub,
  },
  {
    path: "https://discord.gg/an8eGHYkXg",
    title: "Discord",
    icon: FaDiscord,
  },
  {
    path: "https://www.linkedin.com/company/ucr-women-in-computing/",
    title: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    path: "https://www.youtube.com/@womenincomputingatucr1832",
    title: "Youtube",
    icon: FaYoutube,
  },
];

export default Socials;
