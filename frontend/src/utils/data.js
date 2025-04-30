import {
  LuLayoutDashboard,
  LuHandCoins,
  LuWalletMinimal,
  LuLogOut,
} from "react-icons/lu";

export const side_menu_urls = [
  {
    id: "01",
    path: "/",
    label: "Home",
    icon: LuLayoutDashboard,
  },
  {
    id: "02",
    path: "/expense",
    label: "Expense",
    icon: LuHandCoins,
  },
  {
    id: "03",
    path: "/income",
    label: "Income",
    icon: LuWalletMinimal,
  },
  {
    id: "04",
    path: "/loans",
    label: "Loans",
    icon: LuWalletMinimal,
  },
  {
    id: "05",
    path: "/daily",
    label: "Daily Transactions",
    icon: LuWalletMinimal,
  },
  {
    id: "06",
    path: "/logout",
    label: "Log Out",
    icon: LuLogOut,
  },
];
