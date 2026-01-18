"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4A90D9] via-[#5B9DE0] to-[#6AABE8]">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <p className="mb-4 text-lg font-medium text-white/90">Welcome to Better Career</p>
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-4xl">
              HR Services for SMEs and Startups in Africa - Simple, Fast, and Mobile-First

            </h1>
            <p className="mt-6 text-lg text-white/80">
            Better Career is a tech-enabled HR platform built for African SMEs. We help you hire, manage staff, and stay compliant with human support and tools that work on WhatsApp.
            </p>

            {/* Search Box */}
            {/* <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-xl sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What job are you looking for?"
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary px-4 py-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Where?"
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Link href="/jobs">
                <Button size="lg" className="w-full sm:w-auto">
                  Search
                </Button>
              </Link>
            </div> */}

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/post-a-job">
                <Button variant="secondary" size="lg" className="gap-2 bg-white text-foreground hover:bg-white/90">
                  Post a Job Today
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="www.calendly.com/bettercareer/30min">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white text-black hover:bg-white/10 hover:text-white"
                  
                >
                  Talk to Hr
                   <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold">130+</div>
                <div className="text-sm text-white/70">Talent Matched</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm text-white/70">SMEs Onboard</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-white/70">Active Contracts with SMEs</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/AdobeStock_245430193.jpg"
                alt="Professional team working together"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Recruitment for SMEs</div>
                  <div className="text-xs text-muted-foreground"> Post jobs, get shortlisted candidates, and hire in 3 - 14 days and not months</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-66 -right-10 rounded-2xl bg-white p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">HR as a Service:</div>
                  <div className="text-xs text-muted-foreground">Custom HR, contracts, and compliance plus an assistant on call.</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-90 -left-50 rounded-2xl bg-white p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Labor Management Tool</div>
                  <div className="text-xs text-muted-foreground">Track and manage field and factory teams attendance, work, contracts, payroll.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
