"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/15551234567?text=I'm%20interested%20in%20your%20legal%20services", "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in-up max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-slate-900">Need Legal Help?</h3>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-slate-600 mb-3">
            Chat with us on WhatsApp for immediate legal assistance or to schedule a consultation.
          </p>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={handleWhatsAppClick}>
            Start Chat
            <MessageCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      <Button
        size="icon"
        className={`h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg ${
          isOpen ? "rotate-45" : ""
        } transition-transform duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}

