import { FiHome } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { BiChevronRight, BiDollar } from "react-icons/bi";
import { BsPerson, BsGrid, BsClipboard2 } from "react-icons/bs";
import { HiMiniBuildingOffice, HiOutlineUsers } from "react-icons/hi2";
import { PiBriefcaseBold } from "react-icons/pi";
import { CgShoppingCart } from "react-icons/cg";
import { IoHeadset } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";



export const SidebarData =
  [
    {
      id: 1,
      title: "DashBoard",
      url: "/",
      icon: <FiHome />,
      subicon: <BiChevronRight />
    },
    {
      id: 1,
      title: "Leads",
      url: "/leads",
      icon: <BsPerson />
    },
    {
      id: 1,
      title: "Clients",
      url: "/clients",
      icon: <HiMiniBuildingOffice />
    },
    {
      id: 1,
      title: "HR",
      url: "/hr",
      icon: <HiOutlineUsers />
    },
    {
      id: 1,
      title: "Work",
      url: "/work",
      icon: <PiBriefcaseBold />
    },
    {
      id: 1,
      title: "Finance",
      url: "/finance",
      icon: <BiDollar />
    },
    {
      id: 1,
      title: "Products",
      url: "/products",
      icon: <BsGrid />
    },
    {
      id: 1,
      title: "Orders",
      url: "/orders",
      icon: <CgShoppingCart />
    },
    {
      id: 1,
      title: "Tickets",
      url: "/tickets",
      icon: <IoHeadset />
    },
    {
      id: 1,
      title: "Events",
      url: "/events",
      icon: <LuCalendarDays />
    },
    {
      id: 1,
      title: "Messages",
      url: "/messages",
      icon: <BsClipboard2 />
    },
    {
      id: 1,
      title: "NoticeBoard",
      url: "/noticeboard",
      icon: <BsClipboard2 />
    },
    {
      id: 1,
      title: "Knowledge Base",
      url: "/knowledgebase",
      icon: <GoHomeFill />
    },
    {
      id: 1,
      title: "Assets",
      url: "/assets",
      icon: <GoHomeFill />
    },
    {
      id: 1,
      title: "Payroll",
      url: "/payroll",
      icon: <GoHomeFill />
    },
    {
      id: 1,
      title: "Zoom",
      url: "/zoom",
      icon: <GoHomeFill />
    },
    {
      id: 1,
      title: "Reports",
      url: "/reports",
      icon: <GoHomeFill />
    },
    {
      id: 1,
      title: "Settings",
      url: "/settings",
      icon: <GoHomeFill />
    }
  ];


export const BarChartData = {
  title: "Earnings",
  dataKey: "earnings",
  chartData: [
    {
      name: 'Page A',
      uv: 600000,
      pv: 2400,
      amt: 2400,
      date: "1 may"
    },
    {
      name: 'Page B',
      uv: 400000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 200000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 100000,
      pv: 3908,
      amt: 2000,
    }]
};