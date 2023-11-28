import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "@/components/Title";
import Circle from "@/components/home/Circle";
import homeWinc from "@/public/assets/homeWinc.svg";
import Button from "@/components/home/Button";

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
        <Button
          backgroundColor="bg-winc-pink"
          textColor="text-winc-white"
          text="Join Now"
          topMargin="mt-10"
        />
      </Col>
      <Col>
        <Circle width={700} height={700} clip="left" image={homeWinc} />
      </Col>
    </Row>
  );
};

export default Introduction;
