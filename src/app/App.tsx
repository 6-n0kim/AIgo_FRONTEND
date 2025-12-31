import { NavLink, Outlet } from "react-router-dom";

import { ChatFab } from "@/components/common/ChatFab";
import { ThemeProvider } from "./providers/ThemeProvider";
import aigoLogo from "@/assets/images/aigo_op.png";

function LnbItem({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: string;
}) {
  return (
    <NavLink
      to={to}
      title={label}
      aria-label={label}
      className={({ isActive }) =>
        [
          "h-11 w-11 rounded-xl flex items-center justify-center transition",
          isActive
            ? "bg-primary/20 text-primary border border-primary/30"
            : "text-white/70 hover:bg-white/5 border border-transparent",
        ].join(" ")
      }
    >
      <span className="text-lg">{icon}</span>
    </NavLink>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* LNB: 짙은 배경 + 아이콘 중심 */}
        <aside className="sticky top-0 h-screen w-16 flex flex-col items-center gap-3 p-3 glass-strong border-r border-white/10">
            <img src={aigoLogo} alt="AIgo Logo"/>
          <nav className="mt-2 flex flex-col gap-2">
            <LnbItem to="/" label="Home" icon="🏠" />
            
          </nav>

          <nav className="mt-auto">
            <LnbItem to="/components" label="컴포넌트 모양 예시 보기" icon="🎨" />
            <LnbItem to="/login" label="Login" icon="🔐" />
          </nav>
        </aside>

        <div className="flex-1">
          {/* 상단 바(글래스) */}
          <header className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between glass-strong border-b border-white/10">
            <div>
              <p className="text-white/60 text-xs">알고 AIgo</p>
              <p className="font-semibold">학습 대시보드</p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <ThemeProvider />
            </div>
          </header>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>

      {/* 챗봇 영역: FAB */}
      <ChatFab onClick={() => alert("AI Chat (FAB)")} />
    </div>
  );
}
