"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { useJobs } from "@/contexts/job-context"
import { Button } from "@/components/ui/button"

const candidateLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/categories", label: "Categories" },
  { href: "/candidate-dashboard", label: "Dashboard" },
]

const employerLinks = [
  { href: "/post-a-job", label: "Post a Job" },
  { href: "/applications", label: "View Applications" },
  { href: "/employer-dashboard", label: "Dashboard" },
]

export function Header() {
  const { user, logout } = useJobs()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [candidateDropdown, setCandidateDropdown] = useState(false)
  const [employerDropdown, setEmployerDropdown] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://www.bettercareer.co.tz/wp-content/uploads/2024/05/logo_Better-Career_blue.png"
              alt="Better Career"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>

            {/* For Candidates Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCandidateDropdown(true)}
              onMouseLeave={() => setCandidateDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
                For Candidates
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {candidateDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-white p-2 shadow-xl"
                  >
                    {candidateLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-4 py-2 text-sm text-foreground hover:bg-secondary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* For Employers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEmployerDropdown(true)}
              onMouseLeave={() => setEmployerDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
                For Employers
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {employerDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-white p-2 shadow-xl"
                  >
                    {employerLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-4 py-2 text-sm text-foreground hover:bg-secondary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">{user.email}</span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="sm">Register</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-2 py-4">
                <Link
                  href="/"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">For Candidates</div>
                {candidateLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-6 py-2 text-sm hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">For Employers</div>
                {employerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-6 py-2 text-sm hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/blog"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex gap-2 px-4 pt-4">
                  {user ? (
                    <Button variant="outline" className="w-full bg-transparent" onClick={logout}>
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Link href="/login" className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          Log In
                        </Button>
                      </Link>
                      <Link href="/login" className="flex-1">
                        <Button className="w-full">Register</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
