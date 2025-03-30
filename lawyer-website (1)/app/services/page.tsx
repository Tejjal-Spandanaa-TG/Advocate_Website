import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium transition-colors text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Our Legal Services</h1>
                <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive legal solutions tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Expert Legal Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                  Specialized Legal Solutions for Every Need
                </h2>
                <p className="text-slate-600">
                  Our team of experienced attorneys provides comprehensive legal services across multiple practice
                  areas. We combine deep legal expertise with a client-centered approach to deliver exceptional results.
                </p>
                <p className="text-slate-600">
                  Whether you need assistance with property matters, family law, criminal defense, or legal
                  documentation, we have the knowledge and experience to guide you through the legal process with
                  confidence.
                </p>
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/contact">
                    Schedule a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Legal Services"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-bold text-primary">15+ Years</p>
                  <p className="text-sm text-slate-600">Of Legal Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">Our Practice Areas</h2>
              <p className="max-w-[700px] mx-auto text-slate-600 md:text-xl/relaxed">
                Specialized legal expertise across a wide range of practice areas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Property Law",
                  description:
                    "Expert handling of lease deeds, sale deeds, property agreements, and real estate disputes.",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Lease Deeds",
                    "Sale Deeds",
                    "Property Agreements",
                    "Title Searches",
                    "Property Disputes",
                    "Real Estate Transactions",
                  ],
                },
                {
                  title: "Family Law",
                  description: "Compassionate representation for divorce, custody, adoption, and other family matters.",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Divorce Proceedings",
                    "Child Custody",
                    "Adoption",
                    "Alimony & Support",
                    "Domestic Violence",
                    "Prenuptial Agreements",
                  ],
                },
                {
                  title: "Criminal Defense",
                  description:
                    "Strong defense strategies for all criminal cases with a focus on protecting your rights.",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Criminal Trials",
                    "Bail Applications",
                    "Appeals",
                    "White Collar Crimes",
                    "DUI Defense",
                    "Juvenile Cases",
                  ],
                },
                {
                  title: "Civil Litigation",
                  description: "Effective resolution of civil disputes through negotiation, mediation, or litigation.",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Contract Disputes",
                    "Personal Injury",
                    "Employment Issues",
                    "Debt Recovery",
                    "Consumer Disputes",
                    "Insurance Claims",
                  ],
                },
                {
                  title: "Legal Documentation",
                  description:
                    "Preparation of legal heir certificates, death certificates, wills, and other important documents.",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Legal Heir Certificates",
                    "Death Certificates",
                    "Wills & Trusts",
                    "Power of Attorney",
                    "Affidavits",
                    "Notarization Services",
                  ],
                },
                {
                  title: "Corporate Law",
                  description:
                    "Comprehensive legal services for businesses of all sizes, from startups to established corporations.",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Business Formation",
                    "Contract Drafting",
                    "Mergers & Acquisitions",
                    "Corporate Governance",
                    "Regulatory Compliance",
                    "Intellectual Property",
                  ],
                },
              ].map((practice, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={practice.image || "/placeholder.svg"}
                      alt={practice.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{practice.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-slate-600 mb-4">{practice.description}</p>
                    <ul className="space-y-2 mb-4">
                      {practice.services.slice(0, 3).map((service, idx) => (
                        <li key={idx} className="flex items-center">
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
                            className="h-5 w-5 mr-2 text-primary"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`#${practice.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">
                Detailed Service Information
              </h2>
              <p className="max-w-[700px] mx-auto text-slate-600 md:text-xl/relaxed">
                Learn more about our comprehensive legal services and how we can help you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  id: "property-law",
                  title: "Property Law",
                  description:
                    "Our property law services cover all aspects of real estate transactions and disputes. We provide comprehensive legal assistance for buying, selling, leasing, and resolving property-related issues.",
                  items: [
                    {
                      title: "Lease Deeds",
                      content:
                        "We draft, review, and negotiate lease agreements for residential and commercial properties, ensuring your interests are protected and all legal requirements are met.",
                    },
                    {
                      title: "Sale Deeds",
                      content:
                        "Our attorneys prepare and review sale deeds, conduct title searches, and handle all legal aspects of property transfers to ensure smooth and legally sound transactions.",
                    },
                    {
                      title: "Property Disputes",
                      content:
                        "We represent clients in boundary disputes, easement issues, landlord-tenant conflicts, and other property-related disagreements, seeking efficient and favorable resolutions.",
                    },
                    {
                      title: "Title Searches",
                      content:
                        "Our thorough title search services help identify any liens, encumbrances, or ownership issues that could affect your property transaction.",
                    },
                  ],
                },
                {
                  id: "family-law",
                  title: "Family Law",
                  description:
                    "Our family law practice provides compassionate and effective representation for all family-related legal matters. We understand the emotional challenges involved and work to protect your interests while minimizing conflict.",
                  items: [
                    {
                      title: "Divorce Proceedings",
                      content:
                        "We guide clients through contested and uncontested divorces, helping to negotiate fair settlements regarding property division, support, and other important matters.",
                    },
                    {
                      title: "Child Custody",
                      content:
                        "Our attorneys advocate for the best interests of children while protecting parental rights in custody disputes, visitation arrangements, and support determinations.",
                    },
                    {
                      title: "Adoption",
                      content:
                        "We handle all legal aspects of the adoption process, from stepparent adoptions to international adoptions, ensuring compliance with all applicable laws.",
                    },
                    {
                      title: "Prenuptial Agreements",
                      content:
                        "Our team drafts and reviews prenuptial agreements that protect assets and clarify financial responsibilities before marriage.",
                    },
                  ],
                },
                {
                  id: "criminal-defense",
                  title: "Criminal Defense",
                  description:
                    "Our criminal defense attorneys provide aggressive representation for clients facing criminal charges. We work diligently to protect your rights and achieve the best possible outcome for your case.",
                  items: [
                    {
                      title: "Criminal Trials",
                      content:
                        "We provide comprehensive defense strategies for felony and misdemeanor charges, conducting thorough investigations and building strong cases for our clients.",
                    },
                    {
                      title: "Bail Applications",
                      content:
                        "Our team works quickly to secure bail for clients, presenting compelling arguments to the court for reasonable bail terms.",
                    },
                    {
                      title: "Appeals",
                      content:
                        "We handle criminal appeals, carefully reviewing trial records to identify legal errors and presenting effective arguments for reversal or modification of convictions.",
                    },
                    {
                      title: "White Collar Crimes",
                      content:
                        "Our attorneys defend clients against fraud, embezzlement, and other financial crime charges with specialized knowledge of complex financial regulations.",
                    },
                  ],
                },
                {
                  id: "legal-documentation",
                  title: "Legal Documentation",
                  description:
                    "Our documentation services ensure that all your legal documents are properly prepared, executed, and filed. We help you navigate complex legal requirements with ease and confidence.",
                  items: [
                    {
                      title: "Legal Heir Certificates",
                      content:
                        "We assist in obtaining legal heir certificates, guiding you through the documentation process and representing you before relevant authorities.",
                    },
                    {
                      title: "Death Certificates",
                      content:
                        "Our team helps families obtain and correct death certificates, ensuring proper documentation for estate administration and benefit claims.",
                    },
                    {
                      title: "Wills & Trusts",
                      content:
                        "We draft comprehensive wills and trusts tailored to your specific needs, helping you protect your assets and provide for your loved ones.",
                    },
                    {
                      title: "Power of Attorney",
                      content:
                        "Our attorneys prepare durable, medical, and special powers of attorney that clearly define the scope of authority granted to your chosen representatives.",
                    },
                  ],
                },
                {
                  id: "civil-litigation",
                  title: "Civil Litigation",
                  description:
                    "Our civil litigation practice represents clients in a wide range of disputes. We pursue effective resolutions through negotiation when possible and aggressive courtroom advocacy when necessary.",
                  items: [
                    {
                      title: "Contract Disputes",
                      content:
                        "We represent clients in breach of contract cases, working to enforce agreements or defend against unjustified claims.",
                    },
                    {
                      title: "Personal Injury",
                      content:
                        "Our attorneys help injury victims recover compensation for medical expenses, lost wages, pain and suffering, and other damages caused by negligence.",
                    },
                    {
                      title: "Employment Issues",
                      content:
                        "We handle employment discrimination, wrongful termination, wage disputes, and other workplace legal matters for both employees and employers.",
                    },
                    {
                      title: "Insurance Claims",
                      content:
                        "Our team assists clients with denied insurance claims, helping to navigate the appeals process and pursue litigation when necessary.",
                    },
                  ],
                },
              ].map((service) => (
                <div key={service.id} id={service.id} className="bg-white rounded-lg shadow-md p-6 scroll-mt-20">
                  <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <Accordion type="single" collapsible className="w-full">
                    {service.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-slate-600">{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-serif">Our Legal Process</h2>
                <p className="text-slate-600">
                  We follow a structured approach to handling your legal matters, ensuring thorough attention to every
                  detail of your case.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      number: "01",
                      title: "Initial Consultation",
                      description:
                        "We begin with a comprehensive consultation to understand your legal needs and objectives.",
                    },
                    {
                      number: "02",
                      title: "Case Assessment",
                      description:
                        "Our team conducts a thorough analysis of your case, identifying key issues and potential strategies.",
                    },
                    {
                      number: "03",
                      title: "Strategy Development",
                      description:
                        "We develop a customized legal strategy tailored to your specific situation and goals.",
                    },
                    {
                      number: "04",
                      title: "Implementation",
                      description:
                        "Our attorneys execute the strategy with meticulous attention to detail and regular client updates.",
                    },
                    {
                      number: "05",
                      title: "Resolution",
                      description:
                        "We work diligently to achieve a favorable resolution, whether through negotiation or litigation.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex group">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Legal Process"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-xl"
                />
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
                    <Link href="/contact">Contact Us</Link>
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
                    "Commitment to client communication and satisfaction",
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
                  <Link href="#property-law" className="text-slate-400 hover:text-white transition-colors">
                    Property Law
                  </Link>
                </li>
                <li>
                  <Link href="#family-law" className="text-slate-400 hover:text-white transition-colors">
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link href="#criminal-defense" className="text-slate-400 hover:text-white transition-colors">
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link href="#civil-litigation" className="text-slate-400 hover:text-white transition-colors">
                    Civil Litigation
                  </Link>
                </li>
                <li>
                  <Link href="#legal-documentation" className="text-slate-400 hover:text-white transition-colors">
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

