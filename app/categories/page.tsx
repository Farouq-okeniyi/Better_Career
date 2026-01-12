"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"

const categoryData = [
  {
    name: "Hospitality & Tourism",
    icon: "🏨",
    color: "bg-orange-100",
    description: "Hotels, restaurants, travel agencies, and tourism services",
  },
  {
    name: "Manufacturing",
    icon: "🏭",
    color: "bg-blue-100",
    description: "Production, assembly, and manufacturing operations",
  },
  {
    name: "Transport & Logistics",
    icon: "🚛",
    color: "bg-green-100",
    description: "Shipping, freight, transportation, and supply chain",
  },
  {
    name: "Information Technology",
    icon: "💻",
    color: "bg-purple-100",
    description: "Software development, IT support, and tech solutions",
  },
  {
    name: "Construction",
    icon: "🏗️",
    color: "bg-yellow-100",
    description: "Building, civil engineering, and infrastructure projects",
  },
]

export default function CategoriesPage() {
  const { jobs } = useJobs()

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Job Categories</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore opportunities across Tanzania&apos;s leading industries
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryData.map((category, index) => {
              const jobCount = jobs.filter((job) => job.category === category.name).length
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/jobs?category=${encodeURIComponent(category.name)}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="group cursor-pointer rounded-2xl bg-card p-8 shadow-md transition-shadow hover:shadow-xl"
                    >
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-3xl`}
                      >
                        {category.icon}
                      </div>
                      <h2 className="mt-6 text-xl font-semibold text-foreground group-hover:text-primary">
                        {category.name}
                      </h2>
                      <p className="mt-2 text-muted-foreground">{category.description}</p>
                      <div className="mt-4 text-sm font-medium text-primary">{jobCount} open positions</div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
