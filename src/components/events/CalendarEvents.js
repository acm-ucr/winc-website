"use client";
import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import CustomHeader from "./CustomHeader.js";

import { useContext } from "react";
import EventContext from "./EventContext.js";
const mLocalizer = momentLocalizer(moment);
// const dummyEvents = [
//   {
//     title: "Meeting with Team",
//     start: new Date(2023, 10, 30, 10, 0),
//     end: new Date(2023, 10, 30, 11, 0),
//     location: "WCH",
//     summary: "nice event",
//   },
//   {
//     title: "Lunch Break",
//     start: new Date(2023, 10, 30, 13, 0),
//     end: new Date(2023, 10, 30, 14, 0),
//     location: "WCH",
//     summary: "lit event",
//   },
// ];
const CalendarEvents = () => {
  // const [modalEvent, setModalEvent] = useState(null);
  const { events } = useContext(EventContext);
  console.log(events);
  return (
    // events && (
    <section className="w-full flex justify-center items-center flex-col">
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
              return { className: `!bg-winc-yellow` };
            }}
            dayPropGetter={(event) => {
              const bg =
                new Date(event).toLocaleDateString() ==
                new Date().toLocaleDateString()
                  ? "!bg-winc-orange"
                  : "!bg-winc-beige";
              return {
                className: `${bg} m-0 p-0`,
              };
            }}
          />
        </div>
      </div>
    </section>
    // )
  );
};

export default CalendarEvents;
