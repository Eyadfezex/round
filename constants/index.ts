import { FaSnapchat, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

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
    icon: FaTwitter,
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
