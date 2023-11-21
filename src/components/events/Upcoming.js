import React from "react";
import Event from "./Event";
const Upcoming = () => {
  return (
    <div>
      <Event
        month={"FEB"}
        day={"29"}
        start={"7:00PM"}
        title={"Life in the Industry: PM"}
        location={"zoom: link"}
        description={
          "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position."
        }
        color={"bg-winc-pink"}
      />
    </div>
  );
};

export default Upcoming;