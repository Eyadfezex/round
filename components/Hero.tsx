"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import bg from "@/public/herobg.png";
const Hero = () => {
  return (
    <section className="w-full h-[90vh] min-h-[768px] bg-cover bg-center bg-no-repeat relative text-white">
      <Image
        src={bg}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <div className="w-full h-full absolute bg-[#189CCE15]" />
      <div className="w-full h-full absolute bg-[#00000070]" />
      <div className="flex justify-center pt-[25rem] relative">
        <div className="flex flex-col w-[90%] max-w-[1920px] gap-12">
          <div>
            <h1 className="text-[56px] font-bold">اجعل رحلتـك أكثر تحـدياً</h1>
            <h2 className="text-[26px] font-semibold mt-2">
              اسـكتشف العديد من الرحلات و الخدمات الرائعة
            </h2>
          </div>
          <Link href="#">
            <Button className="bg-secondary rounded-full p-6 [box-shadow:0px_0px_20px_0px_rgba(24,156,206,1)]">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">احجز الآن</span>
                <IoArrowBackOutline color="white" size={17} />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
