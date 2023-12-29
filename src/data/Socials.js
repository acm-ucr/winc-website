import {
  FaInstagram,
  FaGithub,
  FaSlack,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Socials = [
  {
    path: "https://www.instagram.com/wincucr/",
    title: "Instagram",
    image: <FaInstagram className="text-4xl"></FaInstagram>,
  },
  {
    path: "https://github.com/winc-ucr",
    title: " Github",
    image: <FaGithub className="text-4xl"></FaGithub>,
  },
  {
    path: "https://join.slack.com/t/wincucr/shared_invite/zt-27xdsp07m-sPKN9hnqg0KRzYi832tm7Q",
    title: "Slack",
    image: <FaSlack className="text-4xl"></FaSlack>,
  },
  {
    path: "https://www.linkedin.com",
    title: "LinkdIn",
    image: <FaLinkedinIn className="text-4xl"></FaLinkedinIn>,
  },
  {
    path: "https://www.youtube.com/@womenincomputingatucr1832",
    title: "Youtube",
    image: <FaYoutube className="text-4xl"></FaYoutube>,
  },
];

export default Socials;
