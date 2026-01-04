import { useMemo, useState } from "react";
import { Button } from "@/components/common/Button";
import { Progress } from "@/components/common/Progress";
import type { WizardState, TopicSlug, SelfRating } from "./onboarding/types";
import { TOPICS, TOTAL_STEPS } from "./onboarding/constants";
import { percent } from "./onboarding/utils";
import { Step1GoalExperience } from "./onboarding/Step1GoalExperience";
import { Step2SelfRating } from "./onboarding/Step2SelfRating";
import { Step3Quiz } from "./onboarding/Step3Quiz";
import { Step4Report } from "./onboarding/Step4Report";

export default function OnboardingWizardPage() {
  const [step, setStep] = useState(0); // 0..3
  const [showFeedback, setShowFeedback] = useState(true);

  const [state, setState] = useState<WizardState>(() => {
    const initialRatings = {} as Record<TopicSlug, SelfRating>;
    for (const t of TOPICS) initialRatings[t.slug] = 0;

    return {
      goal: null,
      experiences: [],
      selfRatings: initialRatings,
      quizAnswers: {},
    };
  });

  const progress = percent(step);

  const canNext = useMemo(() => {
    if (step === 0) return state.goal !== null; // 목표는 필수
    return true;
  }, [step, state.goal]);

  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  const goPrev = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="relative space-y-6">
      {/* Glassmorphism + mysterious gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-transparent to-accent/20 blur-3xl" />

      {/* 상단 헤더 카드 */}
      <section className="glass p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-white/70 text-sm">실력 진단</p>
            <h1 className="text-2xl font-bold">AI Skill Check</h1>
            <p className="text-white/70 text-sm mt-1">
              Google Form처럼 단계별로 진행해요
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => setStep(0)}>
              처음으로
            </Button>
            <Button variant="ghost" onClick={() => alert("임시: 나가기")}>
              나가기
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <Progress
            label={`진행률 (${step + 1}/${TOTAL_STEPS})`}
            value={progress}
          />
        </div>
      </section>

      {/* Step content */}
      {step === 0 && (
        <Step1GoalExperience
          goal={state.goal}
          experiences={state.experiences}
          onChangeGoal={(g) => setState((prev) => ({ ...prev, goal: g }))}
          onToggleExp={(k) =>
            setState((prev) => ({
              ...prev,
              experiences: prev.experiences.includes(k)
                ? prev.experiences.filter((x) => x !== k)
                : [...prev.experiences, k],
            }))
          }
        />
      )}

      {step === 1 && (
        <Step2SelfRating
          selfRatings={state.selfRatings}
          onChangeRating={(slug, v) =>
            setState((prev) => ({
              ...prev,
              selfRatings: { ...prev.selfRatings, [slug]: v },
            }))
          }
        />
      )}

      {step === 2 && (
        <Step3Quiz
          answers={state.quizAnswers}
          onPick={(qid, cid) =>
            setState((prev) => ({
              ...prev,
              quizAnswers: { ...prev.quizAnswers, [qid]: cid },
            }))
          }
          showFeedback={showFeedback}
          onToggleFeedback={setShowFeedback}
        />
      )}

      {step === 3 && <Step4Report state={state} />}

      {/* bottom nav (구글폼 느낌) */}
      <section className="glass p-4 flex items-center justify-between border border-white/10">
        <Button variant="ghost" onClick={goPrev} disabled={step === 0}>
          이전
        </Button>

        <div className="text-white/60 text-sm">
          {step === 0 && "목표/경험"}
          {step === 1 && "자가진단"}
          {step === 2 && "퀴즈"}
          {step === 3 && "결과"}
        </div>

        {step < TOTAL_STEPS - 1 ? (
          <Button variant="neon" onClick={goNext} disabled={!canNext}>
            다음
          </Button>
        ) : (
          <Button variant="neon" onClick={() => alert("완료!")}>
            완료
          </Button>
        )}
      </section>
    </div>
  );
}
