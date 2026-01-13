"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Better Career helped me find my dream job in just two weeks! The platform is easy to use and the job matching is excellent.",
    name: "Sarah Mwakasege",
    role: "Software Developer",
    company: "TechHub Africa",
    image: "/professional-african-woman.png",
  },
  {
    quote:
      "As an employer, Better Career has been invaluable in finding qualified candidates. The quality of applicants is consistently high.",
    name: "James Kileo",
    role: "HR Director",
    company: "Paradise Resorts",
    image: "/professional-african-man-portrait-business.jpg",
  },
  {
    quote:
      "The best job portal in Tanzania! I love how easy it is to browse jobs by category and location. Highly recommended!",
    name: "Grace Ndunguru",
    role: "Marketing Manager",
    company: "SwiftCargo Ltd",
    image: "/professional-african-woman-portrait-corporate.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">Success stories from job seekers and employers</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-full rounded-2xl bg-card p-6 shadow-md transition-shadow hover:shadow-xl"
              >
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-foreground">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
