"use client";

import { motion } from "framer-motion";

const priorities = [
  { title: "Operational Stability", desc: "장애 예방 중심의 운영 표준화와 모니터링 체계" },
  { title: "Maintainable Architecture", desc: "변경에 강한 구조와 명확한 책임 분리" },
  { title: "Practical AX Automation", desc: "반복 업무를 줄이는 단계적 자동화 적용" }
] as const;

const metrics = [
  { label: "Enterprise Career", value: "10+ Years" },
  { label: "Primary Domains", value: "SI · SM · ITO" },
  { label: "Current Focus", value: "AX & AI Automation" }
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
            Enterprise Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Building Reliable Systems,
            <br />
            Expanding with AX Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-zinc-300 leading-8 max-w-2xl break-keep"
          >
            10년 이상 엔터프라이즈 환경에서 구축·운영·고도화를 수행하며,
            안정성과 유지보수성을 우선하는 개발 방식을 실무에 적용해 왔습니다.
            현재는 기존 업무 프로세스에 AX 자동화를 연결해 팀 생산성을 높이는 데 집중하고 있습니다.
          </motion.p>

          <nav className="mt-10" aria-label="Primary actions">
            <ul className="flex items-center flex-nowrap whitespace-nowrap text-zinc-500">
              <li className="inline-flex items-center">
                <a href="#projects" className="inline-flex items-center px-3 py-1.5 text-sm md:text-base text-zinc-100 hover:text-cyan-300 transition-colors">
                  View Projects
                </a>
                <span aria-hidden className="mx-1.5">/</span>
              </li>
              <li className="inline-flex items-center">
                <a href="/resume.pdf" download className="inline-flex items-center px-3 py-1.5 text-sm md:text-base text-zinc-100 hover:text-cyan-300 transition-colors">
                  Download Resume
                </a>
                <span aria-hidden className="mx-1.5">/</span>
              </li>
              <li className="inline-flex items-center">
                <a href="#contact" className="inline-flex items-center px-3 py-1.5 text-sm md:text-base text-zinc-100 hover:text-cyan-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glow-card p-6 md:p-7"
        >
          <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Core Value Focus</p>

          <div className="mt-5 grid gap-3">
            {priorities.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-1.5 text-sm text-zinc-400 leading-6">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-3">
                <p className="text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-zinc-100">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
