import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  forCandidates: [
    { href: "/jobs", label: "Browse Jobs" },
    { href: "/companies", label: "Companies" },
    { href: "/categories", label: "Categories" },
    { href: "/candidate-dashboard", label: "Candidate Dashboard" },
  ],
  forEmployers: [
    { href: "/post-a-job", label: "Post a Job" },
    { href: "/applications", label: "View Applications" },
    { href: "/employer-dashboard", label: "Employer Dashboard" },
  ],
  pages: [
    { href: "/about", label: "About Better Career" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="https://www.bettercareer.co.tz/wp-content/uploads/2024/05/logo_Better-Career_blue@4x.webp"
                alt="Better Career"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Tanzania&apos;s premier job portal connecting talented professionals with top employers across
              Manufacturing, Hospitality, Transport, Logistics and Construction.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
              <span>
                <strong>6</strong> Job Listings
              </span>
              <span>
                <strong>1244</strong> Talents Onboard
              </span>
              <span>
                <strong>10</strong> SMEs & Startups
              </span>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/78454861"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/better__career"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vaa3MuvDuMRZNM0z1n1n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">For Candidates</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.forCandidates.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">For Employers</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.forEmployers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Pages</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/60">
            © Better Career {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
