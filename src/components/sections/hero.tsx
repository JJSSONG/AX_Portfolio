"use client";

import { motion } from "framer-motion";

const workflow = [
  { label: "Inbound Ops", desc: "요청 접수 · 업무 분류" },
  { label: "System Logic", desc: "규칙 검증 · API 처리" },
  { label: "Data Layer", desc: "조회/적재 · 품질 체크" },
  { label: "AX Automation", desc: "반복 업무 자동화" }
] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="section grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center pt-24 md:pt-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.2em] uppercase text-cyan-300 mb-6"
          >
            Enterprise Full Stack Developer · Transitioning toward AX & AI Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Enterprise Experience
            <br />
            Evolving with AI Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-zinc-300 leading-8 max-w-2xl break-keep"
          >
            10년간 SI/SM/ITO 환경에서 운영·구축·고도화를 경험한 Full Stack Developer.
            운영 안정성, 유지보수성, 성능 최적화를 기반으로 시스템을 설계하며,
            현재는 실무 반복 업무를 줄이는 AX 자동화 방향을 연구하고 있습니다.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-medium">
              View Projects
            </a>
            <a href="/resume.pdf" download className="px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-300">
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-300">
              Contact
            </a>
          </div>
        </div>

        <div className="glow-card p-6 md:p-7 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.16),transparent_35%)]" />

          <div className="relative">
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Enterprise Workflow Diagram</p>

            <div className="mt-5 space-y-3">
              {workflow.map((item, idx) => (
                <div key={item.label}>
                  <div className="glow-card p-4 md:p-5 bg-black/25 border-white/12">
                    <p className="text-sm tracking-[0.12em] text-cyan-300 uppercase">Step {idx + 1}</p>
                    <h3 className="mt-1.5 text-lg font-semibold text-zinc-100">{item.label}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                  {idx < workflow.length - 1 && (
                    <div className="h-6 flex items-center justify-center">
                      <span className="w-px h-5 bg-gradient-to-b from-cyan-300/70 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-4 py-3">
              <p className="text-sm text-zinc-200 leading-6">
                운영 중심 시스템에 자동화를 점진 적용해 <span className="text-cyan-300">안정성</span>과
                <span className="text-cyan-300"> 생산성</span>을 동시에 확보하는 접근
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
