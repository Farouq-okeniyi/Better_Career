"use client"

import { motion } from "framer-motion"

export function LandingPageContent() {
  return (
    <>
      {/* Background Lines */}
      <div className="fixed inset-0 -z-10 animate-moveLines bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_120px)] bg-green" />

      {/* HERO */}
      <section className="grid min-h-screen grid-cols-1 gap-16 px-[8%] py-48 align-middle lg:grid-cols-[1.2fr_0.8fr] bg-green">
        <div className="hero-content">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(52,245,181,0.3)] bg-[rgba(16,185,129,0.1)] px-5 py-2.5 text-sm text-[#34f5b5]">
            WhatsApp-Powered Platform
          </span>
          <h1 className="mb-6 text-[3.8rem] font-extrabold leading-[1.1]">
            Africa's HR Operating System for{" "}
            <span className="text-[#34f5b5]">Blue-Collar Teams</span>.
          </h1>
          <p className="subtitle_1 mb-12 max-w-[750px] px-4 text-left text-[20px] font-normal leading-relaxed text-[rgba(255,255,255,0.8)]">
            We simplify hiring, legal compliance, and daily workforce
            management — on WhatsApp.
          </p>

          <button className="mb-16 inline-flex items-center gap-3 rounded-xl bg-[#34f5b5] px-9 py-5 text-lg font-bold text-[#021017] transition-all duration-300 hover:brightness-110 hover:shadow-[0_10px_20px_rgba(52,245,181,0.3)] hover:-translate-y-1">
            Try Better Career – It's Built for You →
          </button>

          <div className="stats flex gap-6">
            <div className="stat min-w-[130px] rounded-[18px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-6">
              <h3 className="text-[1.8rem] text-[#34f5b5]">10K+</h3>
              <p>Workers</p>
            </div>
            <div className="stat min-w-[130px] rounded-[18px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-6">
              <h3 className="text-[1.8rem] text-[#34f5b5]">500+</h3>
              <p>Companies</p>
            </div>
            <div className="stat min-w-[130px] rounded-[18px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-6">
              <h3 className="text-[1.8rem] text-[#34f5b5]">100%</h3>
              <p>Compliant</p>
            </div>
          </div>
        </div>

        <div className="phone-mock relative mx-auto flex h-[640px] w-[320px] flex-col justify-end gap-4 overflow-hidden rounded-[45px] border-[12px] border-[#1a2a3a] bg-[#020814] p-6 pb-12 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <div className="phone-btn flex items-center justify-between rounded-[14px] bg-[#34f5b5] px-5 py-4 text-[0.95rem] font-semibold text-[#021017]">
            Post a new job? 📋
          </div>
          <div className="phone-btn flex items-center justify-between rounded-[14px] bg-[#34f5b5] px-5 py-4 text-[0.95rem] font-semibold text-[#021017]">
            View applicants ✅
          </div>
          <div className="phone-btn flex items-center justify-between rounded-[14px] bg-[#34f5b5] px-5 py-4 text-[0.95rem] font-semibold text-[#021017]">
            Track shifts today 📊
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="px-[8%] pt-40">
        <h2 className="colour_only mb-6 text-center text-[3.5rem] font-extrabold text-[#ff4d4f]">
          Hiring is Broken for SMEs.
        </h2>
        <p className="subtitle mx-auto mb-20 max-w-[750px] text-center text-[1.25rem] leading-relaxed text-[rgba(255,255,255,0.8)]">
          Most small businesses in Africa are drowning in hiring chaos,
          legal blind spots, and missed shifts.
        </p>

        <div className="problem-grid mx-auto mt-20 grid max-w-[1000px] grid-cols-2 grid-rows-2 gap-8">
          <div className="problem-card flex items-start gap-5 rounded-3xl border border-[rgba(255,77,79,0.2)] bg-[rgba(255,77,79,0.05)] p-10 text-left">
            ❌ No contracts, no compliance = legal risk
          </div>
          <div className="problem-card flex items-start gap-5 rounded-3xl border border-[rgba(255,77,79,0.2)] bg-[rgba(255,77,79,0.05)] p-10 text-left">
            ❌ No shift tracking tools = operational mess
          </div>
          <div className="problem-card flex items-start gap-5 rounded-3xl border border-[rgba(255,77,79,0.2)] bg-[rgba(255,77,79,0.05)] p-10 text-left">
            ❌ Endless time wasted filtering candidates
          </div>
          <div className="problem-card flex items-start gap-5 rounded-3xl border border-[rgba(255,77,79,0.2)] bg-[rgba(255,77,79,0.05)] p-10 text-left">
            ❌ Costly recruiters & complex HR software
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features grid gap-10 px-[8%] py-40 pb-60 text-white lg:grid-cols-3">
        <div className="feature rounded-3xl border border-[rgba(255,255,255,0.03)] bg-gradient-to-b from-[#082235] to-[#031221] p-16">
          <h3 className="mb-4 text-2xl font-bold">📱 Mobile-First</h3>
          <p>Post jobs, review talent, and track shifts — all via WhatsApp.</p>
        </div>
        <div className="feature rounded-3xl border border-[rgba(255,255,255,0.03)] bg-gradient-to-b from-[#082235] to-[#031221] p-16">
          <h3 className="mb-4 text-2xl font-bold">🛡 Human-Backed Compliance</h3>
          <p>We generate contracts, checklists, and keep you legally safe.</p>
        </div>
        <div className="feature rounded-3xl border border-[rgba(255,255,255,0.03)] bg-gradient-to-b from-[#082235] to-[#031221] p-16">
          <h3 className="mb-4 text-2xl font-bold">📊 Labor Management Tools</h3>
          <p>Track attendance, assign shifts, and handle payroll easily.</p>
        </div>
      </section>

      <style jsx>{`
        @keyframes moveLines {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 1000px 1000px;
          }
        }
        .animate-moveLines {
          animation: moveLines 30s linear infinite;
        }
      `}</style>
    </>
  )
}