import { useState } from "react";

import { Button } from "@/components/common/Button";
import { Modal } from "@/components/common/Modal";
import { Progress } from "@/components/common/Progress";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative space-y-6">
      {/* Glassmorphism + mysterious gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-transparent to-accent/20 blur-3xl" />

      {/* 학습 요약 카드(글래스) */}
      <section className="glass p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-white/70 text-sm">오늘의 학습</p>
            <h1 className="text-2xl font-bold">AIgo Dashboard</h1>
            <p className="text-white/70 text-sm mt-1">Deep Navy + Neon Gradient UI (Tailwind Theme)</p>
          </div>

          {/* 네온 그라데이션 버튼 */}
          <div className="flex gap-2">
            <Button variant="neon" onClick={() => setOpen(true)}>
              학습 시작
            </Button>
            <Button variant="ghost" onClick={() => alert("preview")}>결과 확인</Button>
          </div>
        </div>

        {/* 진행 상황(Accent) */}
        <div className="mt-6">
          <Progress label="진행률" value={42} />
        </div>
      </section>

      {/* 메인 피드: 카드 Grid */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="glass p-5">
          <p className="text-white/70 text-sm">정답률</p>
          <p className="mt-2 text-3xl font-semibold text-accent">87%</p>
          <p className="text-white/60 text-xs mt-1">Accent(#00CEC9)</p>
        </div>

        <div className="glass p-5">
          <p className="text-white/70 text-sm">오답</p>
          <p className="mt-2 text-3xl font-semibold text-danger">3</p>
          <p className="text-white/60 text-xs mt-1">Danger(#FF7675)</p>
        </div>

        <div className="glass p-5">
          <p className="text-white/70 text-sm">오늘 목표</p>
          <p className="mt-2 text-3xl font-semibold text-secondary">10</p>
          <p className="text-white/60 text-xs mt-1">Secondary(#A29BFE)</p>
        </div>
      </section>

      {/* 알고리즘/코드 예시(모노 폰트) */}
      <section className="glass p-6">
        <h2 className="font-semibold">AI 알고리즘/코드 예시</h2>
        <p className="text-white/70 text-sm mt-1">영문/코드 폰트: JetBrains Mono</p>

        <pre className="mt-4 text-xs leading-5 bg-black/20 rounded-xl p-4 overflow-auto">
{`// BFS (Queue)
const bfs = (start) => {
  const q = [start];
  const visited = new Set([start]);

  while (q.length) {
    const cur = q.shift();
    for (const nxt of graph[cur]) {
      if (visited.has(nxt)) continue;
      visited.add(nxt);
      q.push(nxt);
    }
  }
};`}
        </pre>
      </section>

      {/* 기능(feature) 섹션 예시 */}
      <section className="glass p-6">
        <h2 className="font-semibold">Auth Feature Example</h2>
        <div className="mt-4">
          <LoginForm />
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} title="학습 시작">
        <div className="space-y-3">
          <p className="text-white/80 text-sm">
            네온 버튼(Primary → Accent) + 글래스 카드 + 다크 배경으로 ‘AI의 신비로운 느낌’을 구현합니다.
          </p>
          <div className="flex gap-2">
            <Button variant="primary" onClick={() => alert("start")}>시작</Button>
            <Button variant="danger" onClick={() => setOpen(false)}>취소</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
