"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, Users, FileText, Plus, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"

export default function EmployerDashboardPage() {
  const { jobs, applicants } = useJobs()

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Employer Dashboard</h1>
                <p className="mt-2 text-lg text-muted-foreground">Manage your job postings and applications</p>
              </div>
              <Link href="/post-a-job">
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Post a Job
                </Button>
              </Link>
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
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">{jobs.length}</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-card p-6 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">{applicants.length}</div>
                <div className="text-sm text-muted-foreground">Total Applicants</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl bg-card p-6 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                  {applicants.length > 0
                    ? Math.round(applicants.reduce((sum, a) => sum + a.completenessScore, 0) / applicants.length)
                    : 0}
                  %
                </div>
                <div className="text-sm text-muted-foreground">Avg. Profile Score</div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div className="mb-8 rounded-2xl bg-card p-6 shadow-md">
              <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Link href="/post-a-job">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex cursor-pointer items-center gap-4 rounded-xl bg-secondary p-4 transition-colors hover:bg-secondary/80"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Plus className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Post a New Job</h3>
                      <p className="text-sm text-muted-foreground">Create a new job listing</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </Link>
                <Link href="/applications">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex cursor-pointer items-center gap-4 rounded-xl bg-secondary p-4 transition-colors hover:bg-secondary/80"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">View Applications</h3>
                      <p className="text-sm text-muted-foreground">Review candidate applications</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Recent Jobs */}
            <div className="rounded-2xl bg-card shadow-md">
              <div className="flex items-center justify-between border-b border-border p-6">
                <h2 className="text-xl font-semibold text-foreground">Your Job Postings</h2>
                <Link href="/jobs">
                  <Button variant="ghost" size="sm" className="gap-2">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="divide-y divide-border">
                {jobs.slice(0, 5).map((job, index) => {
                  const jobApplicants = applicants.filter((a) => a.appliedJobId === job.id)
                  return (
                    <motion.div
                      key={job.id}
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
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {job.company} • {job.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                          {jobApplicants.length} applicant{jobApplicants.length !== 1 ? "s" : ""}
                        </span>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
