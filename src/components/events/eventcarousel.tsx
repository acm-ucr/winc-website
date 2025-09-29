"use client";
import { events } from "@/data/events";
import Link from "next/link";

export function EventCarousel() {
  return (
    <div className="mx-auto w-full p-5 md:p-10 lg:w-4/5">
      <div>
        <p className="mb-5 flex justify-center text-xl font-bold md:mb-10 md:text-3xl lg:text-5xl">
          Event
          <span className="border-b-4 border-winc-red-400 text-xl md:pb-2 md:text-3xl lg:text-5xl">
            s
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        {events.map(({ link, direction, gradient, title }, index) => (
          <Link
            href={link}
            key={index}
            className={`w-full rounded-lg p-4 shadow-lg hover:opacity-90 hover:shadow-xl md:p-6 ${
              direction === "to-r" ? "bg-gradient-to-r" : "bg-gradient-to-b"
            } ${gradient}`}
          >
            <p className="pb-8 text-2xl md:text-4xl">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
