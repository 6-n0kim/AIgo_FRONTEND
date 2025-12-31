import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "aigo-theme"; // "dark" | "light"

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z" />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16h1v3h-1V2Zm0 17h1v3h-1v-3ZM2 11h3v1H2v-1Zm17 0h3v1h-3v-1ZM4.22 4.22l2.12 2.12-.7.7L3.52 4.92l.7-.7Zm14.14 14.14 2.12 2.12-.7.7-2.12-2.12.7-.7ZM18.36 5.64l2.12-2.12.7.7-2.12 2.12-.7-.7ZM5.64 18.36l2.12-2.12.7.7-2.12 2.12-.7-.7Z" />
    </svg>
  );
}

export function ThemeProvider({ children }: PropsWithChildren) {
  // 기본값: 다크
  const [dark, setDark] = useState(true);

  // 초기값: localStorage 우선(없으면 true)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") setDark(true);
    if (saved === "light") setDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((v) => !v);

  // ✅ 이미지처럼 "검정(다크) / 오렌지(라이트)" 트랙 느낌
  // 네 팔레트로 쓰고 싶으면 아래 className에서 bg만 바꾸면 됨.
  const trackClass = useMemo(() => {
    return [
      "relative w-20 h-10 rounded-full p-1",
      "transition-colors duration-300",
      "shadow-lg border border-white/10",
      dark ? "bg-black/90" : "bg-orange-500",
      "backdrop-blur-md",
    ].join(" ");
  }, [dark]);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        role="switch"
        aria-checked={dark}
        aria-label="테마 전환"
        className="select-none"
      >
        <div className={trackClass}>
          {/* 아이콘들 */}
          <MoonIcon
            className={[
              "absolute left-3 top-1/2 -translate-y-1/2",
              "h-5 w-5 transition-opacity duration-300",
              dark ? "text-white opacity-100" : "text-white/70 opacity-50",
            ].join(" ")}
          />
          <SunIcon
            className={[
              "absolute right-3 top-1/2 -translate-y-1/2",
              "h-5 w-5 transition-opacity duration-300",
              dark ? "text-white/70 opacity-50" : "text-white opacity-100",
            ].join(" ")}
          />

          {/* 노브(원) */}
          <span
            className={[
              "absolute top-1 left-1",
              "h-8 w-8 rounded-full",
              "bg-white/95",
              "shadow-md",
              "transition-transform duration-300 ease-out",
              dark ? "translate-x-0" : "translate-x-10",
            ].join(" ")}
          />
        </div>
      </button>

      {children}
    </>
  );
}
