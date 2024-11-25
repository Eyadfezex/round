"use client";

import { Slider, cn } from "@nextui-org/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { IoIosArrowDropdown } from "react-icons/io";

import React from "react";
import Link from "next/link";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { IoArrowBackOutline } from "react-icons/io5";

// Custom Radio Component for better organization and handling.
const CustomRadio = (props: any) => {
  const { children, option, ...otherProps } = props;

  return (
    <RadioGroup value={option} className="w-full" color="secondary">
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "flex items-center justify-between ",
            "flex-row-reverse max-w-[300px]"
          ),
        }}
      >
        {children}
      </Radio>
    </RadioGroup>
  );
};

const Search = () => {
  const [tripType, setTripType] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [price, setPrice] = React.useState(50);

  return (
    <div className="absolute top-[82%] lg:top-[92%] text-[#7A7A7A] z-10">
      <div className="flex justify-center">
        <div className="bg-white w-[25rem] lg:w-full rounded-3xl py-[22px]  border border-secondary px-6 lg:px-[45px] shadow-xl flex items-end justify-between gap-3">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            {/* Trip Type Dropdown */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold">نوع الرحلة</h2>
              <Dropdown className="min-w-[210px]">
                <DropdownTrigger className="min-w-[210px] ">
                  <div className="rounded-full border py-3 px-5 border-gray-400 flex justify-between items-center">
                    <span className="font-semibold">اختر نوع الرحلة</span>
                    <IoIosArrowDropdown className="text-secondary " size={20} />
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Radio Selection"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  hideSelectedIcon
                  selectedKeys={[tripType]}
                  onSelectionChange={(keys) =>
                    setTripType(Array.from(keys)[0] as string)
                  }
                >
                  <DropdownItem key="option1">
                    <CustomRadio option={tripType}>
                      رحله متعددة الأيام
                    </CustomRadio>
                  </DropdownItem>
                  <DropdownItem key="option2">
                    <CustomRadio option={tripType}>رحلة يوم واحد</CustomRadio>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Destination Dropdown */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold">الوجهات</h2>
              <Dropdown className="max-w-[210px]">
                <DropdownTrigger className="w-[210px] ">
                  <div className="rounded-full border py-3 px-5 border-gray-400 flex justify-between items-center">
                    <span className="font-semibold">اختر الوجهة</span>
                    <IoIosArrowDropdown className="text-secondary " size={20} />
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Radio Selection"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  hideSelectedIcon
                  selectedKeys={[destination]}
                  onSelectionChange={(keys) =>
                    setDestination(Array.from(keys)[0] as string)
                  }
                >
                  <DropdownItem key="option1">
                    <CustomRadio option={destination}>مسقط</CustomRadio>
                  </DropdownItem>
                  <DropdownItem key="option2">
                    <CustomRadio option={destination}>صلالة</CustomRadio>
                  </DropdownItem>
                  <DropdownItem key="option3">
                    <CustomRadio option={destination}>بوشر</CustomRadio>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Price Range Slider */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold">السعر</h2>
              <Dropdown>
                <DropdownTrigger className="w-[210px]">
                  <div className="rounded-full border py-3 px-5 border-gray-400 flex justify-between items-center">
                    <span className="font-semibold">{price} ج.م</span>
                    <IoIosArrowDropdown className="text-secondary" size={20} />
                  </div>
                </DropdownTrigger>
                <DropdownMenu className="w-[30rem] flex justify-end ">
                  <DropdownItem className="px-10">
                    <Slider
                      color="secondary"
                      maxValue={500}
                      minValue={1}
                      classNames={{
                        track: cn("border-x-0 bg-gray-400 rounded-l-full"),
                        mark: cn("w-[5rem] "),
                      }}
                      step={1}
                      value={price}
                      onChange={(value) => setPrice(value as number)}
                      marks={[
                        {
                          value: 50,
                          label: "50 ج.م",
                        },
                        {
                          value: 120,
                          label: "120 ج.م",
                        },
                        {
                          value: 500,
                          label: "500 ج.م",
                        },
                      ]}
                      defaultValue={50}
                      className="max-w-md"
                    />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          {/* Search Button */}
          <Link href="#">
            <Button className="bg-secondary rounded-full p-6">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">البحث</span>
                <IoArrowBackOutline color="white" size={17} />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
