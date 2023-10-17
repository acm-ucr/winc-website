"use client";
import React from "react";

import Event from "@/components/events/Event";
const Events = () => {
  return (
    <div className={"rounded"}>
      <Event
        title="Life in the Industry: PM"
        location="zoom: link"
        start="7:00PM"
        color="bg-winc-pink"
        description="For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position."
      />
    </div>
  );
};

export default Events;
