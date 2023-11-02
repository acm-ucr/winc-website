import {
  FaInstagram,
  MdEmail,
  FaDiscord,
  FaSlack,
  FaLinkdIn,
  FaYoutube,
} from "react-icons/fa";

const Socials = [
  {
    path: "https://www.instagram.com/wincucr/",
    title: "Instagram",
    image: <FaInstagram className="text-5xl"></FaInstagram>,
  },
  {
    path: "https://mail.google.com",
    title: "Email",
    image: <MdEmail className="text-5xl"></MdEmail>,
  },
  {
    path: "https://github.com",
    title: " Github",
    image: <FaGithub className="text-5xl"></FaGithub>,
  },
  {
    path: "https://app.slack.com/",
    title: "Slack",
    image: <FaSlack className="text-5xl"></FaSlack>,
  },
  {
    path: "https://www.linkedin.com",
    title: "LinkdIn",
    image: <FaLinkedinIn className="text-5xl"></FaLinkedinIn>,
  },
  {
    path: "https://www.youtube.com",
    title: "Youtube",
    image: <FaYoutube className="text-5xl"></FaYoutube>,
  },
];

export default Socials;
