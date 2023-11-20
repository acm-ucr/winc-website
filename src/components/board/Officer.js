import React from "react";
import Image from "next/image";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Officer = ({
  image,
  name,
  position,
  linkedin,
  email,
  year,
  major,
  pronouns,
  hobbies,
}) => {
  return (
    <div className="bg-winc-beige px-4 pt-4 pb-2 w-full shadow-[12px_-10px_0px_2px] shadow-winc-orange">
      <div className="text-winc-pink font-urbanist p-2">
        <Row className="space-x-3 bg-winc-pink w-full h-full">
          <Col className="space-y-3 bg-winc-white w-2/12">
            <LiaLinkedinIn size="34" />
            <IoMdMail size="34" />
          </Col>
          <Col className="bg-winc-black w-10/12 h-8/12">
            <Image src={image} width="400" height="400"></Image>
          </Col>
        </Row>

        <Row className="w-full">
          <Col></Col>
          <Col className="bg-winc-orange w-9/12">
            <div className="text-2xl font-semibold whitespace-nowrap">
              {name}
            </div>
            <div className="text-2xl ml-2">{position}</div>
            <div className="text-lg -space-y-1">
              <div>
                {year} year · {major}
              </div>
              <div>Pronouns: {pronouns}</div>
              <div>Hobbies: {hobbies}</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Officer;
