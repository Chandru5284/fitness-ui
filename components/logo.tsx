import Link from "next/link"
import { Activity } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Activity className="h-6 w-6" />
      <span className="font-bold text-xl">Cookoo</span>
    </Link>
  )
}
