import { FaSnapchat, FaInstagram, FaTiktok } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

import { IconType } from "react-icons";
import place1 from "@/public/place1.png";
import place2 from "@/public/place2.png";
import place3 from "@/public/place3.png";
import place4 from "@/public/place4.png";
import place5 from "@/public/place5.png";
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
