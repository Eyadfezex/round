"use client";
import React, { useState } from "react";
import signin from "@/public/signin.png";
import countryCodes from "country-codes-list";
import circle from "@/public/svgs/circle.svg";
import sun from "@/public/svgs/whitesun.svg";
import logo from "@/public/logo.png";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { cn, Link } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
const SignUp = () => {
  const myCountryCodesArray = Object.values(
    countryCodes.customList(
      "countryCode",
      "[{countryCode}] {countryNameEn}: +{countryCallingCode}"
    )
  )
    .map((entry) => {
      // Extract the country code, country name, and calling code from the string
      const regex = /\[(\w+)\]\s([a-zA-Z\s]+):\s\+(\d+)/;
      const match = entry.match(regex);

      if (match) {
        return {
          countryCode: match[1], // Extracted country code
          countryName: match[2], // Extracted country name
          callingCode: `+${match[3]}`, // Extracted calling code
        };
      }
      return null; // In case the regex doesn't match, return null or handle it as needed
    })
    .filter((entry) => entry !== null); // Remove any null entries
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(myCountryCodesArray[0].callingCode);
  const [countryFlag, setCountryFlag] = useState(
    myCountryCodesArray[0].countryCode
  );
  const [active, setActive] = useState(false);

  return (
    <section className="relative h-screen">
      <Image
        src={circle}
        alt="circle"
        className="absolute -left-[5rem] -top-[5rem]"
      />
      <div className="flex justify-center py-[2rem] h-full">
        <div className="flex justify-center lg:justify-start items-center w-full lg:w-[90%] max-w-[1920px] h-full gap-[7rem]">
          <div className="relative hidden lg:block h-full w-[50%] max-w-[581px] text-white xl:max-w-[750px] rounded-[44px] overflow-hidden ">
            <Image
              src={signin}
              alt="signin"
              fetchPriority="high"
              className=" absolute w-full h-full object-cover "
            />
            <Image src={sun} alt="sun" className="absolute left-10 top-14" />
            <div className="flex justify-center relative pt-[calc(279px+15vh)]">
              <div className="w-[85%] ">
                <h1 className=" font-bold  text-[53px]">أهلاً و سهلاً في</h1>
                <h3 className="font-bold text-5xl relative after:absolute after:bg-white after:top-[4rem] after:right-0 after:w-[15%] after:h-[5px] after:rounded-full">
                  Round
                </h3>
                <p className="mt-[3rem] text-2xl font-bold">
                  بـوابتك إلـى مـغامـرات لا تُنسـى وكـنوز
                  <br /> مـخفية حـول سلطنة عُمـان
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[3rem]  items-center border p-[30px] pt-[70px] rounded-[33px] w-[90%] lg:w-[40%] h-fit ">
            <div className="flex items-center flex-col gap-5">
              <Image src={logo} alt="logo" width={120} />
              <div className="text-center">
                <h2 className="text-xl xl:text-2xl font-bold">إنشاء حساب</h2>
                <p className="text-sm xl:text-lg text-primary font-semibold">
                  يجب إدخال البيانات لإنشاء حساب جديد
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[2rem] w-full">
              <Input
                type="text"
                label="الاسم كاملاً"
                classNames={{
                  base: cn("w-full"),
                  inputWrapper: cn("rounded-full border"),
                  label: cn("font-bold"),
                }}
              />
              <Input
                type="email"
                label="البريد الالكتروني"
                classNames={{
                  base: cn("w-full"),
                  inputWrapper: cn("rounded-full border"),
                  label: cn("font-bold"),
                }}
              />
              <div className="flex items-center px-1 border rounded-full bg-default-100 hover:bg-default-200 w-full ">
                <Input
                  type="phone"
                  label="رقم الواتساب"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  classNames={{
                    label: cn("font-bold"),
                    inputWrapper: cn(
                      "!bg-transparent rounded-full !shadow-none"
                    ),
                  }}
                />
                <motion.div
                  className="relative w-fit h-fit"
                  onClick={() => setActive(!active)}
                >
                  <div className="ml-8 text-gray-800 text-base font-medium cursor-pointer flex items-center">
                    <div className="flex items-center gap-2">
                      <p className="mr-2">{country}</p>
                      <ReactCountryFlag countryCode={countryFlag} svg />
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="w-[15rem] h-[30rem] overflow-y-scroll absolute left-10 bottom-0 z-10 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4">
                  {myCountryCodesArray.map((item) => (
                    <div
                      key={item.countryCode}
                      className="py-2 px-3 mb-2 text-sm text-gray-800 hover:bg-gray-200 cursor-pointer rounded-md transition-all duration-200"
                      role="listitem"
                      onClick={() => {
                        setCountry(item.callingCode);
                        setCountryFlag(item.countryCode);
                        setActive(false);
                      }}
                      aria-label={`Country: ${item.countryName}, Calling Code: ${item.callingCode}`}
                    >
                      <div className="flex justify-between w-full">
                        <div>
                          <span className="mr-2">{item.countryName}</span>
                          <span className="text-gray-600">
                            {item.callingCode}
                          </span>
                        </div>
                        <ReactCountryFlag countryCode={item.countryCode} svg />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <Input
                type="password"
                label="كلمة المرور"
                classNames={{
                  base: cn("w-full"),
                  inputWrapper: cn("rounded-full border"),
                  label: cn("font-bold"),
                }}
              />
              <Button className="w-full rounded-full bg-secondary text-white font-bold">
                إنشاء الحساب
              </Button>
              <span className="font-bold">
                امتلك حساب بالفعل{" "}
                <Link href="#" className="text-secondary ">
                  تسجيل الدخول
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
