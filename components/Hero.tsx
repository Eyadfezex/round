"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import bg from "@/public/herobg.png";
import Search from "./Search";

const Hero = () => {
  return (
    <section className="w-full h-[70vh] lg:h-[90vh] min-h-[768px] bg-cover bg-center bg-no-repeat relative text-white">
      {/* Hero background image */}
      <Image
        src={bg}
        alt="A scenic view of a travel destination"
        fetchPriority="high"
        loading="eager"
        priority
        className="absolute object-cover w-full h-full"
      />

      {/* Overlay for color tint */}
      <div className="w-full h-full absolute bg-[#189CCE15]" />
      <div className="w-full h-full absolute bg-[#00000070]" />

      {/* Hero content */}
      <div className="flex justify-center pt-[25rem] relative">
        <div className="flex flex-col w-[95%] lg:w-[90%] max-w-[1920px] gap-12">
          {/* Headline */}
          <div>
            <h1 className="text-[calc(1rem+2vw)] font-bold">
              اجعل رحلتـك أكثر تحـدياً
            </h1>
            <h2 className="text-[calc(1rem+0.8vw)] font-semibold mt-2">
              اسـكتشف العديد من الرحلات و الخدمات الرائعة
            </h2>
          </div>

          {/* Call to Action Button */}
          <Link href="#booking">
            <Button
              className="bg-secondary rounded-full p-6 [box-shadow:0px_0px_20px_0px_rgba(24,156,206,1)]"
              color="secondary"
            >
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">احجز الآن</span>
                <IoArrowBackOutline color="white" size={17} />
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Search Component */}
      <div className="flex justify-center">
        <Search />
      </div>
    </section>
  );
};

export default Hero;
