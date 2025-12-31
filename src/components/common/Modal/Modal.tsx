import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  title?: string;
}>;

export function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 grid place-items-center"
      onClick={onClose}
    >
      <div
        className="glass-strong w-[min(520px,92vw)] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
