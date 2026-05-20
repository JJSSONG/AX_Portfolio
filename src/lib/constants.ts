export const snapshotMetrics = [
  { value: "10+", label: "Years of Experience" },
  { value: "SI / SM / ITO", label: "Enterprise Experience" },
  { value: "Full Stack", label: "Development & Operation" },
  { value: "AI & AX", label: "Workflow Research" }
];

export const projects = [
  {
    slug: "enterprise-ax-automation-pipeline",
    name: "Enterprise AX Automation Pipeline",
    period: "2025.09 — 2026.05",
    summary: "KT 운영 업무의 반복 모니터링·정산 보조 작업을 자동화한 AX 내부 도구 프로젝트",
    description:
      "LLM API, MCP 기반 도구 연동, Workflow Automation을 결합해 운영 이슈 요약·정산 데이터 검증·반복 리포트 생성을 자동화했습니다.",
    star: {
      situation: "운영 현장에서 모니터링/정산 보조 업무가 수작업 중심이라 리드타임과 편차가 지속적으로 발생했습니다.",
      task: "반복 업무를 자동화하면서도 기존 운영 안정성 기준(검증 가능성, 추적성, 예외 대응)을 유지하는 내부 AX 도구를 설계해야 했습니다.",
      action: "OpenAI API 기반 요약/분석 모듈, MCP 기반 사내 도구 컨텍스트 연결, 체크리스트형 Workflow Automation 파이프라인을 구성하고 단계별 수동 검증 포인트를 포함했습니다.",
      result: "반복 운영 업무 리드타임 평균 60% 단축, 이슈 1차 분석 속도 향상, 정산 검증 휴먼에러 감소, AI 어시스턴트 기반 개발 생산성 파이프라인 정착이라는 성과를 확보했습니다."
    },
    achievements: [
      "반복 운영 업무 리드타임 평균 60% 단축",
      "운영 이슈 1차 분석/요약 자동화로 대응 속도 향상",
      "정산 검증 체크리스트 자동 실행으로 휴먼에러 감소",
      "AI 어시스턴트 기반 개발 생산성 파이프라인 구축"
    ],
    stack: ["OpenAI API", "MCP", "Python", "Workflow Automation", "Prompt Engineering", "REST API"]
  },
  {
    slug: "kt-group-ma-system",
    name: "KT Group MA System",
    period: "2024.03 — 2026.05",
    summary: "계약·정산·자산관리 기반 엔터프라이즈 시스템 운영 및 고도화 프로젝트",
    description:
      "REST API 및 PL/SQL 기반 비즈니스 로직 설계, 업무 프로세스 자동화, 대용량 데이터 성능 최적화를 수행했습니다.",
    achievements: [
      "조회 성능 50초 → 3초 개선",
      "계약 생성 업무시간 80% 단축",
      "연간 300시간 이상 공수 절감",
      "운영 비용 및 라이선스 비용 절감"
    ],
    stack: ["Java", "Spring", "MSSQL", "PL/SQL", "DevExtreme", "REST API", "CI/CD"]
  },
  {
    slug: "ourhome-smart-factory",
    name: "OURHOME Smart Factory",
    period: "2023.01 — 2023.05",
    summary: "산업용 단말 환경 기반 스마트공장 모바일 웹 구축 프로젝트",
    description:
      "PDA, POP, PAD 환경에 최적화된 반응형 UI를 구축하고, 생산 공정 흐름 기반의 시스템 개발을 수행했습니다.",
    achievements: ["산업용 단말 UI 최적화", "WebView 기반 환경 대응", "반응형 모바일 웹 구축", "식품 공정 도메인 경험"],
    stack: ["Vue.js", "Spring", "AWS", "Oracle", "MariaDB", "Jenkins"]
  },
  {
    slug: "direct-selling-mutual-aid-association",
    name: "Direct Selling Mutual Aid Association",
    period: "2021 — 2023",
    summary: "엔터프라이즈 레거시 시스템 리뉴얼 및 운영 프로젝트",
    description:
      "Struts 및 PHP 기반 시스템을 eGovFramework 기반 구조로 전환하며 운영 안정성과 유지보수성을 개선했습니다.",
    achievements: ["Struts → eGovFramework 전환", "PHP → Java 리뉴얼", "공제/정산 도메인 경험", "장기 운영 유지보수 경험"],
    stack: ["Java", "Spring", "eGovFramework", "Oracle", "JSP", "PHP"]
  },
  {
    slug: "free-home-collection-service",
    name: "Free Home Collection Service",
    period: "2021 — 2022",
    summary: "공공 기반 방문수거 예약 시스템 구축 및 운영 프로젝트",
    description:
      "ASP 기반 시스템을 eGovFramework 기반 반응형 웹으로 리뉴얼하고, 콜센터 및 기사앱 연동 기반 운영 시스템을 구축했습니다.",
    achievements: ["ASP → Java 리뉴얼", "공공 서비스 운영 경험", "기사앱 인터페이스 연동", "통계 및 예약 프로세스 구축"],
    stack: ["Java", "Spring", "eGovFramework", "MariaDB", "JSP", "ASP"]
  }
] as const;
