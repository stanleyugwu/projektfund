"use client";

import { buttonVariants } from "@/components/ui/button";
import { Disclose } from "@/components/ui/disclose";
import { useAuth } from "@/context/AuthProvider";
import roles from "@/lib/roles";
import { cn } from "@/lib/utils";
import { IRoles } from "@/types/user";
import {
  HomeIcon,
  User,
  Wallet2,
  ListIcon,
  PlusSquare,
  PieChartIcon,
  BriefcaseIcon,
  User2Icon,
  Settings,
  Wallet2Icon,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface INavIcons {
  href?: string;
  name: string;
  icon?: any;
  role?: IRoles;
}

const nav_items: INavIcons[] = [
  { name: "Overview" },
  {
    href: "/dashboard",
    name: "Overview",
    role: roles.user,
    icon: <HomeIcon className="w-4 h-4 mr-2" />,
  },
  {
    href: "/admin",
    name: "Overview",
    role: roles.superadmin,
    icon: <HomeIcon className="w-4 h-4 mr-2" />,
  },
  {
    href: "/admin/users",
    name: "Users",
    role: roles.superadmin,
    icon: <User className="w-4 h-4 mr-2" />,
  },
  {
    href: "/admin/transactions",
    name: "Transactions",
    role: roles.superadmin,
    icon: <Wallet2 className="w-4 h-4 mr-2" />,
  },
  {
    href: "/admin/properties",
    name: "Properties",
    role: roles.superadmin,
    icon: <Building2 className="w-4 h-4 mr-2" />,
  },
  {
    href: "/admin/listings",
    name: "Listings",
    role: roles.superadmin,
    icon: <ListIcon className="w-4 h-4 mr-2" />,
  },
  {
    href: "/admin/properties/create",
    name: "Create Property",
    role: roles.superadmin,
    icon: <PlusSquare className="w-4 h-4 mr-2" />,
  },
  {
    href: "/invest",
    name: "Invest",
    role: roles.user,
    icon: <PieChartIcon className="w-4 h-4 mr-2" />,
  },
  {
    href: "/portfolio",
    name: "Portfolio",
    role: roles.user,
    icon: <BriefcaseIcon className="w-4 h-4 mr-2" />,
  },
  { name: "Account" },
  {
    href: "/profile",
    name: "Profile",
    icon: <User2Icon className="w-4 h-4 mr-2" />,
  },
  {
    href: "/settings",
    name: "Settings",
    role: roles.superadmin,
    icon: <Settings className="w-4 h-4 mr-2" />,
  },
  {
    href: "/wallet",
    name: "Wallet",
    role: roles.user,
    icon: <Wallet2Icon className="w-4 h-4 mr-2" />,
  },
];

export const Sidebar = ({ onClick = null }: { onClick?: any }) => {
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return redirect("/login");
  }, []);

  return (
    <>
      <div className="h-full p-5 w-full md:w-auto space-y-5">
        <div className="">
          <h1 className="text-lg font-semibold">ProjketFund</h1>
        </div>

        <div className="flex flex-col w-full space-y-1">
          {nav_items.map(({ icon, role, ...item }, index) => (
            <Disclose show={user?.role == role || !role}>
              {item.href ? (
                <Link
                  onClick={onClick}
                  key={item.name + index}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === item.href
                      ? "bg-muted hover:bg-muted text-primary"
                      : "hover:bg-muted hover:text-primary",
                    "justify-start",
                    "rounded"
                  )}
                >
                  {icon} {item.name}
                </Link>
              ) : (
                <p
                  key={item.name}
                  className="text-sm font-semibold text-gray-600"
                >
                  {item.name}
                </p>
              )}
            </Disclose>
          ))}
        </div>
      </div>
    </>
  );
};
