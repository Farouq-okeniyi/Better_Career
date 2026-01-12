import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JobProvider } from "@/contexts/job-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Better Career - Find the Right Job Vacancies in Tanzania",
  description:
    "Tanzania's premier job portal connecting talented professionals with top employers. Find jobs and internships across Manufacturing, Hospitality, Transport, Logistics and Construction.",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0e8a8a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <JobProvider>{children}</JobProvider>
        <Analytics />
      </body>
    </html>
  )
}
