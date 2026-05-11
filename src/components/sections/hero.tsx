"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return <section className="relative min-h-screen flex items-center"><div className="section grid lg:grid-cols-2 gap-16 items-center"><div><motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-sm tracking-[0.2em] text-cyan-400 uppercase mb-4">Enterprise Full Stack Developer · Transitioning toward AX & AI Automation</motion.p><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl lg:text-7xl font-semibold leading-tight">Enterprise Experience<br/>Evolving with AI Automation</motion.h1><p className="mt-8 text-zinc-300 leading-relaxed">10년간 SI/SM/ITO 환경에서 운영·구축·고도화를 경험한 Full Stack Developer.<br/>운영 안정성, 유지보수성, 성능 최적화를 중요하게 생각하며, 현재는 AI 기반 Workflow Automation과 생산성 확장을 연구하고 있습니다.</p></div><div className="h-[420px] glow-card border border-cyan-400/20 relative overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]"/></div></div></section>;
}
