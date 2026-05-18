import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";

type Props = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen">
      <section className="section">
        <Link href="/#projects" className="text-sm text-cyan-300 hover:underline">
          ← 프로젝트 목록으로
        </Link>
        <div className="glow-card p-10 mt-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-4xl font-semibold">{project.name}</h1>
            <span className="text-zinc-400">{project.period}</span>
          </div>
          <p className="mt-6 text-zinc-200 text-lg">{project.summary}</p>
          <p className="mt-4 text-zinc-300 leading-8">{project.description}</p>

          <h2 className="mt-10 text-2xl font-semibold">Key Achievements</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            {project.achievements.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-full border border-white/15 text-sm text-zinc-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
