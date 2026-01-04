import type { QuizQuestion, WizardState, TopicSlug } from "./types";
import { TOPICS, QUIZ, TOTAL_STEPS } from "./constants";

export function percent(stepIndex: number) {
  // stepIndex: 0..3
  return Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100);
}

export function computeQuizScore(
  questions: QuizQuestion[],
  answers: Record<string, string>
) {
  let correct = 0;
  for (const q of questions) {
    const picked = answers[q.id];
    if (!picked) continue;
    const choice = q.choices.find((c) => c.id === picked);
    if (choice?.isCorrect) correct += 1;
  }
  return {
    correct,
    total: questions.length,
    pct: questions.length ? Math.round((correct / questions.length) * 100) : 0,
  };
}

export function computeTopicScores(state: WizardState) {
  // 아주 단순한 초기 버전: selfRating(0~3)을 25점 단위로, 퀴즈는 토픽별 1문항 기준으로 보정
  const base: Record<TopicSlug, number> = {} as Record<TopicSlug, number>;
  for (const t of TOPICS) {
    base[t.slug] = (state.selfRatings[t.slug] ?? 0) * 25; // 0,25,50,75
  }

  // 퀴즈 보정(정답이면 +10)
  for (const q of QUIZ) {
    const picked = state.quizAnswers[q.id];
    if (!picked) continue;
    const isCorrect = q.choices.find((c) => c.id === picked)?.isCorrect;
    if (isCorrect) base[q.topic] = Math.min(100, (base[q.topic] ?? 0) + 10);
  }

  return base;
}
