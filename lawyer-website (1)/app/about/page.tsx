import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Award, BookOpen, Briefcase, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium transition-colors text-primary">
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
        <section className="py-12 md:py-24 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">About Our Legal Practice</h1>
                <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated to providing exceptional legal services with integrity and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                  A Legacy of Legal Excellence Since 2008
                </h2>
                <p className="text-slate-600">
                  Founded by Attorney James Wilson with a vision to provide accessible and high-quality legal services,
                  our practice has grown from a small office to a respected legal firm serving clients across the
                  region.
                </p>
                <p className="text-slate-600">
                  We believe in building long-term relationships with our clients based on trust, transparency, and
                  results. Our team of experienced attorneys brings specialized knowledge across multiple legal domains
                  to provide comprehensive solutions for all your legal needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Link href="/contact">
                      Contact Us
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our Law Office"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-bold text-primary">15+ Years</p>
                  <p className="text-sm text-slate-600">Of Legal Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">Our Legal Journey</h2>
              <p className="max-w-[700px] mx-auto text-slate-300 md:text-xl/relaxed">
                A timeline of our growth and achievements in the legal field.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500/30"></div>

              <div className="space-y-12">
                {[
                  {
                    year: "2008",
                    title: "Firm Founded",
                    description: "Established with a focus on property law and family cases.",
                  },
                  {
                    year: "2012",
                    title: "Expanded Practice Areas",
                    description: "Added criminal defense and civil litigation to our services.",
                  },
                  {
                    year: "2015",
                    title: "New Office Location",
                    description: "Moved to our current location to better serve our growing client base.",
                  },
                  {
                    year: "2018",
                    title: "10 Year Anniversary",
                    description: "Celebrated a decade of legal excellence and client satisfaction.",
                  },
                  {
                    year: "2020",
                    title: "Digital Transformation",
                    description: "Implemented virtual consultations and digital document processing.",
                  },
                  {
                    year: "2023",
                    title: "Award-Winning Practice",
                    description: "Recognized as a top legal firm in the region for client satisfaction.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <div className="space-y-2 group">
                        <div className="text-amber-500 font-bold text-xl transition-transform group-hover:translate-x-1">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-slate-300">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-900"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">Meet Our Legal Team</h2>
              <p className="max-w-[700px] mx-auto text-slate-600 md:text-xl/relaxed">
                Experienced attorneys dedicated to providing exceptional legal representation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "James Wilson",
                  position: "Founding Attorney",
                  image: "/placeholder.svg?height=400&width=400",
                  specialization: "Property Law, Civil Litigation",
                  experience: "20+ years",
                },
                {
                  name: "Sarah Thompson",
                  position: "Senior Attorney",
                  image: "/placeholder.svg?height=400&width=400",
                  specialization: "Family Law, Legal Documentation",
                  experience: "15+ years",
                },
                {
                  name: "Michael Rodriguez",
                  position: "Attorney",
                  image: "/placeholder.svg?height=400&width=400",
                  specialization: "Criminal Defense, Civil Rights",
                  experience: "10+ years",
                },
                {
                  name: "Jennifer Lee",
                  position: "Associate Attorney",
                  image: "/placeholder.svg?height=400&width=400",
                  specialization: "Corporate Law, Contracts",
                  experience: "8+ years",
                },
                {
                  name: "David Clark",
                  position: "Associate Attorney",
                  image: "/placeholder.svg?height=400&width=400",
                  specialization: "Real Estate Law, Property Disputes",
                  experience: "7+ years",
                },
                {
                  name: "Emily Martinez",
                  position: "Legal Assistant",
                  image: "/placeholder.svg?height=400&width=400",
                  specialization: "Case Management, Client Relations",
                  experience: "5+ years",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-amber-400">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-slate-600">{member.specialization}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-slate-600">{member.experience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                  The Principles That Guide Our Practice
                </h2>
                <p className="text-slate-600">
                  Our core values shape every aspect of our legal practice and define our commitment to our clients and
                  the legal profession.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Integrity",
                      description: "We uphold the highest ethical standards in all our dealings.",
                      icon: "shield",
                    },
                    {
                      title: "Excellence",
                      description: "We strive for excellence in every legal service we provide.",
                      icon: "award",
                    },
                    {
                      title: "Client-Centered",
                      description: "Our clients' needs and goals are at the center of everything we do.",
                      icon: "users",
                    },
                    {
                      title: "Accessibility",
                      description: "We make quality legal services accessible to all who need them.",
                      icon: "door-open",
                    },
                  ].map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        {value.icon === "shield" && (
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
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          </svg>
                        )}
                        {value.icon === "award" && <Award className="h-5 w-5" />}
                        {value.icon === "users" && <Users className="h-5 w-5" />}
                        {value.icon === "door-open" && (
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
                            <path d="M13 4h3a2 2 0 0 1 2 2v14" />
                            <path d="M2 20h3" />
                            <path d="M13 20h9" />
                            <path d="M10 12v.01" />
                            <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{value.title}</h3>
                        <p className="text-slate-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Legal Team Meeting"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-12">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Client Consultation"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Legal Research"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-12">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Courtroom"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                Our Qualifications & Certifications
              </h2>
              <p className="max-w-[700px] mx-auto text-slate-600 md:text-xl/relaxed">
                Recognized expertise and credentials in the legal field.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bar Association",
                  description: "All our attorneys are members of the State Bar Association with good standing.",
                  icon: "award",
                },
                {
                  title: "Legal Education",
                  description: "Graduates from top-tier law schools with specialized training.",
                  icon: "book",
                },
                {
                  title: "Continuing Education",
                  description: "Regular participation in legal seminars and workshops to stay current.",
                  icon: "refresh",
                },
                {
                  title: "Professional Memberships",
                  description: "Active members in various legal professional organizations.",
                  icon: "users",
                },
                {
                  title: "Trial Experience",
                  description: "Extensive courtroom experience across different legal domains.",
                  icon: "gavel",
                },
                {
                  title: "Client Satisfaction",
                  description: "Recognized for exceptional client service and satisfaction.",
                  icon: "heart",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon === "award" && <Award className="h-6 w-6" />}
                    {item.icon === "book" && <BookOpen className="h-6 w-6" />}
                    {item.icon === "refresh" && (
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
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                        <path d="M21 3v5h-5" />
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                        <path d="M3 21v-5h5" />
                      </svg>
                    )}
                    {item.icon === "users" && <Users className="h-6 w-6" />}
                    {item.icon === "gavel" && (
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
                        <path d="m18 12 1-8h2M4 12l-1-8H1M5.5 14a2.5 2.5 0 0 1 5 0v8h-5v-8Z" />
                        <path d="M13.5 22h5v-8a2.5 2.5 0 0 0-5 0v8Z" />
                      </svg>
                    )}
                    {item.icon === "heart" && (
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
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                  Ready to Discuss Your Legal Needs?
                </h2>
                <p className="text-slate-300">
                  Schedule a consultation today and let us help you navigate your legal challenges with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    Book Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-slate-300">info@legalcounsel.com</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
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
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                  <p className="text-slate-300">123 Legal Street, Suite 101</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                  <p className="text-slate-300">Mon-Fri: 9AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
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
                    className="h-5 w-5 mr-2 text-amber-500 shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-slate-400">
                    123 Legal Street, Suite 101
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
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
                    className="h-5 w-5 mr-2 text-amber-500 shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-slate-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
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
                    className="h-5 w-5 mr-2 text-amber-500 shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
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
    </div>
  )
}

