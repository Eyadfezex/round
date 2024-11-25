"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { IoArrowBackOutline } from "react-icons/io5";

// Props definition for the TripCard component
interface TripCardProps {
  img: StaticImageData | string; // Image source, either StaticImageData or URL string
  title: string; // Title of the trip
  price: number | string; // Price of the trip
  rate: number | string; // Rating of the trip
}

// TripCard Component
const TripCard: React.FC<TripCardProps> = ({ img, title, price, rate }) => {
  const [hovered, setHovered] = useState(false); // State to track hover status

  return (
    <motion.div
      className="relative rounded-[28px] overflow-hidden h-[410px] mt-10 text-white"
      initial={{ width: 240 }} // Initial width of the card
      animate={hovered ? { width: 365 } : { width: 240 }} // Width animation on hover
      whileHover={{ width: 365 }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring" }}
    >
      {/* Background Image */}
      <Image
        src={img}
        alt={`${title} image`} // Dynamic alt text for better accessibility
        width={1000}
        height={1000}
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-25"></div>

      {/* Rating Badge */}
      <motion.div
        className="bg-white text-black px-2 py-1 rounded-full flex items-center gap-1 w-fit h-fit absolute left-[13px] top-[13px]"
        initial={{ top: 13 }}
        animate={{ top: hovered ? 13 : -150 }}
      >
        <span>{rate}</span>
        <FaStar color="#F5D227" />
      </motion.div>

      {/* Title (rotated) */}
      <motion.h3
        className="font-bold absolute rotate-90 bottom-[4rem] -right-[2rem]"
        animate={{ right: hovered ? "-10rem" : "-2rem" }}
        transition={{ type: "spring" }}
      >
        {title}
      </motion.h3>

      {/* Details Section (visible on hover) */}
      <motion.div
        className="w-full absolute bg-black bg-opacity-30 p-5 flex bottom-[-100px]"
        initial={{ bottom: -100 }}
        animate={{ bottom: hovered ? 0 : -150 }}
        transition={{ type: "tween", duration: 0.35 }}
      >
        <div className="flex justify-between items-end w-full">
          {/* Trip Information */}
          <div>
            <h4 className="text-xl font-bold">{title}</h4>
            <div className="flex items-center gap-2">
              <MdOutlineLocalOffer />
              <span>{price} ر.ع</span>
            </div>
          </div>

          {/* Button with Link */}
          <Link href="#" aria-label={`More details about ${title}`}>
            <Button
              className="bg-transparent border-2 rounded-full p-1"
              color="secondary"
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold">المزيد</span>
                <IoArrowBackOutline color="white" size={17} />
              </div>
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TripCard;
