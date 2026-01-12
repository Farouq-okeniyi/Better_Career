"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const companies = [
  { name: "TechHub Africa", logo: "/modern-tech-logo.png" },
  { name: "Paradise Resorts", logo: "/luxury-hotel-resort-logo.jpg" },
  { name: "SwiftCargo Ltd", logo: "/logistics-shipping-company-logo.jpg" },
  { name: "BuildTech Tanzania", logo: "/construction-company-logo.png" },
  { name: "Tanzania Industries", logo: "/manufacturing-industrial-logo.jpg" },
]

export function TrustedCompaniesSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-lg font-semibold text-muted-foreground">Trusted by Leading Companies in Tanzania</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
