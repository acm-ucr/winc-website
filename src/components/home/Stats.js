"use client";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import Stat from "./Stat";

// style the background rectangle here

const Stats = () => {
  return (
    <div className="flex justify-center items-center bg-winc-pink w-full p-16 outline outline-8 outline-winc-pink outline-offset-8 my-4">
      <div className=""></div>
      {/* <div className="bg-winc-pink flex flex-row w-11/12"> */}
      <Row className="flex justify-center w-11/12 ">
        <Col className="flex flex-col items-center justify-center text-center mb-12">
          <Stat
            icon={<FaChalkboardTeacher size="84px" />}
            stat="100+"
            type="Workshops"
          />
        </Col>
        <Col className="flex flex-col items-center justify-center text-center mb-12">
          <Stat
            icon={<IoPersonSharp size="70px" />}
            stat="500+"
            type="Members"
          />
        </Col>
        <Col className="flex flex-col items-center justify-center text-center mb-12">
          <Stat
            icon={<FaUserGraduate size="70px" />}
            stat="1000+"
            type="Alumni"
          />
        </Col>
      </Row>

      {/* </div> */}
    </div>
  );
};

export default Stats;
