"use client";
import Image from "next/image";
import React from "react";
import footerbg from "@/public/footerbg.png";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowBack } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import logo from "@/public/logo.png";
import Link from "next/link";
import { footerLinks, socialIcons } from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname === "/signin") {
    return null;
  }

  return (
    <footer className="relative text-white">
      <div className="bg-tertiary w-full h-full absolute" />
      <Image
        src={footerbg}
        alt="footerbg"
        className="absolute w-full h-full object-cover opacity-30"
      />
      <div className="relative flex justify-center">
        <div className="flex flex-col w-[90%] max-w-[1920px] divide divide-y">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pb-[25.5px] pt-[36px]">
            <div className="flex flex-col gap-10 max-w-[250px] xl:max-w-[600px]">
              <Link href="/" className="w-fit">
                <Image src={logo} alt="logo" width={100} height={100} />
              </Link>
              <p className="font-bold leading-tight">
                موقع Round هو منصة إلكترونية تهدف إلى <br />
                تقديم مجموعة متنوعة من الخيارات للسياح والمقيمين <br />
                لاستكشاف الجمال والتاريخ
              </p>
              <div className="flex gap-3">
                {socialIcons.map((item, i) => (
                  <Link
                    aria-label={item.name}
                    className="bg-secondary rounded-full p-2"
                    href={item.url}
                    key={i}
                  >
                    <item.icon color="white" size={22} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap md:justify-between gap-14 lg:w-[55%]">
              <div className="flex flex-col w-full lg:w-fit gap-8">
                <h3 className="font-bold text-sm relative after:absolute after:bg-white after:top-7 after:right-0 after:w-[30%] after:h-[3px]">
                  الصفحات
                </h3>
                <div className="flex flex-col flex-wrap gap-5 gap-x-12 max-w-[269px] max-h-[269px]">
                  {footerLinks.map((item, i) => (
                    <Link href="#" className="flex items-center gap-1" key={i}>
                      <IoIosArrowBack />
                      <span className="font-bold" dir="ltr">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-bold text-sm relative after:absolute after:bg-white after:top-7 after:right-0 after:w-[30%] after:h-[3px]">
                  بيانات التواصل
                </h3>
                <div className="flex flex-col gap-3">
                  <Link href="#" className="flex items-center gap-3">
                    <div className="bg-[#EBF9FE] rounded-full p-2">
                      <FiPhone className="text-secondary" size={18} />
                    </div>
                    <span className="font-bold" dir="ltr">
                      +2 1235 1235 123
                    </span>
                  </Link>
                  <Link href="#" className="flex items-center gap-3">
                    <div className="bg-[#EBF9FE] rounded-full p-2">
                      <GoMail className="text-secondary" size={18} />
                    </div>
                    <span className="font-bold" dir="ltr">
                      Info@mail.com
                    </span>
                  </Link>
                  <Link href="#" className="flex items-center gap-3">
                    <div className="bg-[#EBF9FE] rounded-full p-2">
                      <SlLocationPin className="text-secondary" size={18} />
                    </div>
                    <span className="font-bold" dir="ltr">
                      Egypt - Cairo
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-[13.5px] pb-[12px] font-bold">
            <span>جميع الحقوق محفوظة {year} Round</span>
            <span>صنع بـ ❤️ بواسطة APEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
