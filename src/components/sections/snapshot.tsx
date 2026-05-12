import { snapshotMetrics } from "@/lib/constants";

export default function SnapshotSection() {
  return (
    <section className="section pt-4">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {snapshotMetrics.map((metric) => (
          <article key={metric.label} className="glow-card p-6">
            <p className="text-3xl font-semibold">{metric.value}</p>
            <p className="text-zinc-300 mt-2 text-lg">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
