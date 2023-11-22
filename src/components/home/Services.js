import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Service from "./Service";
import { MdMic } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMiniCodeBracket } from "react-icons/hi2";
const Services = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="outline outline-offset-8 outline-winc-yellow outline-4 w-6/12 h-full bg-winc-yellow flex items-center justify-center">
          <div className="flex text-center text-winc-pink text-5xl justify-center font-urbanist font-semibold p-2">
            Grow and thrive
          </div>
        </div>
      </div>

      <div className="flex justify-center my-16 text-2xl font-normal font-urbanist text-winc-black">
        <p>
          We offer all the opportunities and resources necessary for success
        </p>
      </div>

      <div className="flex justify-center w-full my-8">
        <Row className="w-11/12 flex justify-center">
          <Col>
            <Service
              icon={<BsFillPersonFill className="text-winc-white" size={50} />}
              topic="COMMUNITY"
              textColor="text-winc-white"
              description="Interact with each other in a more casual setting with our inclusive bonding events."
              media="SLACK"
              mediaBG="bg-winc-white"
              mediaText="text-winc-pink"
              backgroundColor="bg-winc-pink"
            />
          </Col>
          <Col>
            <Service
              icon={<MdMic className="text-winc-yellow" size={50} />}
              topic="CONVERSATIONS"
              textColor="text-winc-yellow"
              description="Discuss health and well-being with Let's Talk and catch up with WINC alumni on our Podcast."
              media="LISTEN"
              mediaBG="bg-winc-yellow"
              mediaText="text-winc-black"
              backgroundColor="bg-winc-black"
            />
          </Col>
          <Col>
            <Service
              icon={<HiMiniCodeBracket className="text-winc-pink" size={50} />}
              topic="WORKSHOPS"
              textColor="text-winc-pink"
              description="Tried and true methods from our network of members to break into tech."
              media="YOUTUBE"
              mediaBG="bg-winc-pink"
              mediaText="text-winc-yellow"
              backgroundColor="bg-winc-yellow"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Services;
