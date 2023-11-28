"use client";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import Title from "../Title";
import Service from "./Service";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// style the background rectangle here

const Services = () => {
  return (
    <div className="bg-winc-pink flex flex-col w-full justify-center items-center p-8 outline outline-8 outline-winc-pink outline-offset-8 my-8">
      <div className="flex text-center justify-center pt-2 pb-16">
        <Title text="Become a Member" textcolor="text-winc-white" />
      </div>
      <Row className="flex justify-center w-11/12 pb-16 h-full">
        <Col
          sm={6}
          md={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <Service
            icon={<IoPersonSharp size={40} />}
            info="Meetings & Events"
            description="Sign-in sheets will be sent out at the beginning of every meeting and event.Sign in so we can track attendance and give you access to our newsletters."
          />
        </Col>
        <Col
          sm={6}
          md={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <Service
            icon={<IoPersonSharp size={40} />}
            info="Join our Slack"
            description="Join our Slack to communicate with us and have access to all our channels including #opportunities — a great resouce for seeking internships and on-campus jobs."
          />
        </Col>
        <Col
          sm={6}
          md={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <Service
            icon={<IoPersonSharp size={40} />}
            info="Follow our Socials"
            description="Following our socials will keep you updated on what's happening with Winc!"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
