"use client"

import { usePathname } from "next/navigation"
import { Activity, Calendar, Home, Settings, User } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function MobileSidebar() {
  const pathname = usePathname()

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
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-background md:hidden">
      <div className="grid h-full grid-cols-5">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex flex-col items-center justify-center",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            <route.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
