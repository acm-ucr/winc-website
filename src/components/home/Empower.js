import React from "react";
import Title from "@/components/Title";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Empower = () => {
  return (
    <Row>
      <Col className="flex justify-center items-center flex-col">
        <Title text="Empowering Women in Tech" textcolor="text-winc-black" />
        <div className="bg-winc-pink w-14 h-1 mt-4"></div>
        <p className="w-2/5 mt-3 text-center text-3xl text-winc-black">
          We&#39;re dedicated to empowering and supporting a network of leading
          women in tech at the University of California, Riverside. We&#39;re
          UCR Women in Computing.
        </p>
      </Col>
    </Row>
  );
};

export default Empower;
