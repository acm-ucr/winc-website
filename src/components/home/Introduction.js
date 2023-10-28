import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "@/components/Title";

const Introduction = () => {
  return (
    <Row className="text-winc-black flex items-center font-urbanist py-28 px-20">
      <Col className="text-left flex flex-col">
        <p className="flex text-winc-pink font-bold text-3xl">we are...</p>
        <Title text="Women in Computing;" textcolor="text-winc-black" />
        <p className="flex text-winc-black font-normal text-2xl w-5/12 pt-6">
          Supporting, celebrating, and advocating for women in all aspects of
          the computing field at the University of California, Riverside (UCR).
        </p>
      </Col>
    </Row>
  );
};

export default Introduction;
