"use client";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Event from "./Event";
import axios from "axios";
import Title from "../Title";

const Upcoming = ({ size = 3 }) => {
  // Default size set to 3
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=starttime&timeMin=${new Date().toISOString()}&maxResults=${size}`
      )
      .then((response) => {
        const calendarEvents = response.data.items.map((a) => {
          a.start = new Date(a.start.dateTime);
          a.end = new Date(a.end.dateTime);
          return a;
        });

        setEvents(calendarEvents);
      });
  }, [size]);

  return (
    <div className="w-full mb-20 flex justify-center items-center flex-col">
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
          <Col className="text-text flex justify-center text-center text-acm-black font-lexend p-3">
            No upcoming events, please check back later!
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Upcoming;
