"use client";

import { useEffect, useRef, useState } from "react";
import { events } from "@/data/events";

export function EventCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isTransitioning) return;

      scrollContainer.scrollLeft += 0.5;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        setIsTransitioning(true);
        scrollContainer.scrollLeft = 0;
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="mx-auto w-full p-5 md:p-10 lg:w-4/5">
      <div>
        <p className="mb-5 flex justify-center text-xl font-bold md:mb-10 md:text-3xl lg:text-5xl">
          Event
          <p className="border-b-4 border-winc-red-400 text-xl md:pb-2 md:text-3xl lg:text-5xl">
            s
          </p>
        </p>
      </div>

      <div className="h-80 overflow-hidden md:h-96">
        <div
          ref={scrollRef}
          className="flex h-full gap-5 overflow-hidden md:gap-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {[...events, ...events].map((event, index) => (
            <div
              key={`${event.id}-${index}`}
              className="h-full w-80 flex-shrink-0 md:w-96"
            >
              <div
                className={`flex h-full w-full items-start justify-start rounded-lg bg-gradient-${event.direction} ${event.gradient} p-4 shadow-lg transition-all md:p-6`}
              >
                <p className="text-2xl md:text-4xl">{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
