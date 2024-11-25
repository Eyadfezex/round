"use client";

import { homeLinks, socialIcons } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { Turn as Hamburger } from "hamburger-react";
import logo from "@/public/logo.png";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };

  // Only render the NavBar if not on the signin page
  if (pathname === "/signin") {
    return null;
  }

  return (
    <header className="absolute w-full z-10 text-white overflow-x-clip">
      <nav className="flex justify-center pt-[15.6px] pb-[28.8px] bg-black bg-opacity-60">
        <div className="flex flex-col w-[95%] lg:w-[90%] max-w-[1920px] divide divide-y">
          {/* Top bar with social icons and language dropdown */}
          <div className="w-full flex justify-between pb-[15.6px] items-center">
            <div className="flex items-center gap-2">
              {/* Social media icons */}
              {socialIcons.map((item, i) => (
                <Link
                  aria-label={item.name} // Added aria-label for better accessibility
                  className="border rounded-full p-1"
                  href={item.url}
                  key={i}
                >
                  <item.icon color="white" />
                </Link>
              ))}
            </div>

            {/* Language dropdown */}
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center gap-1">
                      <GrLanguage />
                      <span className="font-semibold">AR</span>
                    </div>
                    <FaAngleDown />
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Select Language"
                  classNames={{
                    list: "gap-1",
                  }}
                >
                  <DropdownItem key="en" href="#">
                    <div className="flex w-full items-center justify-between">
                      <span>English</span>
                      <ReactCountryFlag countryCode="US" svg />
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <div className="flex w-full items-center justify-between">
                      <span>Arabic</span>
                      <ReactCountryFlag countryCode="SA" svg />
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          {/* Main navigation bar */}
          <div className="w-full pt-[28.5px] flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>

            {/* Desktop navigation links */}
            <div className="lg:flex items-center gap-4 lg:gap-6 lg:pr-10 hidden">
              {homeLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className={`font-bold text-xs after:absolute after:bg-secondary after:top-[130%] after:left-0 after:w-0 after:h-[3px] after:rounded-full relative hover:after:w-full after:duration-250 ${
                    pathname === item.url && "after:w-full"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Sign-in button (desktop version) */}
            <Link href="/signin" className="hidden lg:block">
              <Button className="bg-secondary rounded-full [box-shadow:0px_0px_20px_0px_rgba(24,156,206,1)] p-6">
                <div className="flex items-center gap-2">
                  <IoPersonOutline color="white" size={17} />
                  <span className="text-white font-bold">التسجيل</span>
                </div>
              </Button>
            </Link>

            {/* Mobile navigation (Hamburger menu) */}
            <div className="lg:hidden">
              <motion.div>
                <Hamburger
                  direction="right"
                  toggled={isOpen}
                  toggle={handleOpen}
                />
              </motion.div>

              {/* Mobile menu */}
              <motion.div
                className="absolute -bottom-[21.5rem] left-0 bg-white text-black px-4 py-7"
                initial={{ left: -200 }}
                animate={isOpen ? { left: 0 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-2">
                  {/* Mobile links */}
                  {homeLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      className="flex items-center gap-1"
                    >
                      <GoDotFill className="text-secondary" />
                      {item.name}
                    </Link>
                  ))}
                  {/* Sign-in button (mobile version) */}
                  <Link href="/signin" className="mt-[3rem]">
                    <Button className="bg-secondary rounded-full [box-shadow:0px_0px_20px_0px_rgba(24,156,206,1)] p-6">
                      <div className="flex items-center gap-2">
                        <IoPersonOutline color="white" size={17} />
                        <span className="text-white font-bold">التسجيل</span>
                      </div>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
