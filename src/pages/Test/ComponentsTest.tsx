import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Modal } from "@/components/common/Modal";
import { Progress } from "@/components/common/Progress";
import { ChatFab } from "@/components/common/ChatFab";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function ComponentsTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progressValue, setProgressValue] = useState(65);

  return (
    <div className="max-w-4xl space-y-8 pb-24">
      {/* 페이지 헤더 */}
      <section className="glass-strong p-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AIgo Components Showcase
        </h1>
        <p className="text-white/70 mt-2">
          AIgo 프로젝트에서 사용 가능한 모든 컴포넌트와 디자인 시스템을 확인할
          수 있습니다.
        </p>
      </section>

      {/* 1. Buttons */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">🎨 Button Components</h2>
          <p className="text-white/60 text-sm mt-1">
            6가지 버튼 스타일 (primary, secondary, accent, danger, ghost, neon)
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-white/80">Basic Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => alert("Primary clicked!")}>
              Primary Button
            </Button>
            <Button
              variant="secondary"
              onClick={() => alert("Secondary clicked!")}
            >
              Secondary Button
            </Button>
            <Button variant="accent" onClick={() => alert("Accent clicked!")}>
              Accent Button
            </Button>
            <Button variant="danger" onClick={() => alert("Danger clicked!")}>
              Danger Button
            </Button>
            <Button variant="ghost" onClick={() => alert("Ghost clicked!")}>
              Ghost Button
            </Button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-white/80">
            Neon Gradient Button
          </h3>
          <p className="text-white/50 text-xs mb-2">
            Gradient: #6C5CE7 → #00CEC9 with neon glow effect
          </p>
          <Button variant="neon" onClick={() => alert("Neon clicked!")}>
            🚀 학습 시작하기
          </Button>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-white/80">Disabled State</h3>
          <div className="flex gap-3">
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="neon" disabled>
              Disabled Neon
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Modal */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">📦 Modal Component</h2>
          <p className="text-white/60 text-sm mt-1">
            Glass effect 모달 with backdrop blur
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            모달 열기
          </Button>
        </div>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="모달 예시"
        >
          <p className="text-white/80">
            이것은 모달 컴포넌트입니다. 배경을 클릭하거나 닫기 버튼을 눌러 닫을
            수 있습니다.
          </p>
          <div className="mt-6 flex gap-2 justify-end">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              취소
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert("확인!");
                setIsModalOpen(false);
              }}
            >
              확인
            </Button>
          </div>
        </Modal>
      </section>

      {/* 3. Progress */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">📊 Progress Component</h2>
          <p className="text-white/60 text-sm mt-1">
            Accent color (#00CEC9) progress bar
          </p>
        </div>

        <div className="space-y-4">
          <Progress value={progressValue} label="학습 진행률" />

          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
            >
              -10%
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                setProgressValue(Math.min(100, progressValue + 10))
              }
            >
              +10%
            </Button>
            <Button variant="ghost" onClick={() => setProgressValue(0)}>
              Reset
            </Button>
          </div>

          <div className="space-y-3">
            <Progress value={25} label="초급" />
            <Progress value={50} label="중급" />
            <Progress value={75} label="고급" />
            <Progress value={100} label="완료" />
          </div>
        </div>
      </section>

      {/* 4. ChatFab */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">💬 ChatFab Component</h2>
          <p className="text-white/60 text-sm mt-1">
            Floating Action Button for AI Chat (우측 하단에 고정)
          </p>
        </div>

        <div className="bg-dark/50 rounded-lg p-6 border border-white/10 relative h-64">
          <p className="text-white/70 text-sm">
            화면 우측 하단을 확인해보세요. ChatFab이 표시됩니다.
          </p>
          <div className="absolute bottom-6 right-6">
            <ChatFab onClick={() => alert("AI 챗봇 열기!")} />
          </div>
        </div>
      </section>

      {/* 5. Glass Effects */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">✨ Glass Effects</h2>
          <p className="text-white/60 text-sm mt-1">
            Glassmorphism 디자인 스타일
          </p>
        </div>

        <div className="space-y-3">
          <div className="glass p-4 rounded-xl">
            <p className="font-semibold">기본 Glass (.glass)</p>
            <p className="text-white/60 text-sm mt-1">
              투명도: white/5, 테두리: white/10, backdrop-blur-md
            </p>
          </div>

          <div className="glass-strong p-4 rounded-xl">
            <p className="font-semibold">강조 Glass (.glass-strong)</p>
            <p className="text-white/60 text-sm mt-1">
              투명도: white/10, 테두리: white/20, backdrop-blur-lg (헤더/모달용)
            </p>
          </div>
        </div>
      </section>

      {/* 6. Color Palette */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">🎨 Color Palette</h2>
          <p className="text-white/60 text-sm mt-1">AIgo 디자인 시스템 컬러</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-primary p-4 rounded-xl">
            <p className="font-semibold">Primary</p>
            <p className="text-xs opacity-80">#6C5CE7</p>
          </div>
          <div className="bg-secondary p-4 rounded-xl">
            <p className="font-semibold text-dark">Secondary</p>
            <p className="text-xs text-dark/70">#A29BFE</p>
          </div>
          <div className="bg-accent p-4 rounded-xl">
            <p className="font-semibold text-dark">Accent</p>
            <p className="text-xs text-dark/70">#00CEC9</p>
          </div>
          <div className="bg-danger p-4 rounded-xl">
            <p className="font-semibold">Danger</p>
            <p className="text-xs opacity-80">#FF7675</p>
          </div>
          <div className="bg-dark p-4 rounded-xl border border-white/10">
            <p className="font-semibold">Dark (BG)</p>
            <p className="text-xs opacity-70">#1E1E2E</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-white/10">
            <p className="font-semibold">Surface</p>
            <p className="text-xs opacity-70">#2B2B3B</p>
          </div>
        </div>
      </section>

      {/* 7. Typography */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">📝 Typography</h2>
          <p className="text-white/60 text-sm mt-1">폰트 및 텍스트 스타일</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">Heading 1 (3xl, bold)</h3>
            <h4 className="text-2xl font-bold">Heading 2 (2xl, bold)</h4>
            <h5 className="text-xl font-semibold">Heading 3 (xl, semibold)</h5>
          </div>

          <div>
            <p className="text-base">Body Text (base) - Pretendard 폰트</p>
            <p className="text-sm text-white/70">Small Text (sm) - 보조 설명</p>
            <p className="text-xs text-white/60">Extra Small (xs) - 캡션</p>
          </div>

          <div className="font-mono bg-dark/50 p-4 rounded-lg border border-white/10">
            <code className="text-accent">const code = "JetBrains Mono";</code>
            <br />
            <code className="text-secondary">// 코드 블록용 고정폭 폰트</code>
          </div>
        </div>
      </section>

      {/* 8. Gradients */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">🌈 Gradient Styles</h2>
          <p className="text-white/60 text-sm mt-1">그라데이션 효과</p>
        </div>

        <div className="space-y-3">
          <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl">
            <p className="font-bold text-lg">Primary → Accent Gradient</p>
            <p className="text-sm opacity-90">from-primary to-accent</p>
          </div>

          <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-xl">
            <p className="font-bold text-lg">Secondary → Primary Gradient</p>
            <p className="text-sm opacity-90">from-secondary to-primary</p>
          </div>

          <button className="neon-cta w-full py-4 rounded-xl font-bold text-lg">
            Neon CTA Gradient (.neon-cta 클래스)
          </button>
        </div>
      </section>

      {/* 9. Auth Component */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">🔐 Auth Component</h2>
          <p className="text-white/60 text-sm mt-1">
            로그인 폼 컴포넌트 (실제 동작)
          </p>
        </div>

        <div className="max-w-md">
          <LoginForm />
        </div>
      </section>

      {/* 10. Utilities */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">🛠️ Utilities & Hooks</h2>
          <p className="text-white/60 text-sm mt-1">
            사용 가능한 유틸리티와 커스텀 훅
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="bg-dark/30 p-3 rounded-lg border border-white/10">
            <code className="text-accent">useDebounce(value, delay)</code>
            <p className="text-white/60 mt-1">값 변경 디바운싱 (기본 300ms)</p>
          </div>

          <div className="bg-dark/30 p-3 rounded-lg border border-white/10">
            <code className="text-accent">formatNumber(n)</code>
            <p className="text-white/60 mt-1">숫자 포맷팅 (한국어 로케일)</p>
          </div>

          <div className="bg-dark/30 p-3 rounded-lg border border-white/10">
            <code className="text-accent">useLogin()</code>
            <p className="text-white/60 mt-1">로그인 API 연동 React Query 훅</p>
          </div>

          <div className="bg-dark/30 p-3 rounded-lg border border-white/10">
            <code className="text-accent">useAppStore()</code>
            <p className="text-white/60 mt-1">전역 상태 관리 (Zustand)</p>
          </div>
        </div>
      </section>

      {/* 11. Design Tokens */}
      <section className="glass p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold">🎯 Design Tokens</h2>
          <p className="text-white/60 text-sm mt-1">Tailwind 커스텀 토큰</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="bg-dark/30 p-4 rounded-lg border border-white/10">
            <p className="font-semibold text-primary">Border Radius</p>
            <p className="text-white/60 mt-2">card: 16px (rounded-card)</p>
          </div>

          <div className="bg-dark/30 p-4 rounded-lg border border-white/10">
            <p className="font-semibold text-accent">Box Shadow</p>
            <p className="text-white/60 mt-2">
              neon: 0 0 24px rgba(108, 92, 231, 0.45)
            </p>
          </div>

          <div className="bg-dark/30 p-4 rounded-lg border border-white/10">
            <p className="font-semibold text-secondary">Font Family</p>
            <p className="text-white/60 mt-2">sans: Pretendard</p>
            <p className="text-white/60 font-mono">mono: JetBrains Mono</p>
          </div>

          <div className="bg-dark/30 p-4 rounded-lg border border-white/10">
            <p className="font-semibold text-danger">Theme Mode</p>
            <p className="text-white/60 mt-2">Dark/Light 테마 지원</p>
          </div>
        </div>
      </section>
    </div>
  );
}
