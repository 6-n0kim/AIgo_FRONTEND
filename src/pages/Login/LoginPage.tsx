import { Button } from "@/components/common/Button";

export default function LoginPage() {
  return (
    <div className="max-w-xl space-y-6">
      <section className="glass p-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-white/70 text-sm mt-2">
          이 페이지는 예시용입니다. 실제 로그인 UI는 <code>features/auth</code>로 구성하세요.
        </p>

        <div className="mt-4 flex gap-2">
          <Button variant="primary" onClick={() => alert("primary")}>Primary</Button>
          <Button variant="secondary" onClick={() => alert("secondary")}>Secondary</Button>
          <Button variant="accent" onClick={() => alert("accent")}>Accent</Button>
          <Button variant="danger" onClick={() => alert("danger")}>Danger</Button>
        </div>
      </section>

      <section className="glass p-6">
        <h2 className="font-semibold">Neon Gradient CTA</h2>
        <p className="text-white/70 text-sm mt-1">#6C5CE7 → #00CEC9</p>
        <div className="mt-4">
          <Button variant="neon">학습 시작</Button>
        </div>
      </section>
    </div>
  );
}
