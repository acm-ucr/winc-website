"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/logo.webp";
import Button from "@/components/Button";
const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-urbanist w-full px-3 m-0 min-h-[8vh] bg-winc-white drop-shadow-lg flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="p-0">
        <Link eventkey="1" className="p-0" href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            className="h-[6vh]"
            alt="WINC at UCR"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mb-2 w-12/12 no-underline ml-auto text-2xl">
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/"
            className="mb-0 py-1 px-3 no-underline ml-auto text-2xl whitespace-nowrap bg-winc-white w-full text-center !text-winc-black !font-regular hover:!text-winc-pink hover:cursor-pointer"
          >
            home
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="2"
            href="/about"
            className="mb-0 py-1 px-3 no-underline ml-auto text-2xl whitespace-nowrap bg-winc-white w-full text-center !text-winc-black !font-regular hover:!text-winc-pink hover:cursor-pointer"
          >
            about
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="3"
            href="/board"
            className="mb-0 py-1 px-3 no-underline ml-auto text-2xl whitespace-nowrap bg-winc-white w-full text-center !text-winc-black !font-regular hover:!text-winc-pink hover:cursor-pointer"
          >
            board
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/events"
            className="mb-0 py-1 px-3 no-underline ml-auto text-2xl whitespace-nowrap bg-winc-white w-full text-center !text-winc-black !font-regular hover:!text-winc-pink hover:cursor-pointer"
          >
            events
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform"
            className="flex justify-center items-ccenter "
          >
            <Button />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
