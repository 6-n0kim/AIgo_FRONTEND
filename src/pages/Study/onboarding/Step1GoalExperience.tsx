import type { Goal, ExperienceKey } from "./types";
import { GOALS, EXPERIENCES } from "./constants";

type Step1Props = {
  goal: Goal | null;
  experiences: ExperienceKey[];
  onChangeGoal: (g: Goal) => void;
  onToggleExp: (k: ExperienceKey) => void;
};

export function Step1GoalExperience({
  goal,
  experiences,
  onChangeGoal,
  onToggleExp,
}: Step1Props) {
  return (
    <div className="space-y-6">
      <section className="glass p-6">
        <p className="text-white/70 text-sm">진단 시작</p>
        <h2 className="text-2xl font-bold mt-1">목표를 선택해줘</h2>
        <p className="text-white/70 text-sm mt-2">
          결과 리포트/추천 루트가 목표에 맞게 최적화돼.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {GOALS.map((g) => {
            const active = goal === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => onChangeGoal(g.id)}
                className={[
                  "glass p-4 text-left transition border",
                  active
                    ? "border-accent/60"
                    : "border-white/10 hover:border-white/20",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{g.label}</p>
                    <p className="text-white/70 text-sm mt-1">{g.desc}</p>
                  </div>
                  <div
                    className={[
                      "h-4 w-4 rounded-full border",
                      active ? "border-accent bg-accent/30" : "border-white/30",
                    ].join(" ")}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="glass p-6">
        <p className="text-white/70 text-sm">사용 경험</p>
        <h3 className="text-lg font-semibold mt-1">해본 것들을 체크해줘</h3>

        <div className="mt-4 grid gap-2">
          {EXPERIENCES.map((item) => {
            const checked = experiences.includes(item.key);
            return (
              <label
                key={item.key}
                className="flex items-center gap-3 glass px-4 py-3 border border-white/10"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[var(--accent)]"
                  checked={checked}
                  onChange={() => onToggleExp(item.key)}
                />
                <span className="text-white/90">{item.label}</span>
              </label>
            );
          })}
        </div>
      </section>
    </div>
  );
}
