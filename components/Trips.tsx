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
  const [pageWidth, setPageWidth] = useState(3);

  const swiper = useSwiper();
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setPageWidth(
      width >= 1440 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2.4 : 1.45
    );
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
        loading="lazy"
      />
      <Image src={tree} alt="tree" className="absolute -bottom-[4.5rem]" />

      <div className="flex justify-center py-[32px] relative">
        <div className="flex flex-col w-[95%] lg:w-[90%] max-w-[1920px]">
          <div className="flex justify-end">
            <Link href="#">
              <Button
                className="bg-secondary rounded-full p-6"
                color="secondary"
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">احجز الآن</span>
                  <IoArrowBackOutline color="white" size={17} />
                </div>
              </Button>
            </Link>
          </div>
          {/* Mobile View */}
          <div className="w-[70%] block md:hidden">
            <div>
              <h2 className="text-secondary font-bold text-3xl">
                الرحلات السياحية
              </h2>
              <p className="text-primary font-bold text-2xl mt-[1rem]">
                استمتع باستكشاف رحلتك السياحية المميزة
              </p>
            </div>
            <div className="flex items-center gap-3 mt-[1rem] lg:mt-[3rem]">
              <div
                className="rounded-full border p-[1px] lg:p-[6px] bg-white prev-button group hover:bg-secondary duration-250"
                onClick={() => swiper.slidePrev()}
                role="button"
                aria-label="Previous Slide"
              >
                <IoIosArrowRoundForward
                  size={55}
                  className="duration-250 text-zinc-400 group-hover:text-white"
                />
              </div>
              <div
                className="rounded-full border p-[1px] lg:p-[6px] bg-white next-button group hover:bg-secondary duration-250"
                onClick={() => swiper.slideNext()}
                role="button"
                aria-label="Next Slide"
              >
                <IoIosArrowRoundBack
                  size={55}
                  className="text-zinc-400 group-hover:text-white duration-250"
                />
              </div>
            </div>
          </div>
          {/* Desktop View */}
          <div className="flex justify-between gap-10">
            <div className="w-[25%] hidden md:block">
              <h2 className="text-secondary font-bold text-3xl">
                الرحلات السياحية
              </h2>
              <p className="text-primary font-bold text-2xl mt-[1rem]">
                استمتع باستكشاف رحلتك السياحية المميزة
              </p>
              <div className="flex items-center gap-3 mt-[1rem] lg:mt-[3rem]">
                <div
                  className="rounded-full border p-[1px] lg:p-[6px] bg-white prev-button group hover:bg-secondary duration-250"
                  onClick={() => swiper.slidePrev()}
                  role="button"
                  aria-label="Previous Slide"
                >
                  <IoIosArrowRoundForward
                    size={55}
                    className="duration-250 text-zinc-400 group-hover:text-white"
                  />
                </div>
                <div
                  className="rounded-full border p-[1px] lg:p-[6px] bg-white next-button group hover:bg-secondary duration-250"
                  onClick={() => swiper.slideNext()}
                  role="button"
                  aria-label="Next Slide"
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
              className="w-full lg:w-[70%] xl:w-full"
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2.1,
                },
                1440: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 1.35,
                },
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
