"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Building2, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewing: "bg-blue-100 text-blue-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
}

export default function CandidateDashboardPage() {
  const { appliedJobs, jobs } = useJobs()

  const appliedJobsWithDetails = appliedJobs.map((application) => {
    const job = jobs.find((j) => j.id === application.jobId)
    return {
      ...application,
      job,
    }
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Candidate Dashboard</h1>
              <p className="mt-2 text-lg text-muted-foreground">Track your job applications</p>
            </div>

            {/* Stats Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">{appliedJobs.length}</div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-card p-6 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                  {appliedJobs.filter((j) => j.status === "pending").length}
                </div>
                <div className="text-sm text-muted-foreground">Pending Review</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl bg-card p-6 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                  {appliedJobs.filter((j) => j.status === "accepted").length}
                </div>
                <div className="text-sm text-muted-foreground">Accepted</div>
              </motion.div>
            </div>

            {/* Applications List */}
            <div className="rounded-2xl bg-card shadow-md">
              <div className="border-b border-border p-6">
                <h2 className="text-xl font-semibold text-foreground">Your Applications</h2>
              </div>

              {appliedJobsWithDetails.length === 0 ? (
                <div className="p-12 text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium text-foreground">No applications yet</h3>
                  <p className="mt-2 text-muted-foreground">Start applying to jobs to see them here</p>
                  <Link href="/jobs">
                    <Button className="mt-6 gap-2">
                      Browse Jobs
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {appliedJobsWithDetails.map((application, index) => (
                    <motion.div
                      key={application.jobId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{application.job?.title || "Unknown Job"}</h3>
                          <p className="text-sm text-muted-foreground">
                            {application.job?.company || "Unknown Company"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">CV:</span> {application.cv}
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColors[application.status]}`}
                        >
                          {application.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
