import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CustomToolbar = () => {
  return (
    <Row className="flex justify-center bg-white">
      <Col className="flex items-center text-3xl font-urbanist text-winc-pink font-bold">
        <FaArrowLeft className="hover:cursor-pointer" />
        <div className="text-5xl px-3">Nov 23</div>
        <FaArrowRight className="hover:cursor-pointer" />
      </Col>
      <Col className="flex items-center pl-96">
        <div className="flex justify-center items-center bg-winc-yellow text-winc-black w-60 h-10">
          General Meeting
        </div>
        <div className="flex justify-center items-center bg-winc-orange text-white w-60 h-10 m-2">
          Other Meeting
        </div>
        <div className="flex justify-center items-center bg-winc-pink text-white w-60 h-10">
          Social
        </div>
      </Col>
    </Row>
  );
};

export default CustomToolbar;
