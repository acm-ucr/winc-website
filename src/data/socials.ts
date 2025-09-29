import {
  FaInstagram,
  FaGithub,
  FaSlack,
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
    path: "https://join.slack.com/t/wincucr/shared_invite/zt-27xdsp07m-sPKN9hnqg0KRzYi832tm7Q",
    title: "Slack",
    icon: FaSlack,
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
