"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="section grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="glow-card p-5 md:p-6 max-w-[360px] w-full mx-auto lg:mx-0"
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/20">
            <Image src="/photo.jpg" alt="Song Jeongseop profile" fill className="object-cover" priority />
          </div>

          <div className="mt-5 space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Song Jeongseop</h2>
            <p className="text-sm text-zinc-400">송정섭 · Enterprise Full Stack Developer</p>
          </div>

          <dl className="mt-5 space-y-2 text-sm text-zinc-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <dt className="text-zinc-500">Birth</dt>
              <dd>1990.04.08</dd>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <dt className="text-zinc-500">Experience</dt>
              <dd>10+ Years</dd>
            </div>
            <div className="flex items-center justify-between pb-1">
              <dt className="text-zinc-500">Direction</dt>
              <dd>AX Engineer</dd>
            </div>
          </dl>

          <a
            href="/resume.pdf"
            download
            className="mt-5 inline-flex w-full justify-center px-4 py-2.5 rounded-lg border border-white/20 text-white hover:border-cyan-300"
          >
            Download Resume
          </a>
        </motion.aside>

        <div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase text-cyan-300 mb-6">
            Enterprise Full Stack Developer · Transitioning toward AX & AI Automation
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight">
            Enterprise Experience
            <br />
            Evolving with AI Automation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8 text-zinc-300 leading-8 max-w-2xl break-keep">
            10년간 SI/SM/ITO 환경에서 운영·구축·고도화를 경험한 Full Stack Developer.
            운영 안정성, 유지보수성, 성능 최적화를 중요하게 생각하며,
            현재는 AI 기반 Workflow Automation과 생산성 확장을 연구하고 있습니다.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-medium">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
