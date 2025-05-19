"use client"

import Link from "next/link"
import { Activity, Calendar, Home, LogOut, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DashboardNavProps {
  pathname: string
  className?: string
}

export function DashboardNav({ pathname, className }: DashboardNavProps) {
  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/dashboard",
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/profile",
    },
    {
      href: "/events",
      label: "Events",
      icon: Calendar,
      active: pathname === "/events",
    },
    {
      href: "/activities",
      label: "Activities",
      icon: Activity,
      active: pathname === "/activities",
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings",
    },
  ]

  return (
    <nav className={cn("flex flex-col space-y-1 py-4", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            route.active ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          <route.icon className="mr-2 h-4 w-4" />
          {route.label}
        </Link>
      ))}
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "hover:bg-transparent hover:underline justify-start mt-auto",
        )}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Log out
      </Link>
    </nav>
  )
}
