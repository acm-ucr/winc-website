// "use client";
import React from "react";
import Event from "./Event";
import Title from "../Title";
import Button from "../home/Button";
import Link from "next/link";
const Upcoming = ({ size, events, show }) => {
  return (
    <div className="w-full my-20 flex justify-center items-center flex-col">
      <Title text="Upcoming Events" textcolor="text-winc-black" />
      <div className="flex justify-center">
        <div className="bg-winc-pink w-14 h-1 mt-6 mb-3"></div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {events.length !== 0 ? (
          events.slice(0, size).map((event, index) => (
            <div className="flex w-8/12" key={index}>
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
            </div>
          ))
        ) : (
          <div className="flex justify-center text-lg md:text-2xl text-center text-winc-black font-urbanist p-3">
            No upcoming events, please check back later!
          </div>
        )}
        {show && (
          <Link href="/events" className="flex justify-center my-4 w-2/3">
            <Button text="See Calendar" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
