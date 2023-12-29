import React from "react";

const CustomEvent = ({ event }) => {
  return (
    <div className="font-urbanist font-semibold text-base md:text-lg text-winc-white p-1">
      <p className="inline whitespace-nowrap">
        {new Date(event.start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
        &nbsp;
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
