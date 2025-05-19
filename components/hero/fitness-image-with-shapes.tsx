"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Activity, BarChart3 } from "lucide-react"

export default function FitnessImageWithShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate the shapes
    const shapes = document.querySelectorAll(".shape")

    shapes.forEach((shape, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 2 + Math.random() * 2
      const rotation = Math.random() * 360

      const htmlShape = shape as HTMLElement
      htmlShape.style.setProperty("--rotation", `${rotation}deg`)

      const animate = () => {
        const currentRotation = Number.parseFloat(htmlShape.style.getPropertyValue("--rotation").replace("deg", ""))
        const newRotation = currentRotation + (direction * speed) / 10
        htmlShape.style.setProperty("--rotation", `${newRotation}deg`)

        requestAnimationFrame(animate)
      }

      animate()
    })
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto">
      {/* Background glow */}
      <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>

      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Circle */}
        <div
          className="shape absolute -top-10 -left-10 w-20 h-20 border-4 border-emerald-500/30 rounded-full"
          style={{ transform: "rotate(var(--rotation))", transition: "transform 0.5s ease" }}
        ></div>

        {/* Square */}
        <div
          className="shape absolute top-1/4 -right-12 w-16 h-16 border-4 border-teal-400/40 rounded-lg"
          style={{ transform: "rotate(var(--rotation))", transition: "transform 0.5s ease" }}
        ></div>

        {/* Triangle */}
        <div
          className="shape absolute -bottom-10 left-1/4 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[40px] border-b-cyan-400/30"
          style={{ transform: "rotate(var(--rotation))", transition: "transform 0.5s ease" }}
        ></div>

        {/* Hexagon (using clip-path) */}
        <div
          className="shape absolute bottom-1/3 -left-8 w-14 h-14 bg-blue-400/20"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "rotate(var(--rotation))",
            transition: "transform 0.5s ease",
          }}
        ></div>

        {/* Diamond */}
        <div
          className="shape absolute top-1/2 -right-6 w-12 h-12 bg-purple-400/20"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            transform: "rotate(var(--rotation))",
            transition: "transform 0.5s ease",
          }}
        ></div>
      </div>

      {/* Main image with circular mask */}
      <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-8 border-slate-800/50 shadow-lg shadow-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 mix-blend-overlay z-10"></div>
        <Image
          // src="/placeholder.svg?height=600&width=600"
          src={"https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg"}
          alt="Fitness Tracker in action"
          width={600}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Floating stat cards */}
      <div className="absolute z-20 -top-4 -left-4 bg-slate-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-2 border border-slate-700 animate-pulse">
        <Heart className="w-5 h-5 text-rose-400" />
        <span className="text-sm font-bold text-white">72 BPM</span>
      </div>

      <div className="absolute z-20 top-1/3 -right-4 bg-slate-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-2 border border-slate-700">
        <Activity className="w-5 h-5 text-emerald-400" />
        <span className="text-sm font-bold text-white">2,543 Steps</span>
      </div>

      <div className="absolute z-20 -bottom-4 right-1/4 bg-slate-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-2 border border-slate-700">
        <BarChart3 className="w-5 h-5 text-blue-400" />
        <span className="text-sm font-bold text-white">+15% Progress</span>
      </div>

      {/* Pulsing rings */}
      <div
        className="absolute inset-0 -z-10 rounded-full border-4 border-emerald-500/20 animate-ping"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute inset-0 -z-10 rounded-full border-4 border-teal-500/10 animate-ping"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      ></div>
    </div>
  )
}
