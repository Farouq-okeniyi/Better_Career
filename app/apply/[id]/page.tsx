"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { MapPin, Clock, Building2, Briefcase, CheckCircle2, Upload } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const { jobs, applyToJob, appliedJobs } = useJobs()
  const [cvFileName, setCvFileName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const job = jobs.find((j) => j.id === params.id)
  const hasApplied = appliedJobs.some((aj) => aj.jobId === params.id)

  if (!job) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Job not found</h1>
            <Button className="mt-4" onClick={() => router.push("/jobs")}>
              Browse Jobs
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!cvFileName) return
    applyToJob(job.id, cvFileName)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Job Details Card */}
            <div className="rounded-2xl bg-card p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{job.title}</h1>
                  <p className="mt-1 text-lg text-muted-foreground">{job.company}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                  <Briefcase className="h-4 w-4 text-primary" />
                  {job.category}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground">Job Description</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{job.description}</p>
              </div>
            </div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 rounded-2xl bg-card p-8 shadow-md"
            >
              {submitted || hasApplied ? (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
                  >
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </motion.div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Application Submitted!</h2>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for applying. We will review your application and get back to you soon.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <Button onClick={() => router.push("/jobs")}>Browse More Jobs</Button>
                    <Button
                      variant="outline"
                      className="bg-transparent"
                      onClick={() => router.push("/candidate-dashboard")}
                    >
                      View Dashboard
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-foreground">Apply for this Position</h2>
                  <p className="mt-2 text-muted-foreground">Submit your CV to apply for this job</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>
                      <Label htmlFor="cv">CV / Resume Filename</Label>
                      <div className="relative mt-2">
                        <Input
                          id="cv"
                          type="text"
                          placeholder="e.g., john_doe_cv.pdf"
                          value={cvFileName}
                          onChange={(e) => setCvFileName(e.target.value)}
                          className="pl-10"
                          required
                        />
                        <Upload className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Enter your CV filename (simulated upload)</p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
