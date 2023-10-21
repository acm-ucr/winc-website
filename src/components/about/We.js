import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Frame from "@/components/about/Frame";
import about1 from "@/public/assets/about1.webp";
import Title from "@/components/Title";

const We = () => {
  return (
    <Row className="text-winc-black flex justify-between items-center pt-28">
      <Col sm={6} className="flex justify-center items-center">
        <Frame x={-40} y={-40} picture={about1} />
      </Col>
      <Col sm={6} className="text-left flex justify-center items-center">
        <div>
          <div className="pb-4">
            <Title text="What do we do?" />
          </div>
          <div className="pl-5">
            <div className="bg-winc-pink w-14 h-1"></div>
            <p className="flex font-urbanist text-winc-black font-normal text-2xl pt-14 pr-24">
              We host a plethora of events. Whether you want to ace that coding
              interview with our workshops, or want to attend speaker panels
              with some of the most intelligent, down-to-earth people in the
              industry, or maybe you just want to a hang out with a community,
              WINC is the place for you.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default We;
