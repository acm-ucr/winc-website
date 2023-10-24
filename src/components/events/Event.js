"use client";
import React from "react";
// style the component here
const Event = ({ title, location, start, color, description, date }) => {
  return (
    <div className="flex flex-row font-urbanist">
      <div
        className={`rounded-l-lg text-center p-4 ${color} text-winc-white flex-col`}
      >
        <div className="text-5xl place-items-center font-semibold">{date}</div>
        <div className="font-ultralight">{start}</div>
      </div>
      <div className="rounded-r-lg bg-winc-beige p-3 text-winc-black">
        <div className="text-3xl font-semibold">{title}</div>
        <div>{location}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Event;

// // style the component here
// const Stat = ({ icon, stat, type }) => {
//   return (
//     <div
//       className={`flex flex-row min-w-fit w-full justify-center items-center rounded-full border-8 border-winc-yellow ring-8 ring-winc-orange m-3 text-winc-pink bg-winc-white`}
//     >
//       {icon}
//       <div className="flex flex-col items-center w-11/12">
//         <div className="text-3xl font-bold">{stat}</div>
//         <div className="text-winc-black text-lg font-thin">{type}</div>
//       </div>
//     </div>
//   );
// };

// export default Stat;

{
  /* <div className = {color}>
        <div className = "flex text-center text-winc-white flex-col p-5">
          <div className = "text-5xl font-semibold">FEB 29</div>
          <div className = "font-ultralight">{start}</div>
        </div>
      </div>
      <div className = "flex flex-col bg-winc-beige p-4 text-winc-black">
        <div className = "text-3xl font-semibold">{title}</div>
        <div className = "text">{location}</div>
        <div className = "text">{description}</div>
      </div> */
}
