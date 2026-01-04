import { QUIZ } from "./constants";

type Step3Props = {
  answers: Record<string, string>;
  onPick: (questionId: string, choiceId: string) => void;
  showFeedback: boolean;
  onToggleFeedback: (v: boolean) => void;
};

export function Step3Quiz({
  answers,
  onPick,
  showFeedback,
  onToggleFeedback,
}: Step3Props) {
  return (
    <div className="space-y-6">
      <section className="glass p-6">
        <p className="text-white/70 text-sm">미니 퀴즈</p>
        <h2 className="text-2xl font-bold mt-1">
          짧게 체크해보자(총 {QUIZ.length}문항)
        </h2>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-white/70 text-sm">
            선택적으로 해설을 바로 볼 수 있어.
          </p>
          <label className="flex items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={showFeedback}
              onChange={(e) => onToggleFeedback(e.target.checked)}
            />
            즉시 피드백
          </label>
        </div>
      </section>

      <section className="space-y-4">
        {QUIZ.map((q, idx) => {
          const picked = answers[q.id];
          const pickedChoice = q.choices.find((c) => c.id === picked);
          const correctChoice = q.choices.find((c) => c.isCorrect);

          return (
            <div key={q.id} className="glass p-6 border border-white/10">
              <p className="text-white/60 text-sm">
                Q{idx + 1}.{" "}
                <span className="text-white/40">({q.topic.toUpperCase()})</span>
              </p>
              <p className="mt-2 font-semibold">{q.prompt}</p>

              <div className="mt-4 grid gap-2">
                {q.choices.map((c) => {
                  const active = picked === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => onPick(q.id, c.id)}
                      className={[
                        "glass px-4 py-3 text-left border transition",
                        active
                          ? "border-accent/60"
                          : "border-white/10 hover:border-white/20",
                      ].join(" ")}
                    >
                      {c.text}
                    </button>
                  );
                })}
              </div>

              {showFeedback && pickedChoice && (
                <div className="mt-4 text-sm">
                  <p
                    className={
                      pickedChoice.isCorrect ? "text-accent" : "text-danger"
                    }
                  >
                    {pickedChoice.isCorrect ? "정답 ✅" : "오답 ❌"}
                  </p>
                  {!pickedChoice.isCorrect && correctChoice && (
                    <p className="text-white/70 mt-1">
                      정답: {correctChoice.text}
                    </p>
                  )}
                  <p className="text-white/70 mt-2">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
