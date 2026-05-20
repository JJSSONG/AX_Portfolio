const groups = {
  Backend: [
    "Java / Spring Boot — 대용량 엔터프라이즈 아키텍처 설계 및 배치·정산 모듈 고도화",
    "REST API — 사내/외부 시스템 연동 인터페이스 설계 및 운영",
    "Python — 운영 자동화 스크립트 및 AX 워크플로우 실험"
  ],
  Frontend: [
    "Vue.js / JavaScript — 업무 화면 중심의 반응형 UI 구축",
    "HTML5 / CSS3 — 운영성과 가독성을 고려한 웹 표준 마크업",
    "DevExtreme — 엔터프라이즈 데이터 그리드/폼 고도화"
  ],
  Database: [
    "Oracle / MSSQL — 정산·계약 도메인 데이터 모델링 및 튜닝",
    "MariaDB / MySQL — 서비스 운영 데이터 관리",
    "PostgreSQL — 신규 기능 실험 및 확장성 검토"
  ],
  "AI / AX": [
    "OpenAI API — 업무 요약/분석 자동화 PoC 및 내부 도구 적용",
    "MCP (Model Context Protocol) — 커스텀 개발 환경 및 도구 연결",
    "Claude Code / Copilot — 개발 생산성 향상 파이프라인 구축",
    "Workflow Automation — 반복 운영 업무 자동화 시나리오 설계"
  ]
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
                <li key={value} className="flex items-start gap-3 text-zinc-200 leading-6">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-300/90 mt-2" aria-hidden />
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
