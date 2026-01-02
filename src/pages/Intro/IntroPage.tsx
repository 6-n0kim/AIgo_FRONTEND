import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/common/Button";
import { Progress } from "@/components/common/Progress";

export default function IntroPage() {
  const navigate = useNavigate();

  // 데모 수치(나중에 API/스토어로 교체)
  const stats = useMemo(
    () => ({
      accuracy: 87,
      wrong: 3,
      progress: 42,
      goal: 10,
    }),
    [],
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Backdrop: Glass + Mysterious Neon Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-transparent to-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-6rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-sm font-semibold">AIgo</p>
              <p className="text-xs text-white/60">Deep Navy + Neon Gradient</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              로그인
            </Button>
            <Button variant="neon" onClick={() => navigate("/home")}>
              무료로 시작
            </Button>
          </nav>
        </header>

        <main className="mt-10 space-y-14">
          {/* Hero */}
          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left: Copy + CTA */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                <span className="h-2 w-2 rounded-full bg-accent/80" />
                오늘의 학습을 “자동 루틴”으로
              </div>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,206,201,0.18)]">
                  AIgo
                </span>{" "}
                Dashboard로
                <br />
                약점을 빠르게 잡아내세요
              </h1>

              <p className="text-white/70">
                목표 설정 → 문제 생성 → 약점 피드백 → 결과 리포트까지.
                <br className="hidden sm:block" />
                글래스 + 네온 UI로 몰입감 있게 학습을 시작합니다.
              </p>

              <div className="flex flex-wrap gap-2">
                <Button variant="neon" onClick={() => navigate("/home")}>
                  무료로 시작
                </Button>
                <Button variant="ghost" onClick={() => navigate("/demo")}>
                  데모 보기
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-white/60">
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  ✅ 3분 온보딩
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  🔒 로그인 없이 데모 가능
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  📈 리포트 자동 생성
                </span>
              </div>
            </div>

            {/* Right: Dashboard Preview */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 bg-gradient-to-br from-primary/30 via-transparent to-accent/25 blur-2xl" />
              <DashboardPreview stats={stats} />
            </div>
          </section>

          {/* Feature 3 Cards */}
          <section className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold">핵심 가치</h2>
              <p className="text-sm text-white/60">Glass Grid + Neon Accent</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <FeatureCard
                title="AI가 약점을 잡아줌"
                desc="오답 패턴을 자동으로 묶고, 다음 학습 우선순위를 제안합니다."
                badge="Weakness Focus"
              />
              <FeatureCard
                title="하루 목표 루틴"
                desc="오늘 목표량을 설정하고 진행률을 시각적으로 관리합니다."
                badge="Daily Routine"
              />
              <FeatureCard
                title="결과 리포트"
                desc="정답률·오답·소요시간을 기반으로 요약 리포트를 제공합니다."
                badge="Report"
              />
            </div>
          </section>

          {/* 3 Step Onboarding */}
          <section className="glass p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">3 Step 온보딩</h2>
                <p className="text-sm text-white/60 mt-1">
                  목표만 정하면 나머지는 AI가 흐름을 만들어줍니다.
                </p>
              </div>

              <Button variant="neon" onClick={() => navigate("/onboarding")}>
                지금 시작
              </Button>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <StepPill n={1} title="목표 설정" desc="분야/난이도/목표량" />
              <div className="hidden sm:block h-px flex-1 bg-white/10" />
              <StepPill n={2} title="학습" desc="문제 풀이 + 약점 피드백" />
              <div className="hidden sm:block h-px flex-1 bg-white/10" />
              <StepPill n={3} title="리포트" desc="요약 + 다음 계획 추천" />
            </div>
          </section>
        </main>

        <footer className="mt-14 pb-8 text-xs text-white/50">
          © {new Date().getFullYear()} AIgo · Glassmorphism + Neon UI
        </footer>
      </div>
    </div>
  );
}

/* ---------- Sub Components ---------- */

function LogoMark() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />
      <div className="relative h-6 w-6 rounded-xl bg-gradient-to-br from-primary to-accent" />
    </div>
  );
}

function DashboardPreview({
  stats,
}: {
  stats: { accuracy: number; wrong: number; progress: number; goal: number };
}) {
  return (
    <section className="glass p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm">대시보드 미리보기</p>
          <p className="mt-1 text-lg font-semibold">오늘의 학습 요약</p>
        </div>
        <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
          LIVE PREVIEW
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <MiniStat
          label="정답률"
          value={`${stats.accuracy}%`}
          valueClassName="text-accent"
        />
        <MiniStat
          label="오답"
          value={`${stats.wrong}`}
          valueClassName="text-danger"
        />
        <MiniStat
          label="오늘 목표"
          value={`${stats.goal}`}
          valueClassName="text-secondary"
        />
      </div>

      <div className="mt-6">
        <Progress label="진행률" value={stats.progress} />
        <p className="mt-2 text-xs text-white/60">
          목표 달성까지 {Math.max(0, 100 - stats.progress)}% 남았어요
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <Button variant="neon" onClick={() => alert("preview start")}>
          학습 시작
        </Button>
        <Button variant="ghost" onClick={() => alert("preview results")}>
          결과 확인
        </Button>
      </div>
    </section>
  );
}

function MiniStat({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <p className="text-white/70 text-xs">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${valueClassName ?? ""}`}>
        {value}
      </p>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  badge,
}: {
  title: string;
  desc: string;
  badge: string;
}) {
  return (
    <div className="glass p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/60 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
          {badge}
        </p>
        <span className="h-2 w-2 rounded-full bg-accent/70" />
      </div>

      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepPill({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:w-[32%]">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/40 to-accent/25 ring-1 ring-white/10">
        <span className="font-semibold">{n}</span>
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-white/70 mt-1">{desc}</p>
      </div>
    </div>
  );
}
