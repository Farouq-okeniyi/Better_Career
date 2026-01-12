"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Top 10 Interview Tips for Job Seekers in Tanzania",
    excerpt:
      "Master the art of interviewing with these essential tips that will help you stand out from the competition.",
    image: "/professional-job-interview-setting.jpg",
    author: "Sarah Mwakasege",
    date: "Jan 5, 2026",
    category: "Career Advice",
  },
  {
    title: "The Future of Remote Work in East Africa",
    excerpt: "Explore how remote work is transforming the job market and what it means for Tanzanian professionals.",
    image: "/remote-work-africa.jpg",
    author: "James Kileo",
    date: "Dec 28, 2025",
    category: "Industry Trends",
  },
  {
    title: "How to Write a Winning CV",
    excerpt: "Learn the secrets to creating a CV that gets you noticed by top employers in Tanzania.",
    image: "/resume-writing.jpg",
    author: "Grace Ndunguru",
    date: "Dec 15, 2025",
    category: "Career Advice",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Blog</h1>
            <p className="mt-2 text-lg text-muted-foreground">Career tips, industry insights, and job market updates</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary">{post.title}</h2>
                    <p className="mt-2 line-clamp-2 text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="ghost" className="mt-4 gap-2 p-0 text-primary hover:bg-transparent">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
