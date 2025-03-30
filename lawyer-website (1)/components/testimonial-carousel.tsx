"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The legal counsel I received was exceptional. My property dispute was resolved quickly and professionally. I highly recommend their services to anyone in need of expert legal advice.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Real Estate Agent",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I was facing a complex legal situation with my property sale. The team provided clear guidance and made the process smooth. Their expertise in property law is unmatched.",
  },
  {
    id: 3,
    name: "Michael Davis",
    position: "Family Client",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "During my difficult family case, I received compassionate and professional legal support. They fought for my rights and helped me achieve the best possible outcome for my children.",
  },
  {
    id: 4,
    name: "Emily Wilson",
    position: "Corporate Client",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The legal documentation services were thorough and efficient. All my business contracts were handled with attention to detail and expert knowledge of corporate law.",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.position}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-slate-600"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-slate-700 text-white hover:bg-white/20 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-slate-700 text-white hover:bg-white/20 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-amber-500" : "bg-slate-600"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

