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
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(groups).map(([group, values]) => (
          <article key={group} className="glow-card p-6">
            <h3 className="font-semibold text-lg mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value} className="px-3 py-1.5 rounded-full border border-white/15 text-sm text-zinc-200">{value}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
