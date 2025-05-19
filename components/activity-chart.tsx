"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function ActivityChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const data = [
    {
      name: "Mon",
      running: 5.2,
      cycling: 0,
      swimming: 0,
    },
    {
      name: "Tue",
      running: 0,
      cycling: 15.7,
      swimming: 0,
    },
    {
      name: "Wed",
      running: 0,
      cycling: 0,
      swimming: 1.5,
    },
    {
      name: "Thu",
      running: 8.3,
      cycling: 0,
      swimming: 0,
    },
    {
      name: "Fri",
      running: 0,
      cycling: 20.1,
      swimming: 0,
    },
    {
      name: "Sat",
      running: 10.5,
      cycling: 0,
      swimming: 0,
    },
    {
      name: "Sun",
      running: 0,
      cycling: 0,
      swimming: 2.0,
    },
  ]

  if (!isMounted) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}km`}
        />
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <Tooltip />
        <Bar dataKey="running" fill="#2563eb" radius={[4, 4, 0, 0]} />
        <Bar dataKey="cycling" fill="#16a34a" radius={[4, 4, 0, 0]} />
        <Bar dataKey="swimming" fill="#9333ea" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
