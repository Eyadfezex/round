"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import circle from "@/public/svgs/circle.svg";
import summer from "@/public/summer.png";
import waves from "@/public/svgs/waves.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { destinations } from "@/constants";

const Destination = () => {
  const [pageWidth, setPageWidth] = useState(3);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setPageWidth(width >= 1440 ? 4 : width >= 1024 ? 3 : 2);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <section className="relative">
      <Image
        src={summer}
        alt="summer"
        className="absolute left-36 top-[607px]"
      />
      <Image src={waves} alt="waves" className="absolute right-0 top-[619px]" />
      <Image
        src={circle}
        alt="circle"
        className="absolute -right-[9rem] top-[112px]"
      />
      <div className="flex justify-center pt-[200px] pb-[100px] lg:py-[126px]">
        <div className="flex flex-col items-center w-[90%] max-w-[1920px] gap-[3rem]">
          <div className="text-center">
            <h2 className="font-bold text-tertiary text-2xl ">
              استكشف الوجهات
            </h2>
            <h3 className="font-bold text-primary text-lg mt-2">
              استمتع باستكشاف الرحلات الممتعة معنا
            </h3>
          </div>
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
                  className="flex flex-col items-center gap-5 group"
                >
                  <div className="relative rounded-[33px] overflow-hidden w-[220px] h-[220px] border-[10px] border-[#189CCE20]">
                    <Image
                      src={item.img}
                      alt="somewhere"
                      className="absolute w-full h-full object-cover group-hover:scale-125 duration-250"
                    />
                  </div>
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
