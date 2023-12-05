import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Event from "./Event";
import axios from "axios";

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
    <div className="w-full mb-20 flex justify-content items-center flex-col">
      <p className="flex justify-center text-center text-acm-black font-lexend text-heading">
        Upcoming Events
      </p>
      <br />
      <Row className="w-11/12 flex justify-center items-stretch">
        {events.length !== 0 ? (
          events.slice(0, size).map((event, index) => (
            <Col className="p-3" md={6} lg={4} key={index}>
              <Event
                title={event.summary}
                location={event.location}
                start={event.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                end={event.end}
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
