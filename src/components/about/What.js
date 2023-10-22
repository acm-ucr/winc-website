import React from "react";
import Title from "@/components/Title.js";
import Frame from "@/components/about/Frame.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about1 from "@/public/assets/about1.webp";

const What = () => {
  return (
    <Row className="text-winc-black flex items-center py-28 px-20">
      <Col className="flex flex-col text-right">
        <Title text="What is WINC?" />
        <div className="flex justify-end">
          <div className="bg-winc-pink w-14 h-1 mt-3"></div>
        </div>
        <div className="w-11/12 flex justify-end">
          <p className="text-left font-normal text-2xl w-11/12 pt-20">
            WINC is the University of California, Riverside's ACM-W chapter
            dedicated to empowering and supporting a network of women in tech.
            <br></br>
            We are an inclusive community for anyone who is interested in
            advocating for women in tech and anyone - regardless of skill - who
            is interested in the field of computing.
          </p>
        </div>
      </Col>

      <Col className="flex justify-center">
        <Frame x={50} y={-50} picture={about1} />
      </Col>
    </Row>
  );
};

export default What;