"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4A90D9] via-[#5B9DE0] to-[#6AABE8] px-8 py-16 text-center lg:px-16 lg:py-24"
        >
          <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Step inside and see for yourself
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
             Don’t waste time guessing on labor laws, bad hires, or paperwork. Let Better Career handle your HR operations while you focus on running your business.
Serving SMEs across Tanzania, Uganda, and East Africa.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/login">
                <Button variant="secondary" size="lg" className="gap-2 bg-white text-foreground hover:bg-white/90">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="https://calendly.com/bettercareer/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
