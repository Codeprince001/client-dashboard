import { FiHome } from "react-icons/fi";
import { BiChevronRight, BiDollar } from "react-icons/bi";
import { BsPerson, BsGrid, BsClipboard2 } from "react-icons/bs";
import { HiMiniBuildingOffice, HiOutlineUsers } from "react-icons/hi2";
import { PiBriefcaseBold } from "react-icons/pi";
import { CgShoppingCart } from "react-icons/cg";
import { IoHeadset } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { BiFolder } from "react-icons/bi";
import { TbNotes } from "react-icons/tb";
import { AiOutlinePieChart } from "react-icons/ai";
import userImg from "../Assets/img/user.jpg";



export const SidebarData =
  [
    {
      id: 1,
      title: "Dashboard",
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
      icon: <HiOutlineUsers />,
      subicon: <BiChevronRight />
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
      icon: <MdOutlineMessage />
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
      icon: <TbNotes />
    },
    {
      id: 1,
      title: "Assets",
      url: "/assets",
      icon: <BiFolder />
    },
    {
      id: 1,
      title: "Payroll",
      url: "/payroll",
      icon: <LuWallet />
    },
    {
      id: 1,
      title: "Zoom",
      url: "/zoom",
      icon: <FiVideo />
    },
    {
      id: 1,
      title: "Reports",
      url: "/reports",
      icon: <AiOutlinePieChart />
    },
    {
      id: 1,
      title: "Settings",
      url: "/settings",
      icon: <FiSettings />
    }
  ];


export const BarChartData = {
  title: "Earnings",
  dataKey: "earnings",
  chartData: [
    {
      name: 'Days',
      yData: 307900,
      pv: 2400,
      amt: 2400,
      xData: "01-May-22"
    },
    {
      name: 'Days',
      yData: 408600,
      pv: 1398,
      amt: 2210,
      xData: "02-May-22"
    },
    {
      name: 'Days',
      yData: 589000,
      pv: 9800,
      amt: 2290,
      xData: "03-May-22"
    },
    {
      name: 'Days',
      yData: 145700,
      pv: 3908,
      amt: 2000,
      xData: "04-May-22"
    }]
};


export const LineChartData = {
  title: "Time Log",
  dataKey: "Hours Logged",
  chartData: [
    {
      yData: 40,
      uv: 33,
      xData: "01-May-22"
    },
    {
      yData: 30,
      uv: 15,
      xData: "02-May-22"
    },
    {
      yData: 20,
      uv: 29,
      xData: "03-May-22"
    },
    {
      yData: 10,
      uv: 11,
      xData: "04-May-22"
    }]
};


export const DashboardMenuData = () => {
  return (
    [
      {
        link: "overview",
        url: "/",
      },
      {
        link: "project",
        url: "/dashboard/project",
      },
      {
        link: "overview",
        url: "/dashboard/client",
      },
      {
        link: "overview",
        url: "/dashboard/hr",
      },
      {
        link: "overview",
        url: "/dashboard/ticket",
      },
      {
        link: "overview",
        url: "/dashboard/finance",
      },
    ]
  );
};



export const TicketHolders = [
  {
    id: 1,
    img: userImg,
    description: "Lorem gratin danie wjnajnd awdbwbf",
    name: "Zudd Zenith",
    date: "05-05-2022",
    state: "urgent"
  },
  {
    id: 2,
    img: userImg,
    description: "Lorem gratin danie wjnajnd awdbwbf",
    name: "Zudd Zenith",
    date: "05-05-2022",
    state: "urgent"
  },
  {
    id: 3,
    img: userImg,
    description: "Lorem gratin danie wjnajnd awdbwbf ",
    name: "Zudd Zenith",
    date: "05-05-2022",
    state: "urgent"
  },
  {
    id: 4,
    img: userImg,
    description: "Lorem gratin danie wjnajnd awdbwbf ",
    name: "Zudd Zenith",
    date: "05-05-2022",
    state: "urgent"
  },
  {
    id: 5,
    img: userImg,
    description: "Lorem gratin danie wjnajnd awdbwbf ",
    name: "Zudd Zenith",
    date: "05-05-2022",
    state: "urgent"
  }
];
