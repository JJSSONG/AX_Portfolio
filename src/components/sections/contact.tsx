export default function ContactSection() {
  return (
    <section className="section pt-0">
      <div className="glow-card p-10 text-center">
        <h2 className="section-title mb-4">Contact</h2>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-8">
          새로운 기술과 더 나은 시스템 구조를 고민하며, AI·AX 시대에 맞는 엔터프라이즈 엔지니어로 성장하고 있습니다.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-lg border border-white/20 hover:border-cyan-300">GitHub</button>
          <button className="px-5 py-2.5 rounded-lg border border-white/20 hover:border-cyan-300">Resume</button>
          <button className="px-5 py-2.5 rounded-lg bg-white text-black font-medium">Email</button>
        </div>
      </div>
    </section>
  );
}
