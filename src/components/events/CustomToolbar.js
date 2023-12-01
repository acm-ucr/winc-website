"use client";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center">
      <Row className=" w-full">
        <Col
          xs={4}
          className=" w-4/12 flex justify-start items-center text-3xl font-urbanist font-bold"
        >
          <FaArrowLeft
            onClick={() => event.onNavigate("PREV")}
            className="text-winc-pink hover:cursor-pointer"
          />
          <div className="text-center text-5xl p-4 text-winc-pink">
            {event.date.toLocaleDateString("en-US", { month: "short" })}
            {event.date.getFullYear() % 100}
          </div>
          <FaArrowRight
            onClick={() => event.onNavigate("NEXT")}
            className="text-winc-pink hover:cursor-pointer"
          />
        </Col>
        <Col className="flex w-8/12 p-4">
          {/* Kelly add your code here for the buttons */}
        </Col>
      </Row>
    </div>
  );
};

export default CustomToolbar;
