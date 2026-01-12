"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Users, Briefcase } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const companies = [
  {
    name: "TechHub Africa",
    logo: "/modern-tech-logo.png",
    location: "Arusha",
    industry: "Information Technology",
    employees: "50-200",
    jobs: 3,
    description: "Leading technology company driving digital transformation across East Africa.",
  },
  {
    name: "Paradise Resorts",
    logo: "/luxury-hotel-resort-logo.jpg",
    location: "Zanzibar",
    industry: "Hospitality & Tourism",
    employees: "200-500",
    jobs: 5,
    description: "Premium beach resort offering world-class hospitality experiences.",
  },
  {
    name: "SwiftCargo Ltd",
    logo: "/logistics-shipping-company-logo.jpg",
    location: "Mwanza",
    industry: "Transport & Logistics",
    employees: "100-300",
    jobs: 4,
    description: "Reliable logistics partner for businesses across the region.",
  },
  {
    name: "BuildTech Tanzania",
    logo: "/construction-company-logo.png",
    location: "Dar Es Salaam",
    industry: "Construction",
    employees: "300-500",
    jobs: 6,
    description: "Premier construction company building Tanzania's infrastructure.",
  },
  {
    name: "Tanzania Industries",
    logo: "/manufacturing-industrial-logo.jpg",
    location: "Dodoma",
    industry: "Manufacturing",
    employees: "500+",
    jobs: 8,
    description: "Major manufacturing hub producing quality goods for local and export markets.",
  },
]

export default function CompaniesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Top Companies</h1>
            <p className="mt-2 text-lg text-muted-foreground">Discover leading employers in Tanzania</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="rounded-2xl bg-card p-6 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={64}
                      height={64}
                      className="rounded-xl"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-foreground">{company.name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{company.industry}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {company.jobs} jobs
                    </span>
                  </div>

                  <p className="mt-4 text-muted-foreground">{company.description}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {company.employees} employees
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {company.jobs} open positions
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/jobs">
                      <Button variant="outline" className="w-full bg-transparent">
                        View Jobs
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
