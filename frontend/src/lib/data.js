import { MdHome, MdOutlineDashboard } from "react-icons/md";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { TbChartDonutFilled } from "react-icons/tb";
import { FaGear, FaMoneyCheck } from "react-icons/fa6";
export const dashboardLinks = [
  {
    path: "/",
    text: "Dashboard",
    Icon: MdHome,
  },
  {
    path: "/income",
    text: "Income",
    Icon: FaMoneyCheck,
  },
  {
    path: "/expense",
    text: "Expense",
    Icon: TbChartDonutFilled,
  },
  {
    path: "/transaction",
    text: "Transactions",
    Icon: HiOutlineArrowsUpDown,
  },
  {
    path: "/settings",
    text: "Settings",
    Icon: FaGear,
  },
];
