"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useJobs } from "@/contexts/job-context"

export function RecentJobsSection() {
  const { jobs } = useJobs()
  const recentJobs = jobs.slice(0, 2)

  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Recent Job Openings</h2>
            <p className="mt-2 text-lg text-muted-foreground">Latest opportunities from top employers</p>
          </div>
          <Link href="/jobs">
            <Button variant="outline" className="gap-2 bg-transparent">
              View All Jobs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {recentJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/apply/${job.id}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group cursor-pointer rounded-2xl bg-card p-6 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <Building2 className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{job.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted recently
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
