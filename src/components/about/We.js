import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Frame from "@/components/about/Frame";
import photo from "@/public/assets/about/about1.webp";
import Title from "@/components/Title";

const We = () => {
  return (
    <Row className="text-winc-black flex items-center font-urbanist py-28 px-20">
      <Col className="flex items-center justify-center">
        <Frame x={-40} y={-40} picture={photo} />
      </Col>
      <Col className="text-left flex flex-col">
        <Title text="What do we do?" textcolor="text-winc-black" />
        <div className="bg-winc-pink w-14 h-1 mt-6 "></div>
        <p className="flex text-winc-black font-normal text-2xl w-11/12 pt-20">
          We host a plethora of events. Whether you want to ace that coding
          interview with our workshops, or want to attend speaker panels with
          some of the most intelligent, down-to-earth people in the industry, or
          maybe you just want to a hang out with a community, WINC is the place
          for you.
        </p>
      </Col>
    </Row>
  );
};

export default We;
