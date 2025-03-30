import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatCounter from "@/components/stat-counter"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              <span className="text-primary">Legal</span>
              <span className="text-amber-500">Counsel</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-white">
            Book Consultation
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container relative grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Expert Legal Solutions For Your Peace of Mind
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-md">
                Specialized in property law, family matters, and criminal defense with over 15 years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Book Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative mx-auto">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl animate-fade-in-right">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Professional Lawyer Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCounter title="Years Experience" value={15} icon="calendar" />
              <StatCounter title="Successful Cases" value={500} icon="check-circle" />
              <StatCounter title="Satisfied Clients" value={350} icon="users" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Legal Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive legal solutions tailored to your specific needs with personalized attention to every case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Property Law",
                  description: "Expert handling of lease deeds, sale deeds, and property agreements.",
                  icon: "home",
                },
                {
                  title: "Family Law",
                  description: "Sensitive approach to divorce, custody, and family disputes.",
                  icon: "users",
                },
                {
                  title: "Criminal Defense",
                  description: "Strong representation for all criminal cases with proven results.",
                  icon: "shield",
                },
                {
                  title: "Civil Litigation",
                  description: "Effective resolution of civil disputes and litigation matters.",
                  icon: "scale",
                },
                {
                  title: "Legal Documentation",
                  description: "Preparation of legal heir certificates, death certificates, and more.",
                  icon: "file-text",
                },
                {
                  title: "Legal Consultation",
                  description: "Professional advice on all legal matters and concerns.",
                  icon: "message-square",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-slate-200 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {service.icon === "home" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      )}
                      {service.icon === "users" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                      {service.icon === "shield" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      )}
                      {service.icon === "scale" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                        </svg>
                      )}
                      {service.icon === "file-text" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" x2="8" y1="13" y2="13" />
                          <line x1="16" x2="8" y1="17" y2="17" />
                          <line x1="10" x2="8" y1="9" y2="9" />
                        </svg>
                      )}
                      {service.icon === "message-square" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-primary font-medium group-hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/services">
                  View All Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Hear what our clients have to say about our legal services and expertise.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Why Choose Our Legal Services?</h2>
                <p className="text-slate-600">
                  With over 15 years of experience, our advocate provides personalized legal solutions with a commitment
                  to excellence and client satisfaction.
                </p>

                <ul className="space-y-4">
                  {[
                    "Experienced legal professional with proven track record",
                    "Personalized attention to every case and client",
                    "Transparent fee structure with no hidden costs",
                    "Timely updates and communication throughout your case",
                    "Comprehensive knowledge across multiple legal domains",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 mr-2 text-amber-500"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/about">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Legal Consultation"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-bold">Free Initial Consultation</p>
                  <p className="text-sm">Book your appointment today</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Schedule a consultation or reach out with any questions about your legal needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-slate-600">Mon-Fri: 9AM-5PM</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-slate-600">info@legalcounsel.com</p>
                  <p className="text-slate-600">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                  <p className="text-slate-600">123 Legal Street, Suite 101</p>
                  <p className="text-slate-600">New York, NY 10001</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to Discuss Your Legal Needs?</h2>
                <p className="text-slate-300">
                  Schedule a consultation today and let us help you navigate your legal challenges with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    Book Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Mon-Fri</span>
                    </div>
                    <p className="text-slate-300">9:00 AM - 5:00 PM</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Saturday</span>
                    </div>
                    <p className="text-slate-300">10:00 AM - 2:00 PM</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Sunday</span>
                    </div>
                    <p className="text-slate-300">Closed</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Emergency</span>
                    </div>
                    <p className="text-slate-300">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Legal</span>
                <span className="text-amber-500">Counsel</span>
              </div>
              <p className="text-slate-400 mb-4">
                Professional legal services with a commitment to excellence and client satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-amber-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Property Law
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Civil Litigation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Legal Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                  <span className="text-slate-400">
                    123 Legal Street, Suite 101
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                  <span className="text-slate-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                  <span className="text-slate-400">info@legalcounsel.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} LegalCounsel. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-slate-400 hover:text-white text-sm transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}

