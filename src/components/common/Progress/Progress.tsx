type Props = {
  value: number; // 0~max
  max?: number;
  label?: string;
};

export function Progress({ value, max = 100, label }: Props) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>{label}</span>
          <span className="font-mono">{Math.round(pct)}%</span>
        </div>
      ) : null}

      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
