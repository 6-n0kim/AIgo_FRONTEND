import { useState } from "react";
import { Button } from "@/components/common/Button";
import { useLogin } from "../hooks";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Login form submitted with:", { email, password });
        login.mutate(
          { email, password },
          { onSuccess: (data) => alert(`token: ${data.token}`) },
        );
      }}
      className="grid gap-3 max-w-sm"
    >
      <input
        className="h-11 rounded-xl bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-secondary/60"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="h-11 rounded-xl bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-secondary/60"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex flex-col gap-2">
        <Button
          type="submit"
          variant="neon"
          disabled={login.isPending}
          className="flex-1"
        >
          {login.isPending ? "Loading..." : "Login"}
        </Button>

        <Button
          type="button"
          variant="primary"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </Button>
      </div>

      {login.isError && <div className="text-danger text-sm">Login failed</div>}
    </form>
  );
}
