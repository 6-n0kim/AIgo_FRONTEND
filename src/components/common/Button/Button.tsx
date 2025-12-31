import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "accent" | "danger" | "ghost" | "neon";
};

export function Button({ variant = "primary", className, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary: "bg-primary text-white hover:opacity-95",
    secondary: "bg-secondary text-dark hover:opacity-95",
    accent: "bg-accent text-dark hover:opacity-95",
    danger: "bg-danger text-dark hover:opacity-95",
    ghost:
      "bg-transparent text-white border border-white/10 hover:bg-white/5",
    neon: "neon-cta shadow-neon",
  };

  return (
    <button
      {...rest}
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
    />
  );
}
