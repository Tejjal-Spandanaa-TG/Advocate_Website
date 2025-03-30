import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
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
            <Link href="/contact" className="text-sm font-medium transition-colors text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Contact Us</h1>
                <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our legal team for expert advice and assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-slate-600 mb-6">
                    We're here to help with your legal needs. Fill out the form below, and our team will get back to you
                    promptly.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" className="focus-visible:ring-primary" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select>
                      <SelectTrigger id="service" className="focus-visible:ring-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="property-law">Property Law</SelectItem>
                        <SelectItem value="family-law">Family Law</SelectItem>
                        <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                        <SelectItem value="civil-litigation">Civil Litigation</SelectItem>
                        <SelectItem value="legal-documentation">Legal Documentation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup defaultValue="email" className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email" className="font-normal">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone" className="font-normal">
                          Phone
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your legal issue or inquiry"
                      className="min-h-32 focus-visible:ring-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Submit Inquiry
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden h-64 md:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647286562272!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>

                <div className="bg-slate-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Office Address</p>
                        <p className="text-slate-600">
                          123 Legal Street, Suite 101
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                        <p className="text-slate-600">+1 (555) 987-6543</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-slate-600">info@legalcounsel.com</p>
                        <p className="text-slate-600">support@legalcounsel.com</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-slate-600">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-slate-600">Sunday: Closed</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Emergency Legal Assistance</h3>
                  <p className="text-slate-600 mb-4">
                    For urgent legal matters outside of regular business hours, please call our emergency hotline.
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-bold">+1 (555) 911-0123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] mx-auto text-slate-600 md:text-xl/relaxed">
                Find answers to common questions about our legal services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What should I bring to my initial consultation?",
                  answer:
                    "For your initial consultation, please bring any relevant documents related to your case, such as contracts, correspondence, court papers, and identification. This will help us better understand your situation and provide more accurate advice.",
                },
                {
                  question: "How much do your legal services cost?",
                  answer:
                    "Our fees vary depending on the type and complexity of your case. We offer transparent fee structures and will discuss all costs during your initial consultation. We provide various payment options and, in some cases, can work on a contingency basis.",
                },
                {
                  question: "How long will my case take to resolve?",
                  answer:
                    "The timeline for resolving legal matters varies greatly depending on the complexity of the case, court schedules, and whether a settlement can be reached. During your consultation, we can provide an estimated timeline based on your specific situation.",
                },
                {
                  question: "Do you offer virtual consultations?",
                  answer:
                    "Yes, we offer virtual consultations via video conference or phone for clients who prefer remote meetings. These consultations are just as comprehensive as in-person meetings and allow us to serve clients regardless of location.",
                },
                {
                  question: "What areas of law do you practice?",
                  answer:
                    "Our firm specializes in property law, family law, criminal defense, civil litigation, and legal documentation. Our team includes attorneys with expertise in each of these areas to provide comprehensive legal services.",
                },
                {
                  question: "How often will I receive updates about my case?",
                  answer:
                    "We believe in regular communication with our clients. You will receive updates whenever there are significant developments in your case. Additionally, we schedule regular check-ins and are always available to answer questions about your case status.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
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
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Call Us Now
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Legal Consultation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-bold">Free Initial Consultation</p>
                  <p className="text-sm">For new clients</p>
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
    </div>
  )
}

