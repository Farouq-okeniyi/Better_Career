"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// const blogPosts = [
//   {
//     title: "Top 10 Interview Tips for Job Seekers in Tanzania",
//     excerpt:
//       "Master the art of interviewing with these essential tips that will help you stand out from the competition.",
//     image: "/professional-job-interview-setting.jpg",
//     author: "Sarah Mwakasege",
//     date: "Jan 5, 2026",
//     category: "Career Advice",
//   },
//   {
//     title: "The Future of Remote Work in East Africa",
//     excerpt: "Explore how remote work is transforming the job market and what it means for Tanzanian professionals.",
//     image: "/remote-work-africa.jpg",
//     author: "James Kileo",
//     date: "Dec 28, 2025",
//     category: "Industry Trends",
//   },
//   {
//     title: "How to Write a Winning CV",
//     excerpt: "Learn the secrets to creating a CV that gets you noticed by top employers in Tanzania.",
//     image: "/resume-writing.jpg",
//     author: "Grace Ndunguru",
//     date: "Dec 15, 2025",
//     category: "Career Advice",
//   },
// ]
const blogPosts = [
  {
    title: "How to Recruit Qualified Talent and Interns in Tanzania Fast?",
    excerpt:
      "Recruitment in Tanzania has become increasingly challenging. Learn practical strategies that help HR teams, business owners, and recruiters find qualified talent and interns quickly.",
    image: "https://www.bettercareer.co.tz/wp-content/uploads/2025/10/Young-people-in-business-meeting-2023-11-27-05-36-08-utc-840x430.jpg",
    author: "Abraham Mmbaga",
    date: "November 14, 2025",
    category: "Recruitment / Tech",
  },
  {
    title: "From Zero to 1,000 Talents: The Journey of Building Better Career",
    excerpt:
      "The story of how Better Career Tanzania grew from a basic, messy website in early 2025 to onboarding over 1,000 talents — challenges, improvements and lessons learned.",
    image: "https://www.bettercareer.co.tz/wp-content/uploads/2024/10/Portal-Laptop-Mockup.1.2jpg-1024x683.jpg",
    author: "Abraham Mmbaga",
    date: "October 7, 2025",
    category: "Company Story / Tech",
  },
  {
    title: "The Changing Face of Hiring in Tanzania | Better Career",
    excerpt:
      "Recruitment in Tanzania is evolving rapidly. A look at the current hiring landscape, emerging trends, and how modern platforms are changing the way companies find talent.",
    image: "https://www.bettercareer.co.tz/wp-content/uploads/2025/10/Serene-Home-Office-with-Engaged-Telecommuter-840x430.png",
    author: "Abraham Mmbaga",
    date: "October 6, 2025",
    category: "Recruitment / Tech",
  },
];
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
