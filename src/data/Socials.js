import {
  FaInstagram,
  FaGithub,
  FaSlack,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = [
  {
    path: "https://www.instagram.com/wincucr/",
    title: "Instagram",
    image: <FaInstagram className="text-4xl"></FaInstagram>,
  },
  {
    path: "https://mail.google.com",
    title: "Email",
    image: <MdEmail className="text-4xl"></MdEmail>,
  },
  {
    path: "https://github.com",
    title: " Github",
    image: <FaGithub className="text-4xl"></FaGithub>,
  },
  {
    path: "https://app.slack.com/",
    title: "Slack",
    image: <FaSlack className="text-4xl"></FaSlack>,
  },
  {
    path: "https://www.linkedin.com",
    title: "LinkdIn",
    image: <FaLinkedinIn className="text-4xl"></FaLinkedinIn>,
  },
  {
    path: "https://www.youtube.com",
    title: "Youtube",
    image: <FaYoutube className="text-4xl"></FaYoutube>,
  },
];

export default Socials;
