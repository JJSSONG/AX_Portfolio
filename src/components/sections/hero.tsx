"use client";
import { motion } from "framer-motion";

const nodes = [
  { id: "ops", x: "12%", y: "22%", label: "Ops" },
  { id: "api", x: "48%", y: "16%", label: "API" },
  { id: "db", x: "82%", y: "30%", label: "DB" },
  { id: "batch", x: "20%", y: "70%", label: "Batch" },
  { id: "ax", x: "60%", y: "78%", label: "AX" }
] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="section grid lg:grid-cols-2 gap-14 items-center pt-24 md:pt-28">
        <div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase text-cyan-300 mb-6">
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
            운영 안정성, 유지보수성, 성능 최적화를 중요하게 생각하며,
            현재는 실무 기반 AI Workflow Automation으로 생산성 확장을 연구하고 있습니다.
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

        <div className="relative h-[500px]">
          <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px]" />
          <div className="glow-card h-full relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(34,211,238,0.16),transparent_35%)]" />

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <line x1="12" y1="22" x2="48" y2="16" stroke="rgba(34,211,238,0.4)" strokeWidth="0.35" />
              <line x1="48" y1="16" x2="82" y2="30" stroke="rgba(34,211,238,0.4)" strokeWidth="0.35" />
              <line x1="48" y1="16" x2="20" y2="70" stroke="rgba(255,255,255,0.25)" strokeWidth="0.3" />
              <line x1="20" y1="70" x2="60" y2="78" stroke="rgba(34,211,238,0.35)" strokeWidth="0.35" />
              <line x1="82" y1="30" x2="60" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            </svg>

            {nodes.map((node) => (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.x, top: node.y }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                <p className="mt-2 text-[11px] tracking-[0.14em] text-zinc-300 uppercase">{node.label}</p>
              </div>
            ))}

            <div className="absolute left-6 right-6 bottom-6 md:bottom-8 glow-card p-4 bg-black/25">
              <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Enterprise Workflow View</p>
              <p className="mt-2 text-sm text-zinc-300 leading-6">운영 안정성 중심 시스템 위에 AI 자동화를 점진적으로 결합하는 실무형 AX 접근</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
