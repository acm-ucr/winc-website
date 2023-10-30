import logo from "@/public/assets/whiteLogo.webp";
import Image from "next/image";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="bg-winc-pink flex w-full justify-between items-end p-8 outline outline-8 outline-winc-pink outline-offset-8 my-8 h-full">
      <Image src={logo} alt="logo" />
      <Row className="flex text-winc-white justify-between w-6/12">
        <Col className="flex flex-col space-y-4">
          <div className="text-3xl font-semibold">PEOPLE</div>
          <Link href="/about">
            <div className="text-xl">About</div>
          </Link>
          <Link href="/board">
            <div className="text-xl">Board</div>
          </Link>
        </Col>
        <Col className="flex flex-col space-y-4">
          <div className="text-3xl font-semibold">JOIN</div>
          <Link href="/events">
            <div className="text-xl">Events</div>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform">
            <div className="text-xl">Membership</div>
          </Link>
        </Col>
        <Col className="flex flex-col space-y-4">
          <div className="text-3xl font-semibold">Stay In Touch</div>
          {/* <Link href=""> */}
          <div className="text-xl">Slack</div>
          {/* </Link> */}
          <Link href="mailto:wincucr@gmail.com">
            <div className="text-xl">wincucr@gmail.com</div>
          </Link>
        </Col>
        <Col className="">{/* Socials data go here */}</Col>
      </Row>
    </div>
  );
};

export default Footer;
