"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, Mail, Lock, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useJobs()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"candidate" | "employer">("candidate")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, role)
    if (role === "candidate") {
      router.push("/candidate-dashboard")
    } else {
      router.push("/employer-dashboard")
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 lg:py-24">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="rounded-2xl bg-card p-8 shadow-xl">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <Briefcase className="h-7 w-7 text-primary-foreground" />
                </div>
                <h1 className="mt-4 text-2xl font-bold text-foreground">Welcome Back</h1>
                <p className="mt-2 text-muted-foreground">Sign in to your BetterCarrer account</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="role">I am a</Label>
                  <div className="relative mt-2">
                    <Select value={role} onValueChange={(value: "candidate" | "employer") => setRole(value)}>
                      <SelectTrigger className="pl-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="candidate">Job Seeker / Candidate</SelectItem>
                        <SelectItem value="employer">Employer / Recruiter</SelectItem>
                      </SelectContent>
                    </Select>
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Sign In
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
