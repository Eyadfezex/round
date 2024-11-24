"use client";
import React from "react";
import signin from "@/public/signin.png";
import circle from "@/public/svgs/circle.svg";
import sun from "@/public/svgs/whitesun.svg";
import logo from "@/public/logo.png";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { cn, Link } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
const SignUp = () => {
  return (
    <section className="relative h-screen">
      <Image
        src={circle}
        alt="circle"
        className="absolute -left-[5rem] -top-[5rem]"
      />
      <div className="flex justify-center py-[2rem] h-full">
        <div className="flex justify-start items-center w-[90%] max-w-[1920px] h-full gap-[7rem]">
          <div className="relative h-full w-[50%] max-w-[581px] text-white xl:max-w-[750px] rounded-[44px] overflow-hidden ">
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
          <div className="flex flex-col gap-[3rem]  items-center border p-[30px] pt-[70px] rounded-[33px] w-[40%] h-fit ">
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
              <Input
                type="number"
                label="رقم الواتساب"
                classNames={{
                  base: cn("w-full"),
                  inputWrapper: cn("rounded-full border"),
                  label: cn("font-bold"),
                }}
              />
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
