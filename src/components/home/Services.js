import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Service from "./Service";
import { MdMic } from "react-icons/md";
const Services = () => {
  return (
    <div className="flex justify-center w-full my-8">
      <Row className="w-11/12 flex justify-center">
        <Col>
          <Service
            icon={<MdMic className="text-winc-yellow" size={50} />}
            topic="CONVERSATIONS"
            textColor="text-winc-yellow"
            description="Discuss health and well-being with Let's Talk and catch up with WINC alumni on our Podcast"
            media="LISTEN"
            mediaBG="bg-winc-yellow"
            mediaText="text-winc-black"
            backgroundColor="bg-winc-black"
          />
        </Col>
        <Col>
          <Service
            icon={<MdMic className="text-winc-yellow" size={50} />}
            topic="CONVERSATIONS"
            textColor="text-winc-yellow"
            description="Discuss health and well-being with Let's Talk and catch up with WINC alumni on our Podcast"
            media="LISTEN"
            mediaBG="bg-winc-yellow"
            mediaText="text-winc-black"
            backgroundColor="bg-winc-black"
          />
        </Col>
        <Col>
          <Service
            icon={<MdMic className="text-winc-yellow" size={50} />}
            topic="CONVERSATIONS"
            textColor="text-winc-yellow"
            description="Discuss health and well-being with Let's Talk and catch up with WINC alumni on our Podcast"
            media="LISTEN"
            mediaBG="bg-winc-yellow"
            mediaText="text-winc-black"
            backgroundColor="bg-winc-black"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
