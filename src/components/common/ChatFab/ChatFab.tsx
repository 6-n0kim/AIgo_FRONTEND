type Props = {
  onClick?: () => void;
};

// 우측 하단 플로팅 챗봇 버튼(FAB) - AIgo 핵심 기능 진입점
export function ChatFab({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed right-6 bottom-6 z-50 neon-cta h-14 w-14 rounded-full flex items-center justify-center hover:opacity-95 active:scale-[0.98]"
      aria-label="Open AI chat"
      title="AI Chat"
    >
      <span className="font-mono text-sm">AI</span>
    </button>
  );
}
