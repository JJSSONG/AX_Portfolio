const projects = [
  ["KT Group MA System", "2024.03 — 2026.05", "조회 50초 → 3초, 업무시간 80% 단축"],
  ["OURHOME Smart Factory", "2023.01 — 2023.05", "산업용 단말 최적화 반응형 UI 구축"],
  ["Direct Selling Mutual Aid Association", "2021 — 2023", "레거시 전환 및 운영 안정성 개선"],
  ["Free Home Collection Service", "2021 — 2022", "공공 예약/통계 프로세스 구축"]
] as const;

export default function ProjectsSection() {
  return (
    <section className="section">
      <h2 className="section-title mb-8">Featured Projects</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {projects.map(([name, period, result], i) => (
          <article key={name} className={`glow-card p-8 ${i === 0 ? "lg:col-span-2" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <span className="text-sm text-zinc-400">{period}</span>
            </div>
            <p className="text-zinc-300 mt-4">{result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
