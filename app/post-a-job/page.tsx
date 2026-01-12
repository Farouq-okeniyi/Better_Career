"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Building2, MapPin, Briefcase, FileText, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PostJobPage() {
  const router = useRouter()
  const { addJob, categories } = useJobs()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    category: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addJob(formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="rounded-2xl bg-card p-8 shadow-xl">
              {submitted ? (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
                  >
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </motion.div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Job Posted Successfully!</h2>
                  <p className="mt-2 text-muted-foreground">Your job listing is now live and visible to candidates.</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <Button onClick={() => setSubmitted(false)}>Post Another Job</Button>
                    <Button variant="outline" className="bg-transparent" onClick={() => router.push("/applications")}>
                      View Applications
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Post a New Job</h1>
                    <p className="mt-2 text-muted-foreground">Fill in the details below to create your job listing</p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <div className="relative mt-2">
                        <Input
                          id="title"
                          type="text"
                          placeholder="e.g., Software Engineer"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="pl-10"
                          required
                        />
                        <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <div className="relative mt-2">
                        <Input
                          id="company"
                          type="text"
                          placeholder="e.g., TechHub Africa"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="pl-10"
                          required
                        />
                        <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Location</Label>
                      <div className="relative mt-2">
                        <Input
                          id="location"
                          type="text"
                          placeholder="e.g., Dar Es Salaam"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="pl-10"
                          required
                        />
                        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="type">Job Type</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) => setFormData({ ...formData, type: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Job Description</Label>
                      <div className="relative mt-2">
                        <Textarea
                          id="description"
                          placeholder="Describe the role, responsibilities, and requirements..."
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="min-h-[150px] pl-10 pt-3"
                          required
                        />
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Post Job
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
