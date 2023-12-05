import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "@/components/Title";
import Circle from "@/components/home/Circle";
import homeWinc from "@/public/assets/homeWinc.svg";
import Button from "@/components/home/Button";
import Link from "next/link";

const Introduction = () => {
  return (
    <Row className="text-winc-black flex items-center font-urbanist -mt-8 pb-28 px-20">
      <Col className="text-left flex flex-col">
        <p className="flex text-winc-pink font-bold text-3xl">we are...</p>
        <Title text="Women in Computing;" textcolor="text-winc-black" />
        <p className="flex text-winc-black font-normal w-9/12 text-2xl pt-6">
          Supporting, celebrating, and advocating for women in all aspects of
          the computing field at the University of California, Riverside (UCR).
        </p>
        <div className="mt-10 ml-40">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform">
            <Button text="Join Now" />
          </Link>
        </div>
      </Col>
      <Col>
        <Circle width={700} height={700} clip="left" image={homeWinc} />
      </Col>
    </Row>
  );
};

export default Introduction;
