const linkClass = "inline-flex items-center px-3 py-1.5 text-sm md:text-base text-zinc-200 hover:text-cyan-300 transition-colors";

export default function ContactSection() {
  return (
    <section className="section pt-0" id="contact">
      <div className="glow-card p-10 text-center">
        <h2 className="section-title mb-4">Contact</h2>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-8">
          새로운 기술과 더 나은 시스템 구조를 고민하며, AI·AX 시대에 맞는 엔터프라이즈 엔지니어로 성장하고 있습니다.
        </p>

        <nav className="mt-8" aria-label="Contact links">
          <ul className="flex justify-center items-center flex-nowrap whitespace-nowrap text-zinc-500">
            <li className="inline-flex items-center">
              <a href="https://github.com/JJSSONG" target="_blank" rel="noreferrer" className={linkClass}>
                GitHub
              </a>
              <span aria-hidden className="mx-1.5 text-zinc-500">|</span>
            </li>
            <li className="inline-flex items-center">
              <a href="/resume.pdf" download className={linkClass}>
                Resume
              </a>
              <span aria-hidden className="mx-1.5 text-zinc-500">|</span>
            </li>
            <li className="inline-flex items-center">
              <a
                href="mailto:sotrjs@gmail.com"
                className="inline-flex items-center px-3 py-1.5 text-sm md:text-base text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
