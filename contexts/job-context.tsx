"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  description: string
  category: string
}

export interface AppliedJob {
  jobId: string
  status: "pending" | "reviewing" | "accepted" | "rejected"
  cv?: string
}

export interface Applicant {
  id: string
  name: string
  cv: string
  completenessScore: number
  appliedJobId: string
}

interface User {
  email: string
  role: "candidate" | "employer"
}

interface JobContextType {
  jobs: Job[]
  addJob: (job: Omit<Job, "id">) => void
  appliedJobs: AppliedJob[]
  applyToJob: (jobId: string, cv: string) => void
  applicants: Applicant[]
  addApplicant: (applicant: Omit<Applicant, "id">) => void
  categories: string[]
  user: User | null
  login: (email: string, role: "candidate" | "employer") => void
  logout: () => void
}

const initialJobs: Job[] = [
  {
    id: "1",
    title: "Quantity Surveyor",
    company: "BuildTech Tanzania",
    location: "Dar Es Salaam",
    type: "Full-time",
    description:
      "We are looking for an experienced Quantity Surveyor to join our construction team. You will be responsible for managing costs and contracts for our major building projects.",
    category: "Construction",
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "TechHub Africa",
    location: "Arusha",
    type: "Full-time",
    description:
      "Join our innovative tech team as a Software Engineer. Build scalable applications using modern technologies and contribute to Tanzania's digital transformation.",
    category: "Information Technology",
  },
  {
    id: "3",
    title: "Logistics Manager",
    company: "SwiftCargo Ltd",
    location: "Mwanza",
    type: "Full-time",
    description:
      "Lead our logistics operations across East Africa. Manage supply chain, coordinate with partners, and ensure timely delivery of goods.",
    category: "Transport & Logistics",
  },
  {
    id: "4",
    title: "Hotel Manager",
    company: "Paradise Resorts",
    location: "Zanzibar",
    type: "Full-time",
    description:
      "Manage our luxury beachfront resort. Oversee daily operations, staff management, and ensure exceptional guest experiences.",
    category: "Hospitality & Tourism",
  },
  {
    id: "5",
    title: "Manufacturing Engineer",
    company: "Tanzania Industries",
    location: "Dodoma",
    type: "Full-time",
    description:
      "Optimize our manufacturing processes and implement quality control measures. Lead production improvements and team training.",
    category: "Manufacturing",
  },
]

const initialApplicants: Applicant[] = [
  { id: "1", name: "John Mwamba", cv: "john_mwamba_cv.pdf", completenessScore: 92, appliedJobId: "1" },
  { id: "2", name: "Sarah Kimaro", cv: "sarah_kimaro_resume.pdf", completenessScore: 88, appliedJobId: "2" },
  { id: "3", name: "Peter Njau", cv: "peter_njau_cv.pdf", completenessScore: 75, appliedJobId: "1" },
  { id: "4", name: "Grace Mushi", cv: "grace_mushi_resume.pdf", completenessScore: 95, appliedJobId: "4" },
  { id: "5", name: "David Shayo", cv: "david_shayo_cv.pdf", completenessScore: 82, appliedJobId: "3" },
]

const categories = [
  "Hospitality & Tourism",
  "Transport & Logistics",
  "Information Technology",
  "Manufacturing",
  "Construction",
]

const JobContext = createContext<JobContextType | undefined>(undefined)

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs)
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([])
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants)
  const [user, setUser] = useState<User | null>(null)

  const addJob = (job: Omit<Job, "id">) => {
    const newJob: Job = {
      ...job,
      id: Date.now().toString(),
    }
    setJobs((prev) => [...prev, newJob])
  }

  const applyToJob = (jobId: string, cv: string) => {
    const newAppliedJob: AppliedJob = {
      jobId,
      status: "pending",
      cv,
    }
    setAppliedJobs((prev) => [...prev, newAppliedJob])

    // Add fake applicant "You"
    const newApplicant: Applicant = {
      id: Date.now().toString(),
      name: "You",
      cv,
      completenessScore: Math.floor(Math.random() * 31) + 70, // 70-100
      appliedJobId: jobId,
    }
    setApplicants((prev) => [...prev, newApplicant])
  }

  const addApplicant = (applicant: Omit<Applicant, "id">) => {
    const newApplicant: Applicant = {
      ...applicant,
      id: Date.now().toString(),
    }
    setApplicants((prev) => [...prev, newApplicant])
  }

  const login = (email: string, role: "candidate" | "employer") => {
    setUser({ email, role })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        appliedJobs,
        applyToJob,
        applicants,
        addApplicant,
        categories,
        user,
        login,
        logout,
      }}
    >
      {children}
    </JobContext.Provider>
  )
}

export function useJobs() {
  const context = useContext(JobContext)
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobProvider")
  }
  return context
}
