"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Building2, FileText, User, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"

export default function ApplicationsPage() {
  const { jobs, applicants } = useJobs()

  // Group applicants by job and sort by completeness score
  const jobsWithApplicants = useMemo(() => {
    return jobs
      .map((job) => {
        const jobApplicants = applicants
          .filter((applicant) => applicant.appliedJobId === job.id)
          .sort((a, b) => b.completenessScore - a.completenessScore)
        return {
          ...job,
          applicants: jobApplicants,
        }
      })
      .filter((job) => job.applicants.length > 0)
  }, [jobs, applicants])

  const totalApplicants = applicants.length

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">View Applications</h1>
              <p className="mt-2 text-lg text-muted-foreground">Review all applications for your job postings</p>
            </div>

            {/* Stats */}
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
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">{totalApplicants}</div>
                <div className="text-sm text-muted-foreground">Total Applicants</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl bg-card p-6 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                  {totalApplicants > 0
                    ? Math.round(applicants.reduce((sum, a) => sum + a.completenessScore, 0) / totalApplicants)
                    : 0}
                  %
                </div>
                <div className="text-sm text-muted-foreground">Avg. Profile Score</div>
              </motion.div>
            </div>

            {/* Jobs with Applicants */}
            <div className="space-y-6">
              {jobsWithApplicants.length === 0 ? (
                <div className="rounded-2xl bg-card p-12 text-center shadow-md">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium text-foreground">No applications yet</h3>
                  <p className="mt-2 text-muted-foreground">Applications will appear here once candidates apply</p>
                </div>
              ) : (
                jobsWithApplicants.map((job, jobIndex) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + jobIndex * 0.1 }}
                    className="rounded-2xl bg-card shadow-md"
                  >
                    {/* Job Header */}
                    <div className="border-b border-border p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-foreground">{job.title}</h2>
                          <p className="text-sm text-muted-foreground">
                            {job.company} • {job.location}
                          </p>
                        </div>
                        <div className="ml-auto rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
                          {job.applicants.length} applicant{job.applicants.length !== 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>

                    {/* Applicants List */}
                    <div className="divide-y divide-border">
                      {job.applicants.map((applicant, applicantIndex) => (
                        <motion.div
                          key={applicant.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + applicantIndex * 0.05 }}
                          className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
                              {applicant.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{applicant.name}</h3>
                              <p className="text-sm text-muted-foreground">CV: {applicant.cv}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">Profile Score</div>
                              <div
                                className={`text-lg font-bold ${
                                  applicant.completenessScore >= 90
                                    ? "text-green-600"
                                    : applicant.completenessScore >= 80
                                      ? "text-blue-600"
                                      : "text-yellow-600"
                                }`}
                              >
                                {applicant.completenessScore}%
                              </div>
                            </div>
                            <div className="h-10 w-24 overflow-hidden rounded-full bg-secondary">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${applicant.completenessScore}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full ${
                                  applicant.completenessScore >= 90
                                    ? "bg-green-500"
                                    : applicant.completenessScore >= 80
                                      ? "bg-blue-500"
                                      : "bg-yellow-500"
                                }`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
