"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Building2, Search, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobsPage() {
  const { jobs, categories } = useJobs()
  const [searchLocation, setSearchLocation] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesLocation = !searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase())
      const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
      return matchesLocation && matchesCategory
    })
  }, [jobs, searchLocation, selectedCategory])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Browse Jobs</h1>
            <p className="mt-2 text-lg text-muted-foreground">Find your perfect opportunity in Tanzania</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-md sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary px-4 py-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link href={`/apply/${job.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="group cursor-pointer rounded-2xl bg-card p-6 shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Building2 className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground">{job.company}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                          {job.category}
                        </span>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                    <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{job.description}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl bg-card p-12 text-center shadow-md"
              >
                <p className="text-lg text-muted-foreground">No jobs found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchLocation("")
                    setSelectedCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
