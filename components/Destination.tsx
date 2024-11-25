"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import circle from "@/public/svgs/circle.svg";
import summer from "@/public/summer.png";
import waves from "@/public/svgs/waves.svg";
import { destinations } from "@/constants";

import "swiper/css";
import "swiper/css/pagination";

// Destination Component
const Destination: React.FC = () => {
  // State to manage the number of slides visible based on screen width
  const [pageWidth, setPageWidth] = useState(3);

  // Handles the screen resize event to adjust the Swiper's slidesPerView
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setPageWidth(width >= 1440 ? 4 : width >= 1024 ? 3 : 2.5);
  }, []);

  // Add/remove event listener for window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <section className="relative">
      {/* Decorative Background Images */}
      <Image
        src={summer}
        alt="Summer-themed decorative background"
        className="absolute left-36 top-[607px]"
      />
      <Image
        src={waves}
        alt="Waves decorative background"
        className="absolute right-0 top-[619px]"
      />
      <Image
        src={circle}
        alt="Circle decorative background"
        className="absolute -right-[9rem] top-[112px]"
      />

      {/* Content Wrapper */}
      <div className="flex justify-center pt-[200px] pb-[100px] lg:py-[126px]">
        <div className="flex flex-col items-center w-[90%] max-w-[1920px] gap-[3rem]">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="font-bold text-tertiary text-2xl">استكشف الوجهات</h2>
            <h3 className="font-bold text-primary text-lg mt-2">
              استمتع باستكشاف الرحلات الممتعة معنا
            </h3>
          </div>

          {/* Swiper Slider */}
          <Swiper
            slidesPerView={pageWidth}
            className="w-full h-[22rem]"
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {destinations.map((item, i) => (
              <SwiperSlide key={i}>
                <Link
                  href="#"
                  aria-label={`Explore ${item.name}`}
                  className="flex flex-col items-center gap-5 group"
                >
                  {/* Destination Image */}
                  <div className="relative rounded-[33px] overflow-hidden w-[220px] h-[220px] border-[10px] border-[#189CCE20]">
                    <Image
                      src={item.img}
                      alt={`Image of ${item.name}`}
                      className="absolute w-full h-full object-cover group-hover:scale-125 duration-250"
                    />
                  </div>

                  {/* Destination Name */}
                  <span className="text-tertiary font-bold text-lg">
                    {item.name}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Destination;
