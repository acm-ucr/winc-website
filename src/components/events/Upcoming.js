import React from "react";
import Event from "./Event";
import Title from "@/components/Title";
const Upcoming = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Title text="Upcoming Events" textcolor="text-winc-black" />
      </div>

      <div className="flex justify-center">
        <div className="bg-winc-pink w-14 h-1 mt-6 mb-3"></div>
      </div>

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
      <Event
        month={"FEB"}
        day={"29"}
        start={"7:00PM"}
        title={"Life in the Industry: PM"}
        location={"WCH: 205, 206"}
        description={
          "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position."
        }
        color={"bg-winc-black"}
      />
      <Event
        month={"FEB"}
        day={"29"}
        start={"7:00PM"}
        title={"Life in the Industry: PM"}
        location={"zoom: link"}
        description={
          "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position."
        }
        color={"bg-winc-orange"}
      />
    </div>
  );
};

export default Upcoming;
