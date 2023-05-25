import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const sections = {
  en: [
    {
      title: "Menu",
      isLink: true,
      items: [
        {
          title: "Browse Components",
          path: "#",
        },
        {
          title: "Documentation",
          external: true,
          path: "#",
        },
      ],
    },
    {
      title: "Legal",
      isLink: true,
      items: [
        {
          title: "Terms & Conditions",
          path: "#",
        },
        {
          title: "License",
          path: "#",
        },
      ],
    },
    {
      title: "Contact",
      isLink: false,
      items: [
        {
          icon: <PhoneEnabledOutlinedIcon />,
          title: "+84 303 479 399",
        },
        {
          icon: <EmailOutlinedIcon />,
          title: "vietdevstudio@gmail.com",
        },
        {
          icon: <PlaceOutlinedIcon />,
          title:
            "702 XL Hanoi, Hiep Phu, Thu Duc City, Ho Chi Minh City, Vietnam",
        },
      ],
    },
  ],
  vi: [
    {
      title: "Danh mục",
      isLink: true,
      items: [
        {
          title: "Các thành phần trình duyệt",
          path: "#",
        },
        {
          title: "Tài liệu",
          external: true,
          path: "#",
        },
      ],
    },
    {
      title: "Điều khoản",
      isLink: true,
      items: [
        {
          title: "Điều khoản và điều kiện",
          path: "#",
        },
        {
          title: "Giấy phép",
          path: "#",
        },
      ],
    },
    {
      title: "Liên hệ",
      isLink: false,
      items: [
        {
          icon: <PhoneEnabledOutlinedIcon />,
          title: "+84 303 479 399",
        },
        {
          icon: <EmailOutlinedIcon />,
          title: "vietdevstudio@gmail.com",
        },
        {
          icon: <PlaceOutlinedIcon />,
          title:
            "702 XL Hà Nội, Hiệp Phú, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
        },
      ],
    },
  ],
};

export const socials = [
  {
    title: "Facebook",
    icon: <FacebookIcon />,
    path: "#",
  },
  {
    title: "Youtube",
    icon: <YouTubeIcon />,
    path: "#",
  },
  {
    title: "Telegram",
    icon: <TelegramIcon />,
    path: "#",
  },
  {
    title: "Twitter",
    icon: <TwitterIcon />,
    path: "#",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    path: "#",
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    path: "#",
  },
];
