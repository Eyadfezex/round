import { FaSnapchat, FaInstagram, FaTiktok } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

import { IconType } from "react-icons";
import place1 from "@/public/place1.png";
import place2 from "@/public/place2.png";
import place3 from "@/public/place3.png";
import place4 from "@/public/place4.png";
import place5 from "@/public/place5.png";
import trip1 from "@/public/trip1.png";
import trip2 from "@/public/place2.png";
import trip3 from "@/public/trip3.png";
import trip4 from "@/public/trip4.png";
interface SocialIcon {
  icon: IconType;
  name: string;
  url: string;
}

export const socialIcons: SocialIcon[] = [
  {
    icon: FaSnapchat,
    name: "Snapchat",
    url: "#",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "#",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    url: "#",
  },
  {
    icon: RiTwitterXFill,
    name: "Twitter",
    url: "#",
  },
];

export const homeLinks = [
  { name: "الرئيسية", url: "/" },
  { name: "خدماتنا", url: "#" },
  { name: "عن الشركة", url: "#" },
  { name: "الوجهات السياحية", url: "#" },
  { name: "المدونة", url: "#" },
  { name: "ألبوم الصور", url: "#" },
];

export const destinations = [
  {
    name: "ولاية بوشر",
    img: place1,
  },
  {
    name: "ولاية صلالة",
    img: place2,
  },
  {
    name: "ولاية مسقط",
    img: place3,
  },
  {
    name: "ولاية العامرات",
    img: place4,
  },
  {
    name: "ولاية بوشر",
    img: place1,
  },
  {
    name: "محافظة ظفار",
    img: place5,
  },
  {
    name: "ولاية صلالة",
    img: place2,
  },
  {
    name: "ولاية مسقط",
    img: place3,
  },
];

export const footerLinks = [
  { name: "خدماتنا", url: "/services" },
  { name: "عن الشركة", url: "/about" },
  { name: "الوجهات السياحية", url: "/destinations" },
  { name: "المدونة", url: "/blog" },
  { name: "ألبوم الصور", url: "/gallery" },
  { name: "الأحكام والشروط", url: "/terms" },
  { name: "سياسات الخصوصية", url: "/privacy" },
  { name: "الأسئلة الشائعة", url: "/faq" },
  { name: "تواصل معنا", url: "/contact" },
];

export const trips = [
  {
    title: "الرحلة الاقتصادية",
    price: 50,
    rate: "4.5",
    img: trip1,
  },
  {
    title: "الرحلة العائلية",
    price: 30,
    rate: "4.3",
    img: trip2,
  },
  {
    title: "رحلة الأصدقاء",
    price: 40,
    rate: "4.7",
    img: trip3,
  },
  {
    title: "الرحلة الثقافية",
    price: 70,
    rate: "4.4",
    img: trip4,
  },
  {
    title: "الرحلة المغامرات",
    price: 60,
    rate: "4.6",
    img: trip2,
  },
  {
    title: "رحلة الاستجمام",
    price: 55,
    rate: "4.8",
    img: trip1,
  },
  {
    title: "رحلة نهاية الأسبوع",
    price: 45,
    rate: "4.3",
    img: trip3,
  },
  {
    title: "الرحلة الرومانسية",
    price: 65,
    rate: "4.9",
    img: trip4,
  },
  {
    title: "الرحلة السياحية",
    price: 35,
    rate: "4.2",
    img: trip1,
  },
  {
    title: "رحلة الأصدقاء",
    price: 50,
    rate: "4.5",
    img: trip3,
  },
];
