import React from "react";
import Title from "@/components/Title";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Empower = () => {
  return (
    <Row className="flex items-center justify-center font-urbanist">
      <Col></Col>
      <Col className="flex flex-col text-center justify-center">
        <Title text="Empowering Women in Tech" textcolor="text-winc-black" />
        <div className="flex justify-center">
          <div className="bg-winc-pink w-14 h-1 mt-4"></div>
        </div>
        <p className="w-11/12 mt-3 font-normal text-center text-3xl text-winc-black">
          We&#39;re dedicated to empowering and supporting a network of leading
          women in tech at the University of California, Riverside. We&#39;re
          UCR Women in Computing.
        </p>
      </Col>
    </Row>
  );
};

export default Empower;
