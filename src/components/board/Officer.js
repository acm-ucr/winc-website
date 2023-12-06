import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";

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
    <Row className="flex flex-row bg-winc-beige pt-4 pb-3 w-11/12 max-w-max shadow-[12px_-10px_0px_2px] shadow-winc-orange">
      <Col className="flex flex-col mt-8 space-y-4" lg={2}>
        <a href={linkedin} className="text-winc-pink">
          <LiaLinkedinIn size="38" />
        </a>
        <a href={"mailto:" + email} className="text-winc-pink ml-1">
          <IoMdMail size="32" />
        </a>
      </Col>
      <Col className="text-winc-pink font-urbanist whitespace-nowrap" lg={9}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover aspect-square"
        />
        <div className="text-3xl mt-2 font-semibold">{name}</div>
        <div className="text-2xl">{position}</div>
        <div className="text-md -space-y-1 mt-1">
          <div>
            {year} year · {major}
          </div>
          <div>Pronouns: {pronouns}</div>
          <div>Hobbies: {hobbies}</div>
        </div>
      </Col>
    </Row>
  );
};

export default Officer;
