const expertise = [
  ["Enterprise Systems", "SI/SM/ITO 기반 실무 중심 엔터프라이즈 개발 경험"],
  ["Legacy Modernization", "Struts/PHP/ASP 시스템을 Spring/eGov 구조로 전환"],
  ["Performance Optimization", "대용량 조회 성능 개선 및 쿼리 튜닝"],
  ["Workflow Automation", "프로세스 자동화로 운영 효율/생산성 향상"],
  ["AI-assisted Engineering", "AI 기반 개발 생산성 확장 및 AX 연구"]
] as const;

export default function ExpertiseSection() {
  return (
    <section className="section">
      <h2 className="section-title mb-8">Core Expertise</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {expertise.map(([title, desc]) => (
          <article key={title} className="glow-card p-6">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-zinc-300 leading-7">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
