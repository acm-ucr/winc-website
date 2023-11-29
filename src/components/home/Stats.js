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
    <div className="flex flex-col justify-center items-center bg-winc-pink outline outline-8 outline-winc-pink outline-offset-8 mb-16">
      <Row className="flex justify-center w-11/12 h-full my-16">
        <Col
          sm={6}
          md={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <Stat
            icon={<FaChalkboardTeacher className="text-5xl md:text-8xl" />}
            stat="100+"
            type="Workshops"
          />
        </Col>
        <Col
          sm={6}
          md={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <Stat
            icon={<IoPersonSharp className="text-5xl md:text-7xl" />}
            stat="500+"
            type="Members"
          />
        </Col>
        <Col
          sm={6}
          md={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <Stat
            icon={<FaUserGraduate className="text-5xl md:text-7xl" />}
            stat="1000+"
            type="Alumni"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
