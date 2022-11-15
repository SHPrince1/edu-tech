import React from "react";
import { TbIcons } from "react-icons/tb";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <TbIcons />,
    subNav: [
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <TbIcons />,
      },
      {
        title: "Revene",
        path: "/dashboard/revenue",
        icon: <TbIcons />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <TbIcons />,
    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <TbIcons />,
      },
      {
        title: "Reports2",
        path: "/reports/reports2",
        icon: <TbIcons />,
      },
      {
        title: "Reports3",
        path: "/reports/reports3",
        icon: <TbIcons />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <TbIcons />,
  }
];
