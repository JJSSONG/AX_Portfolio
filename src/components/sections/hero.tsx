"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="section grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase text-cyan-300 mb-6">
            Enterprise Full Stack Developer · Transitioning toward AX & AI Automation
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05]">
            Enterprise Experience
            <br />
            Evolving with AI Automation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8 text-zinc-300 leading-8 max-w-2xl">
            10년간 SI/SM/ITO 환경에서 운영·구축·고도화를 경험한 Full Stack Developer.
            운영 안정성, 유지보수성, 성능 최적화를 중요하게 생각하며,
            현재는 AI 기반 Workflow Automation과 생산성 확장을 연구하고 있습니다.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="glow-card px-4 py-3 flex items-center gap-3">
              <div className="relative w-[44px] h-[58px] rounded-lg overflow-hidden border border-white/10 shrink-0">
                <Image src="/photo.jpg" alt="Song Jeongseop" fill className="object-cover" priority />
              </div>
              <div>
                <p className="text-sm text-zinc-300">Song Jeongseop</p>
                <p className="text-xs tracking-[0.12em] text-zinc-500 uppercase">AX-oriented Engineer</p>
              </div>
            </div>

            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-medium">View Projects</a>
            <a href="/resume.pdf" download className="px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-300">Download Resume</a>
          </div>
        </div>

        <div className="relative h-[480px]">
          <div className="absolute -inset-8 bg-cyan-500/10 blur-[100px]" />
          <div className="glow-card h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:38px_38px]" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
