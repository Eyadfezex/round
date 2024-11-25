"use client";

import React from "react";
import Image from "next/image";
import place6 from "@/public/place6.png";
import place7 from "@/public/place7.png";
import service1 from "@/public/svgs/service1.svg";
import service2 from "@/public/svgs/service2.svg";
import service3 from "@/public/svgs/service3.svg";
import service4 from "@/public/svgs/service4.svg";
import sun from "@/public/svgs/sun.svg";

const Services = () => {
  return (
    <section className="relative group">
      {/* Sun image with hover effects */}
      <Image
        src={sun}
        alt="sun decoration"
        className="hidden lg:block absolute bottom-[7rem] xl:bottom-[7rem] xl:right-[14rem] right-[5rem] group-hover:bottom-[5rem] xl:group-hover:bottom-[4rem] group-hover:right-[4rem] xl:group-hover:right-[8rem] duration-250"
        loading="lazy" // Implementing lazy loading for performance
      />

      <div className="flex justify-center py-[2rem] lg:py-[4rem]">
        <div className="flex justify-center gap-5 w-[95%] lg:w-[90%] xl:w-[80%] max-w-[1920px]">
          <div className="relative w-full xl:w-[38rem] 2xl:w-[45rem] h-[40rem] hidden lg:block">
            {/* Place images with hover effects */}
            <div className="relative w-[250px] h-[350px] xl:w-[297px] top-[10rem] xl:h-[447px] rounded-full overflow-hidden z-10 group-hover:top-[11.5rem] xl:group-hover:top-[7.8rem] duration-250">
              <Image
                src={place6}
                alt="Place 6"
                width={1000}
                height={1000}
                className="absolute w-full h-full object-cover group-hover:scale-110 duration-250"
                loading="lazy" // Lazy load for better performance
              />
            </div>
            <div className="absolute w-[300px] h-[500px] xl:w-[343px] top-[3rem] left-[15%] xl:left-[20%] 2xl:left-[30%] group-hover:left-[20%] xl:group-hover:left-[34%] group-hover:top-[2rem] xl:group-hover:-top-[1rem] duration-250 xl:h-[581px] rounded-full rounded-bl-[120rem] overflow-hidden">
              <Image
                src={place7}
                alt="Place 7"
                width={1000}
                height={1000}
                className="absolute w-full h-full object-cover group-hover:scale-110 duration-250"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col items-center w-full xl:w-[40%] gap-[2rem]">
            <h2 className="font-bold text-2xl text-tertiary">الخدمات</h2>
            <p className="text-primary font-bold text-lg text-center">
              توفر شركة Round In Oman العديد من الخدمات <br />
              المتنوعة والمميزة استكشفها واستمتع معنا
            </p>
            <div className="flex flex-col gap-3 text-primary">
              {/* Service cards with hover effects */}
              <div className="flex items-center gap-3 rounded-[30px] p-4 shadow-xl max-w-[425px] group-hover:-translate-x-[1rem] duration-250">
                <Image
                  src={service1}
                  alt="Travel Services"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-bold text-tertiary text-sm">
                    خدمات الرحلات
                  </h3>
                  <p className="font-semibold text-sm">
                    فرصة رائعة لاكتشاف أماكن جديدة وتجربة مغامرات مميزة
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[30px] p-4 shadow-xl max-w-[425px] group-hover:translate-x-[1rem] duration-250">
                <Image
                  src={service2}
                  alt="Transportation Services"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-bold text-tertiary text-sm">
                    خدمات التنقل
                  </h3>
                  <p className="font-semibold text-sm">
                    يمكنك حجز تاكسي أو تأجير سيارة حسب طلبك لإكمال راحتك معنا
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[30px] p-4 shadow-xl max-w-[425px] group-hover:-translate-x-[1rem] duration-250">
                <Image
                  src={service3}
                  alt="Entertainment Services"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-bold text-tertiary text-sm">
                    الخدمات الترفيهية
                  </h3>
                  <p className="font-semibold text-sm">
                    وسيلة رائعة لإضافة المتعة والتنوع إلى رحلتك. اختيار الأنشطة
                    الترفيهية التي تناسب اهتماماتهم
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[30px] p-4 shadow-xl max-w-[425px] group-hover:translate-x-[1rem] duration-250">
                <Image
                  src={service4}
                  alt="Hotel Booking"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-bold text-tertiary text-sm">
                    خدمة حجز الفنادق
                  </h3>
                  <p className="font-semibold text-sm">
                    خدمة حجز الفندق هي طريقة مريحة وسهلة لضمان مكان إقامة مناسب
                    أثناء الرحلات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
