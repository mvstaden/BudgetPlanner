import {
  LuLayoutDashboard,
  LuHandCoins,
  LuWalletMinimal,
  LuLogOut,
} from "react-icons/lu";

export const side_menu_urls = [
  {
    id: "01",
    path: "/home",
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
    path: "/logout",
    label: "Log Out",
    icon: LuLogOut,
  },
];
