"use client";
import { homeLinks, socialIcons } from "@/constants";
import Link from "next/link";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
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

const NavBar = () => {
  const pathname = usePathname();
  if (pathname === "/signin") {
    return null;
  }

  return (
    <header className="absolute w-full z-10 text-white">
      <nav className="flex justify-center pt-[15.6px] pb-[28.8px] bg-black bg-opacity-60">
        <div className="flex flex-col w-[90%] max-w-[1920px] divide divide-y">
          <div className="w-full flex justify-between pb-[15.6px] items-center">
            <div className="flex items-center gap-2">
              {socialIcons.map((item, i) => (
                <Link
                  aria-label={item.name}
                  className="border rounded-full p-1"
                  href={item.url}
                  key={i}
                >
                  <item.icon color="white" />
                </Link>
              ))}
            </div>
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
                  aria-label="Static Actions"
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
          <div className="w-full pt-[28.5px] flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="flex items-center gap-6 pr-10">
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
            <Link href="/signin">
              <Button className="bg-secondary rounded-full [box-shadow:0px_0px_20px_0px_rgba(24,156,206,1)] p-6">
                <div className="flex items-center gap-2">
                  <IoPersonOutline color="white" size={17} />
                  <span className="text-white font-bold">التسجيل</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
