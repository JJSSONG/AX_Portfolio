const careers = [
  ["SQI SOFT · Development Manager", "2024.03 — 2026.05", "KT Group MA System ITO · Operation & Optimization"],
  ["NTSYS · Full Stack Developer", "2015.12 — 2023.05", "SI/SM · eGovFramework Enterprise Projects"]
] as const;

export default function CareerSection() {
  return (
    <section className="section">
      <h2 className="section-title mb-8">Career Timeline</h2>
      <div className="space-y-4 border-l border-white/15 pl-6">
        {careers.map(([role, period, detail]) => (
          <article key={role} className="glow-card p-6 relative">
            <span className="absolute -left-[33px] top-8 w-3 h-3 rounded-full bg-cyan-300" />
            <h3 className="text-xl font-semibold">{role}</h3>
            <p className="text-sm text-zinc-400 mt-1">{period}</p>
            <p className="text-zinc-300 mt-3">{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
