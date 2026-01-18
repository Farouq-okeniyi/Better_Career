"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I appreciate Better Career for matching me with just the salespeople I needed and at the budget specified. Better Career are excellent at what they do.",
    name: "Adam Beleko",
    role: "CEO",
    company: "Larven Technologies",
    image: "https://www.bettercareer.co.tz/wp-content/uploads/2025/04/1716227959846.jpeg",
  },
  {
    quote:
      "Morning, I hope you're well. I am just thankful for that job opportunity you linked me to, I have got the job. It is so good that you help people get opportunities.",
    name: "Nelly Njau",
    role: "Talent",
    company: "Better Career",
    image: "https://www.bettercareer.co.tz/wp-content/uploads/2015/10/Nelly-Njau.jpg",
  },
  {
    quote:
      "Working with Better Career has been a seamless experience. Their professionalism, responsiveness, and genuine care for both employer and candidate needs truly stand out. A platform that understands the local market while maintaining global standards.",
    name: "Sandra Aikaruwa Mushi",
    role: "Principal Interior Architecture Designer",
    company: "Creative Studios Ltd",
    image: "https://www.bettercareer.co.tz/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-12-at-07.40.17_86faf17f.jpg",
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
