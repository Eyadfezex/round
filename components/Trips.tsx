"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import tripsimg from "@/public/trips.png";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import tree from "@/public/svgs/tree.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import TripCard from "./ui/TripCard";
import { trips } from "@/constants";
import { Navigation } from "swiper/modules";
const Trips = () => {
  const swiper = useSwiper();
  const [pageWidth, setPageWidth] = useState(3);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setPageWidth(width >= 1440 ? 3 : width >= 1024 ? 2.1 : 2);
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
        src={tripsimg}
        alt="trips"
        className="absolute w-full h-[70%] object-cover"
      />
      <Image src={tree} alt="trips" className="absolute -bottom-[4.5rem]" />

      <div className="flex justify-center py-[32px] relative">
        <div className="flex flex-col w-[90%] max-w-[1920px]">
          <div className="flex justify-end">
            <Link href="#">
              <Button
                className="bg-secondary rounded-full p-6 "
                color="secondary"
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">احجز الآن</span>
                  <IoArrowBackOutline color="white" size={17} />
                </div>
              </Button>
            </Link>
          </div>
          <div className="flex justify-between gap-10">
            <div className="w-[25%]">
              <h2 className="text-secondary font-bold text-3xl">
                الرحلات السياحية
              </h2>
              <p className=" text-primary font-bold text-2xl mt-[1rem]">
                استمتع باستكشاف رحلتك <br /> السياحية المميزة
              </p>
              <div className="flex items-center gap-3 mt-[3rem]">
                <div
                  className="rounded-full border p-[6px] bg-white prev-button group hover:bg-secondary duration-250"
                  onClick={() => swiper.slidePrev()}
                >
                  <IoIosArrowRoundForward
                    size={55}
                    className="duration-250 text-zinc-400 group-hover:text-white"
                  />
                </div>
                <div
                  className="rounded-full border p-[6px] bg-white next-button group hover:bg-secondary duration-250"
                  onClick={() => swiper.slideNext()}
                >
                  <IoIosArrowRoundBack
                    size={55}
                    className="text-zinc-400 group-hover:text-white duration-250"
                  />
                </div>
              </div>
            </div>
            <Swiper
              simulateTouch
              slidesPerView={pageWidth}
              className="w-[100%]"
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
            >
              {trips.map(({ img, title, rate, price }, i) => (
                <SwiperSlide key={i}>
                  <TripCard title={title} rate={rate} img={img} price={price} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;
