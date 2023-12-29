"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import CustomHeader from "./CustomHeader.js";
import axios from "axios";
import Modal from "./Modal.js";
import Upcoming from "./Upcoming.js";
const mLocalizer = momentLocalizer(moment);

const CalendarEvents = ({ limited = false, show }) => {
  const [events, setEvents] = useState([]);
  const [modalEvent, setModalEvent] = useState(null);
  const size = 10;

  useEffect(() => {
    const startDate = moment().subtract(10, "weeks").toISOString();
    const endDate = moment().add(10, "weeks").toISOString();

    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${endDate}&maxResults=${size}`
      )
      .then((response) => {
        const calendarEvents = response.data.items.map((a) => {
          a.start = new Date(a.start.dateTime);
          a.end = new Date(a.end.dateTime);
          return a;
        });

        setEvents(calendarEvents);
        console.log(events);
      });
  }, [size]);

  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col">
        {!limited && (
          <div className="mb-5 w-11/12 flex justify-center items-center">
            <div className="h-[110vh] w-full relative">
              <Calendar
                className="font-urbanist w-full m-0 p-0 text-3xl"
                events={events}
                localizer={mLocalizer}
                defaultView="month"
                views={["month"]}
                components={{
                  event: CustomEvent,
                  toolbar: CustomToolbar,
                  header: CustomHeader,
                }}
                eventPropGetter={(event) => {
                  return { className: `!bg-winc-black` };
                }}
                dayPropGetter={(event) => {
                  const bg =
                    new Date(event).toLocaleDateString() ==
                    new Date().toLocaleDateString()
                      ? "!bg-winc-orange"
                      : "!bg-winc-beige";
                  return {
                    className: `${bg} m-0 p-0 border-1 border-winc-yellow`,
                  };
                }}
                onSelectEvent={(event) => {
                  setModalEvent(event);
                }}
              />
              <Modal event={modalEvent} setState={setModalEvent} />
            </div>
          </div>
        )}
        <Upcoming
          events={events.filter((e) => e.start >= new Date())}
          size={3}
          show={show}
        />
      </section>
    )
  );
};

export default CalendarEvents;
