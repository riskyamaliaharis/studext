import React, { useState } from "react";

import {
  HomeIcon,
  ClipboardIcon,
  ViewBoardsIcon,
  ChatIcon,
  BellIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const searchingBox = (event) => {
    event.preventDefault();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("do validate");
    }
  };
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header>
      <nav className="flex items-center flex-wrap  bg-white p-3 shadow-xl mb-3">
        <img
          className="items-center md:justify-self-center md:mb-4"
          src="/logo studext 1.png"
        />
        <div className="flex flex-row  pl-5 pr-3 ">
          <SearchIcon className="h-8 mb-1 pl-2 pt-1 pb-1 rounded-l-lg bg-gray-200 text-blue-600" />
          <form onSubmit={searchingBox}>
            <input
              className="rounded-r-lg h-8 w-100 mb-1 pl-2 bg-gray-200"
              id="name"
              type="text"
              placeholder="Search"
              autoComplete="name"
              required
              onKeyDown={handleKeyDown}
            />
          </form>
        </div>
        <button
          className=" inline-flex p-3 rounded lg:hidden  ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <NavbarItem title="Home" Icon={HomeIcon} />
            <NavbarItem title="My Course" Icon={ClipboardIcon} />
            <NavbarItem title="Dashboard" Icon={ViewBoardsIcon} />
            <NavbarItem title="Chat" Icon={ChatIcon} />
            <NavbarItem title="Notification" Icon={BellIcon} />
            <NavbarItem title="Profile" Icon={UserCircleIcon} />
          </div>
        </div>
      </nav>
    </header>
  );
}
