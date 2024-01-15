import {
  FaInstagram,
  FaGithub,
  FaSlack,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Socials = [
  {
    path: "wincucr@gmail.com",
    title: "Mail",
    image: <FaEnvelope />,
  },
  {
    path: "https://www.instagram.com/wincucr/",
    title: "Instagram",
    image: <FaInstagram />,
  },
  {
    path: "https://github.com/winc-ucr",
    title: " Github",
    image: <FaGithub />,
  },
  {
    path: "https://join.slack.com/t/wincucr/shared_invite/zt-27xdsp07m-sPKN9hnqg0KRzYi832tm7Q",
    title: "Slack",
    image: <FaSlack />,
  },
  {
    path: "https://www.linkedin.com/company/ucr-women-in-computing/",
    title: "LinkdIn",
    image: <FaLinkedinIn />,
  },
  {
    path: "https://www.youtube.com/@womenincomputingatucr1832",
    title: "Youtube",
    image: <FaYoutube />,
  },
];

export default Socials;
