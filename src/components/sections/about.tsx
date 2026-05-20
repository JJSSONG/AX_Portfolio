export default function AboutSection() {
  return (
    <section className="section">
      <h2 className="section-title mb-8">About Me</h2>
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
        <div className="space-y-6 text-zinc-300 text-lg leading-8 break-keep">
          <p>
            엔터프라이즈 환경에서 구축·운영·유지보수를 반복하며, “잘 만드는 것”만큼 “안정적으로 운영되는 것”의 가치가 크다는 것을 체감했습니다.
            그래서 저는 기능 추가보다 운영 안정성과 유지보수성을 우선순위로 두고 시스템을 설계합니다.
          </p>
          <p>
            AI를 공부하게 된 이유도 화려한 데모를 만들기 위해서가 아니라, 반복되는 실무 업무를 줄여 팀의 집중력을 높이기 위해서입니다.
            장애 대응 이력 정리, 정형 보고 자동화, 운영 데이터 점검처럼 시간이 많이 드는 작업에 AI를 결합하면 생산성이 실질적으로 개선된다고 판단했습니다.
          </p>
          <p>
            결국 제가 지향하는 방향은 “안정적인 엔터프라이즈 시스템 위에, 검증 가능한 자동화를 점진적으로 얹는 것”입니다.
            그 과정에서 비즈니스 흐름을 이해하고, 기술을 현실적인 방식으로 연결하는 엔지니어가 되고자 합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {["Enterprise", "Operation First", "Automation", "Productivity", "Legacy", "Optimization"].map((tag) => (
            <div key={tag} className="glow-card p-4 text-center text-zinc-200 text-sm md:text-base">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
