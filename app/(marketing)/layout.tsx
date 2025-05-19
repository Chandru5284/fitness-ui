import type React from "react"
import { MarketingNavbar } from "@/components/marketing-navbar"
import { Footer } from "@/components/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
