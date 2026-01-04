import { useMemo } from "react";
import { Button } from "@/components/common/Button";
import type { WizardState } from "./types";
import { TOPICS, QUIZ } from "./constants";
import { computeQuizScore, computeTopicScores } from "./utils";

type Step4Props = {
  state: WizardState;
};

export function Step4Report({ state }: Step4Props) {
  const quizScore = useMemo(
    () => computeQuizScore(QUIZ, state.quizAnswers),
    [state.quizAnswers]
  );
  const topicScores = useMemo(() => computeTopicScores(state), [state]);

  // 간단 Top5 추천(초안): 점수 낮은 토픽 우선 추천
  const topNeeds = useMemo(() => {
    const arr = TOPICS.map((t) => ({ ...t, score: topicScores[t.slug] ?? 0 }));
    arr.sort((a, b) => a.score - b.score);
    return arr.slice(0, 5);
  }, [topicScores]);

  return (
    <div className="space-y-6">
      <section className="glass p-6">
        <p className="text-white/70 text-sm">결과 리포트</p>
        <h2 className="text-2xl font-bold mt-1">진단 결과</h2>
        <p className="text-white/70 text-sm mt-2">
          퀴즈 점수:{" "}
          <span className="text-accent font-semibold">
            {quizScore.correct}/{quizScore.total}
          </span>{" "}
          ({quizScore.pct}%)
        </p>
      </section>

      {/* 토픽 점수 카드 */}
      <section className="grid gap-4 md:grid-cols-3">
        {TOPICS.map((t) => {
          const s = topicScores[t.slug] ?? 0;
          return (
            <div key={t.slug} className="glass p-5 border border-white/10">
              <p className="text-white/70 text-sm">{t.korName}</p>
              <p className="mt-2 text-3xl font-semibold text-accent">{s}</p>
              <p className="text-white/60 text-xs mt-1">{t.name}</p>
            </div>
          );
        })}
      </section>

      {/* 다음 추천 */}
      <section className="glass p-6">
        <h3 className="font-semibold">다음에 뭘 하면 좋아요 (Top 5)</h3>
        <div className="mt-4 grid gap-2">
          {topNeeds.map((t) => (
            <div
              key={t.slug}
              className="glass px-4 py-3 border border-white/10 flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{t.korName}</p>
                <p className="text-white/60 text-sm">{t.summary}</p>
              </div>
              <span className="text-white/70 text-sm">점수 {t.score}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <Button
            variant="neon"
            onClick={() => alert("2주 플랜 생성(다음 단계: API 연결)")}
          >
            2주 플랜 생성
          </Button>
          <Button
            variant="ghost"
            onClick={() => alert("결과 저장(다음 단계: DB 저장)")}
          >
            결과 저장
          </Button>
        </div>
      </section>
    </div>
  );
}
