"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, CheckCircle, Users } from "lucide-react"

interface StatCounterProps {
  title: string
  value: number
  icon: string
}

export default function StatCounter({ title, value, icon }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))

    const timer = setInterval(() => {
      start += step
      if (start > value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={countRef} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon === "calendar" && <Calendar className="h-8 w-8" />}
        {icon === "check-circle" && <CheckCircle className="h-8 w-8" />}
        {icon === "users" && <Users className="h-8 w-8" />}
      </div>
      <div className="text-4xl font-bold text-slate-900 mb-2">{count}+</div>
      <div className="text-slate-600 font-medium">{title}</div>
    </div>
  )
}

