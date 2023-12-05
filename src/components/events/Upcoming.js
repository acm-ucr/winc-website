"use client";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Event from "./Event";
import Title from "../Title";

const Upcoming = ({ size, events }) => {
  return (
    <div className="w-full my-20 flex justify-center items-center flex-col">
      <Title text="Upcoming Events" textcolor="text-winc-black" />
      <div className="flex justify-center">
        <div className="bg-winc-pink w-14 h-1 mt-6 mb-3"></div>
      </div>
      <Row className="w-full flex flex-col justify-center items-center">
        {events.length !== 0 ? (
          events.slice(0, size).map((event, index) => (
            <Col className="flex w-8/12" key={index}>
              <Event
                month={event.start
                  .toLocaleDateString("en-US", { month: "short" })
                  .toUpperCase()}
                day={event.start.toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
                title={event.summary}
                location={event.location}
                start={event.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                description={event.description}
              />
            </Col>
          ))
        ) : (
          <Col className="flex justify-center text-center text-winc-black font-urbanist p-3">
            No upcoming events, please check back later!
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Upcoming;
