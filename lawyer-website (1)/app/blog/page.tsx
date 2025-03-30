import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
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
            <Link href="/blog" className="text-sm font-medium transition-colors text-primary">
              Blog
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-white">
            Book Consultation
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Legal Insights & Updates</h1>
                <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay informed with the latest legal news, insights, and expert advice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="grid gap-12">
                  {[
                    {
                      title: "Understanding Property Rights: What Every Homeowner Should Know",
                      excerpt: "Property ownership comes with various rights and responsibilities. This comprehensive guide explains the fundamental property rights every homeowner should understand to protect their investment.",
                      image: "/placeholder.svg?height=400&width=600",
                      date: "March 15, 2023",
                      author: "James Wilson",
                      category: "Property Law",
                      slug: "understanding-property-rights"
                    },
                    {
                      title: "The Complete Guide to Family Law Proceedings",
                      excerpt: "Navigating family law proceedings can be emotionally challenging. This guide provides a step-by-step overview of what to expect during divorce, custody, and other family law cases.",
                      image: "/placeholder.svg?height=400&width=600",
                      date: "February 28, 2023",
                      author: "Sarah Thompson",
                      category: "Family Law",
                      slug: "guide-to-family-law-proceedings"
                    },
                    {
                      title: "Legal Documentation: Why Proper Paperwork Matters",
                      excerpt: "Proper legal documentation is crucial for protecting your rights and interests. Learn about the most important legal documents everyone should have and why they matter.",
                      image: "/placeholder.svg?height=400&width=600",
                      date: "January 20, 2023",
                      author: "Michael Rodriguez",
                      category: "Legal Documentation",
                      slug: "importance-of-legal-documentation"
                    },
                    {
                      title: "Criminal Defense: Know Your Rights During Arrest",
                      excerpt: "Understanding your rights during an arrest is essential for protecting yourself in the criminal justice system. This article outlines what you should know if you're ever in this situation.",
                      image: "/placeholder.svg?height=400&width=600",
                      date: "December 12, 2022",
                      author: "David Clark",
                      category: "Criminal Defense",
                      slug: "rights-during-arrest"
                    },
                    {
                      title: "Recent Changes in Real Estate Law: What Buyers and Sellers Need to Know",
                      excerpt: "The legal landscape for real estate transactions is constantly evolving. Stay informed about recent changes that could affect your property buying or selling experience.",
                      image: "/placeholder.svg?height=400&width=600",
                      date: "November 5, 2022",
                      author: "Jennifer Lee",
                      category: "Property Law",
                      slug: "real-estate-law-changes"
                    }
                  ].map((post, index) => (
                    <div key={index} className="group">
                      <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative overflow-hidden rounded-lg aspect-video">
                          <Image 
                            src={post.image || "/placeholder.svg"} 
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-4">
                          <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {post.category}
                          </Badge>
                          <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-slate-600">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-slate-500">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>By {post.author}</span>
                          </div>
                          <div className="flex items-center text-primary font-medium group-hover:underline">
                            Read More
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
                      <span className="sr-only">Next</span>
                    </Button>
                  </nav>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-slate-100 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Search Articles</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <Input placeholder="Search..." className="pl-9" />
                  </div>
                </div>
                
                <div className="bg-slate-100 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {[
                      { name: "Property Law", count: 12 },
                      { name: "Family Law", count: 8 },
                      { name: "Criminal Defense", count: 10 },
                      { name: "Civil Litigation", count: 6 },
                      { name: "Legal Documentation", count: 9 },
                      { name: "Corporate Law", count: 5 }
                    ].map((category, index) => (
                      <li key={index}>
                        <Link href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between group">
                          <span className="group-hover:text-primary transition-colors">{category.name}</span>
                          <Badge variant="outline" className="bg-slate-200">{category.count}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-100 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Understanding Property Rights: What Every Homeowner Should Know",
                        date: "March 15, 2023",
                        slug: "understanding-property-rights"
                      },
                      {
                        title: "The Complete Guide to Family Law Proceedings",
                        date: "February 28, 2023",
                        slug: "guide-to-family-law-proceedings"
                      },
                      {
                        title: "Legal Documentation: Why Proper Paperwork Matters",
                        date: "January 20, 2023",
                        slug: "importance-of-legal-documentation"
                      }
                    ].map((post, index) => (
                      <li key={index} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                        <Link href={`/blog/${post.slug}`} className="group">
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-slate-500 mt-1">{post.date}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-slate-600 mb-4">
                    Stay updated with the latest legal news and insights delivered directly to your inbox.
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-slate-500 mt-2">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </div>
                
                <div className="bg-slate-900 text-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Need Legal Assistance?</h3>
                  <p className="text-slate-300 mb-4">
                    Our experienced attorneys are ready to help with your legal matters.
                  </p>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    <Link href="/contact">
                      Contact Us Today
                    </Link>
                  </Button>
                </div>
              </div>
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
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Link href="/contact">
                      Book Consultation
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose Our Legal Services?</h3>
                <ul className="space-y-4">
                  {[
                    "Experienced attorneys with specialized expertise",
                    "Personalized attention to every case",
                    "Transparent fee structure with no hidden costs",
                    "Proven track record of successful outcomes",
                    "Commitment to client communication and satisfaction"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-amber-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb\

