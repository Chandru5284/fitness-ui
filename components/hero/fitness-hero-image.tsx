"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Activity, BarChart3 } from "lucide-react"

export default function FitnessHeroImage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Add a subtle animation effect
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      container.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative transition-transform duration-200 ease-out">
      {/* Decorative elements */}
      <div className="absolute -z-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute -z-10 w-48 h-48 bg-teal-300/20 rounded-full blur-2xl -top-10 -right-10"></div>

      {/* Hexagon shape container */}
      <div className="relative w-full max-w-md aspect-square">
        {/* Hexagon clip path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-50 p-1">
            <div
              className="w-full h-full overflow-hidden bg-white"
              style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
            >
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Fitness Tracker in action"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-4 h-4 bg-emerald-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-[25%] right-[12.5%] w-4 h-4 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-[25%] right-[12.5%] w-4 h-4 bg-emerald-500 rounded-full"></div>
          <div className="absolute top-[25%] left-[12.5%] w-4 h-4 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-[25%] left-[12.5%] w-4 h-4 bg-emerald-500 rounded-full"></div>
        </div>

        {/* Stats floating around the hexagon */}
        <div className="absolute -top-4 left-1/4 bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500" />
          <span className="text-sm font-bold">72 BPM</span>
        </div>

        <div className="absolute top-1/3 -right-4 bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-bold">2,543 Steps</span>
        </div>

        <div className="absolute -bottom-4 right-1/4 bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-bold">+15% Progress</span>
        </div>
      </div>
    </div>
  )
}
