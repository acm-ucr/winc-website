import logo from "@/public/assets/whiteLogo.webp";
import Socials from "@/data/Socials";
import Image from "next/image";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="bg-winc-white border-t-8 border-winc-pink">
      <div className="bg-winc-pink flex w-full justify-between items-end p-8 pt-28 border-t-8 border-winc-white">
        <Image src={logo} alt="logo" />
        <Row className="flex text-winc-white justify-between items-end w-8/12">
          <Col className="flex flex-col space-y-4 min-w-fit mb-4">
            <div className="text-4xl font-semibold">PEOPLE</div>
            <Link href="/about">
              <div className="text-2xl font-light">About</div>
            </Link>
            <Link href="/board">
              <div className="text-2xl font-light">Board</div>
            </Link>
          </Col>
          <Col className="flex flex-col space-y-4 min-w-fit mb-4">
            <div className="text-4xl font-semibold">JOIN</div>
            <Link href="/events">
              <div className="text-2xl font-light">Events</div>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform">
              <div className="text-2xl font-light">Membership</div>
            </Link>
          </Col>
          <Col className="flex flex-col space-y-4 min-w-fit mb-4">
            <div className="text-4xl font-semibold">Stay In Touch</div>
            {/* <Link href=""> */}
            <div className="text-2xl font-light">Slack</div>
            {/* </Link> */}
            <Link href="mailto:wincucr@gmail.com">
              <div className="text-2xl font-light">wincucr@gmail.com</div>
            </Link>
          </Col>
          <Col className="flex flex-col space-y-2 items-end">
            {Socials.map((social, index) => {
              return (
                <Link href={social.path} key={index}>
                  {social.image}
                </Link>
              );
            })}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
