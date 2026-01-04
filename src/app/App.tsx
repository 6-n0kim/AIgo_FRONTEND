import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { ChatFab } from "@/components/common/ChatFab";
import { ThemeProvider } from "./providers/ThemeProvider";
import aigoLogo from "@/assets/images/aigo_op.png";
import { useAuth } from "@/features/auth/AuthContext";
import { useLogout } from "@/features/auth/hooks";

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
  const { user, isAuthenticated, logout: authLogout } = useAuth();
  const logoutMutation = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        authLogout();
        navigate("/login");
      },
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* LNB: 짙은 배경 + 아이콘 중심 */}
        <aside className="sticky top-0 h-screen w-16 flex flex-col items-center gap-3 p-3 glass-strong border-r border-white/10">
          <img src={aigoLogo} alt="AIgo Logo" />
          <nav className="mt-2 flex flex-col gap-2">
            <LnbItem to="/" label="홈" icon="🏠" />
            <LnbItem to="/study" label="스터디" icon="📚" />
            {/* <LnbItem to="/problem" label="문제" icon="🧐" /> */}
            <LnbItem to="/test" label="테스트" icon="🎯" />
          </nav>

          <nav className="mt-auto">
            <LnbItem
              to="/components"
              label="컴포넌트 모양 예시 보기"
              icon="🎨"
            />
            {!isAuthenticated && (
              <LnbItem to="/login" label="Login" icon="🔐" />
            )}
          </nav>
        </aside>

        <div className="flex-1">
          {/* 상단 바(글래스) */}
          <header className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between glass-strong border-b border-white/10">
            <div>
              <p className="text-white/60 text-xs">AIgo</p>
              <p className="font-semibold">AI 학습, 알고(AIgo) 시작하세요!</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* 사용자 정보 및 로그아웃 버튼 */}
              {isAuthenticated && (
                <div className="flex items-center gap-2">
                  <p className="text-white/60 text-xs">{user?.email}</p>
                  <Button
                    variant="primary"
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                  >
                    {logoutMutation.isPending ? "로그아웃 중..." : "로그아웃"}
                  </Button>
                </div>
              )}

              <div className="hidden md:flex items-center gap-2">
                <ThemeProvider />
              </div>
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
