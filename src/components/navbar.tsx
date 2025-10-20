"use client";
import wincLogo from "@/public/logo.webp";
import navigations from "@/data/navigations";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between bg-white p-4 shadow-xl lg:p-2">
      <motion.div
        className="abolute z-30 pl-0 duration-100 md:p-2"
        whileHover={{ scale: 1.1 }}
      >
        <Link href="/">
          <Image
            src={wincLogo}
            alt="winc navbar logo"
            className="w-14 sm:w-16"
          />
        </Link>
      </motion.div>

      <div className="my-2 hidden flex-row gap-20 pr-12 md:flex">
        {navigations.map(({ link, name, className }, index) => (
          <motion.div key={index}>
            <Link
              href={link}
              className={`duration-1 rounded-lg text-lg font-bold hover:font-normal hover:text-winc-red-400 ${
                pathName === link ? "font-normal" : "border-b-transparent"
              } flex flex-col items-center gap-1`}
            >
              <div className={className}>{name}</div>
              {pathName === link && (
                <span className="inline-block h-3 w-3 rounded-full bg-winc-red-400"></span>
              )}
            </Link>
          </motion.div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="duration-1 pointer-events-auto relative z-20 flex flex-col items-center justify-center hover:scale-110 md:hidden"
      >
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-2.5 rotate-45 bg-black"
              : "-translate-y-0.5 bg-black"
          }`}
        />
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "bg-black opacity-100"
          }`}
        />
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "-translate-y-2.5 -rotate-45 bg-black"
              : "translate-y-0.5 bg-black"
          }`}
        />
      </button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        ref={containerRef}
        className="absolute left-0 top-0 flex w-full flex-col items-center justify-center bg-white shadow-lg md:hidden"
        variants={sidebarVariants}
      >
        <motion.ul className="list-none space-y-6 pt-4 text-2xl sm:pt-0">
          {navigations.map(({ link, name, className }, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="closed"
              animate="open"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link}
                className={`duration-1 rounded-lg text-lg font-bold hover:font-normal hover:text-winc-red-400 ${
                  pathName === link ? "font-normal" : "border-b-transparent"
                } flex flex-col items-center gap-1`}
                onClick={closeMenu}
              >
                <div className={className}>{name}</div>
                {pathName === link && (
                  <span className="inline-block h-2 w-2 rounded-full bg-winc-red-400"></span>
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

import type { Variants } from "motion";

const sidebarVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    y: -100,
    opacity: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 40,
    },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default Navbar;
