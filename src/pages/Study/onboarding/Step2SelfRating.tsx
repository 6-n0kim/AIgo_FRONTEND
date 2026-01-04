import type { TopicSlug, SelfRating } from "./types";
import { TOPICS } from "./constants";

type Step2Props = {
  selfRatings: Record<TopicSlug, SelfRating>;
  onChangeRating: (slug: TopicSlug, v: SelfRating) => void;
};

export function Step2SelfRating({ selfRatings, onChangeRating }: Step2Props) {
  const scale: { v: SelfRating; label: string }[] = [
    { v: 0, label: "0 · 모름" },
    { v: 1, label: "1 · 용어만" },
    { v: 2, label: "2 · 구현 가능" },
    { v: 3, label: "3 · 설명 가능" },
  ];

  return (
    <div className="space-y-6">
      <section className="glass p-6">
        <p className="text-white/70 text-sm">자가진단</p>
        <h2 className="text-2xl font-bold mt-1">
          토픽별로 현재 수준을 체크해줘
        </h2>
        <p className="text-white/70 text-sm mt-2">
          정확히 몰라도 괜찮아. 추천 루트에 반영돼.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {TOPICS.map((t) => {
          const cur = selfRatings[t.slug] ?? 0;
          return (
            <div key={t.slug} className="glass p-5 border border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{t.korName}</p>
                  <p className="text-white/60 text-sm">{t.name}</p>
                  <p className="text-white/70 text-sm mt-2">{t.summary}</p>
                </div>
                <span className="text-xs text-white/60">현재: {cur}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {scale.map((s) => (
                  <label
                    key={s.v}
                    className="flex items-center gap-2 glass px-3 py-2 border border-white/10"
                  >
                    <input
                      type="radio"
                      name={`rating-${t.slug}`}
                      checked={cur === s.v}
                      onChange={() => onChangeRating(t.slug, s.v)}
                    />
                    <span className="text-sm text-white/80">{s.label}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
