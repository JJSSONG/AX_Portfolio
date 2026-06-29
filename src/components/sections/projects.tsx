import Link from "next/link";
import { projects } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title mb-8">Featured Projects</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <article key={project.slug} className={`glow-card p-8 ${i === 0 ? "lg:col-span-2" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <span className="text-sm text-zinc-400">{project.period}</span>
            </div>
            <p className="text-zinc-300 mt-4">{project.summary}</p>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-sm text-zinc-400 line-clamp-1">{project.achievements[0]}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-300 text-sm"
              >
                상세 보기
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
