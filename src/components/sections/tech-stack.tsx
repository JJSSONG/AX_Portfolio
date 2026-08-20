const groups = {
  Backend: ["Java", "Spring", "Spring Boot", "REST API", "Python"],
  Frontend: ["Vue.js", "JavaScript", "HTML5", "CSS3", "DevExtreme"],
  Database: ["Oracle", "MSSQL", "MariaDB", "MySQL", "PostgreSQL"],
  "AI / AX": ["OpenAI API", "MCP", "Copilot", "Claude Code", "Workflow Automation"]
};

export default function TechStackSection() {
  return (
    <section className="section">
      <h2 className="section-title mb-8">Tech Stack</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {Object.entries(groups).map(([group, values]) => (
          <article key={group} className="glow-card p-6 md:p-7">
            <h3 className="font-semibold text-lg mb-4 tracking-tight text-white">{group}</h3>

            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3 text-zinc-200 leading-6">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-300/90" aria-hidden />
                  <span className="text-sm md:text-[15px] tracking-[0.01em]">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 h-px bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}
