import React from "react";
import Title from "@/components/Title";

const Empower = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Title text="Empowering Women in Tech" textcolor="text-winc-black" />
      <div className="bg-winc-pink w-14 h-1 mt-4"></div>
      <p className="w-2/5 mt-3 text-center text-3xl text-winc-black">
        We're dedicated to empowering and supporting a network of leading women
        in tech at the University of California, Riverside. We're UCR Women in
        Computing.
      </p>
    </div>
  );
};

export default Empower;
