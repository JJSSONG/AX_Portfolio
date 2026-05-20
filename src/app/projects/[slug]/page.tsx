import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen">
      <section className="section">
        <Link href="/#projects" className="text-sm text-cyan-300 hover:underline underline-offset-4">
          ← 프로젝트 목록으로
        </Link>
        <div className="glow-card p-8 md:p-10 mt-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{project.name}</h1>
            <span className="text-zinc-400 text-sm md:text-base">{project.period}</span>
          </div>

          <p className="mt-6 text-zinc-200 text-lg leading-8 break-keep">{project.summary}</p>
          <p className="mt-4 text-zinc-300 leading-8 break-keep">{project.description}</p>

          {"star" in project && project.star && (
            <>
              <h2 className="mt-10 text-2xl font-semibold tracking-tight">STAR Breakdown</h2>
              <div className="mt-4 grid gap-3">
                <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">Situation</p>
                  <p className="mt-2 text-zinc-300 leading-7 break-keep">{project.star.situation}</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">Task</p>
                  <p className="mt-2 text-zinc-300 leading-7 break-keep">{project.star.task}</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">Action</p>
                  <p className="mt-2 text-zinc-300 leading-7 break-keep">{project.star.action}</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-cyan-300/5 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">Result</p>
                  <p className="mt-2 text-zinc-200 leading-7 break-keep">{project.star.result}</p>
                </article>
              </div>
            </>
          )}

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Key Achievements</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 leading-7 list-disc list-inside break-keep">
            {project.achievements.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap items-center text-sm md:text-base text-zinc-200 leading-8">
            {project.stack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center">
                {idx > 0 && (
                  <span aria-hidden className="px-2 md:px-3 text-zinc-500">
                    /
                  </span>
                )}
                <span className="whitespace-nowrap">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
