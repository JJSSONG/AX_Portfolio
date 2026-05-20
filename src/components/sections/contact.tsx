const linkClass = "px-2 py-1 text-sm md:text-base text-zinc-200 hover:text-cyan-300 transition-colors";

export default function ContactSection() {
  return (
    <section className="section pt-0" id="contact">
      <div className="glow-card p-10 text-center">
        <h2 className="section-title mb-4">Contact</h2>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-8">
          새로운 기술과 더 나은 시스템 구조를 고민하며, AI·AX 시대에 맞는 엔터프라이즈 엔지니어로 성장하고 있습니다.
        </p>
        <div className="mt-8 flex justify-center items-center flex-wrap text-zinc-500">
          <a href="https://github.com/JJSSONG" target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
          <span aria-hidden className="px-1 text-zinc-500">|</span>
          <a href="/resume.pdf" download className={linkClass}>
            Resume
          </a>
          <span aria-hidden className="px-1 text-zinc-500">|</span>
          <a href="mailto:sotrjs@gmail.com" className="px-2 py-1 text-sm md:text-base text-cyan-300 hover:text-cyan-200 transition-colors font-medium">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
