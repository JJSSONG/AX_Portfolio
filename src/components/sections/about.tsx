import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section">
      <h2 className="section-title mb-8">About Me</h2>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div>
          <p className="text-zinc-300 leading-8 text-lg">
            엔터프라이즈 환경에서 다양한 구축·운영·유지보수 프로젝트를 수행하며 실제 비즈니스 흐름과 운영 안정성을 고려한 시스템 개발 경험을
            쌓아왔습니다. 단순 기능 개발보다 유지보수성과 확장성을 중요하게 생각하며, 복잡한 업무 구조와 레거시 시스템을 이해하고 개선하는 과정에
            강점을 가지고 있습니다. 현재는 AI·AX 기술을 활용하여 업무 자동화와 개발 생산성을 확장하는 방향으로 역량을 넓혀가고 있습니다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
            {["Enterprise", "Public", "Commerce", "Smart Factory", "Legacy", "Optimization"].map((tag) => (
              <div key={tag} className="glow-card p-3 text-center text-zinc-200 text-sm md:text-base">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <aside className="glow-card p-5 md:p-6 sticky top-24">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/photo.jpg"
              alt="송정섭 프로필 사진"
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.18em] text-zinc-400 uppercase">Enterprise Engineer · AX Transition</p>
        </aside>
      </div>
    </section>
  );
}
