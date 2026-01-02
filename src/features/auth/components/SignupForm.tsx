import { useState, useCallback } from "react";
import { Button } from "@/components/common/Button";
import { useSignup, useCheckEmail } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const debouncedEmail = useDebounce(email, 500);
  const signup = useSignup();
  const navigate = useNavigate();

  // Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password validation
  const isValidPassword = (password: string) => {
    return password.length >= 8 && password.length <= 128;
  };

  // Check email availability with debouncing
  const emailCheck = useCheckEmail(
    debouncedEmail,
    emailChecked && isValidEmail(debouncedEmail),
  );

  // Handle email input change
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailChecked(false);
  }, []);

  // Validation states
  const emailError =
    email && !isValidEmail(email) ? "올바른 이메일 형식이 아닙니다" : null;
  const passwordError =
    password && !isValidPassword(password)
      ? "비밀번호는 8-128자여야 합니다"
      : null;
  const confirmPasswordError =
    confirmPassword && password !== confirmPassword
      ? "비밀번호가 일치하지 않습니다"
      : null;

  const emailAvailable = emailCheck.data?.available;
  const emailUnavailableError =
    emailChecked && emailCheck.isSuccess && !emailAvailable
      ? "이미 사용 중인 이메일입니다"
      : null;

  const canSubmit =
    email &&
    password &&
    confirmPassword &&
    isValidEmail(email) &&
    isValidPassword(password) &&
    password === confirmPassword &&
    emailChecked &&
    emailAvailable;

  const handleCheckEmail = () => {
    if (isValidEmail(email)) {
      setEmailChecked(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) {
      alert("입력 정보를 확인해주세요");
      return;
    }

    signup.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log("Signup successful:", data);
          navigate("/login");
        },
        onError: (error: any) => {
          const errorMessage =
            error?.response?.data?.detail || "회원가입에 실패했습니다";
          console.error("Signup failed:", error);
          alert(errorMessage);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
      {/* Email Input with Check Button */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            className="h-11 flex-1 rounded-xl bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-secondary/60 transition-all"
            placeholder="이메일"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            type="button"
            variant="accent"
            onClick={handleCheckEmail}
            disabled={!email || !isValidEmail(email) || emailCheck.isFetching}
            className="px-4"
          >
            {emailCheck.isFetching ? "확인중..." : "중복확인"}
          </Button>
        </div>

        {/* Email validation messages */}
        {emailError && (
          <p className="text-danger text-sm flex items-center gap-1">
            <span>❌</span> {emailError}
          </p>
        )}
        {emailChecked && emailCheck.isSuccess && emailAvailable && (
          <p className="text-accent text-sm flex items-center gap-1">
            <span>✅</span> 사용 가능한 이메일입니다
          </p>
        )}
        {emailUnavailableError && (
          <p className="text-danger text-sm flex items-center gap-1">
            <span>❌</span> {emailUnavailableError}
          </p>
        )}
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <input
          className="h-11 w-full rounded-xl bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-secondary/60 transition-all"
          placeholder="비밀번호 (8-128자)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="text-danger text-sm flex items-center gap-1">
            <span>❌</span> {passwordError}
          </p>
        )}
        {password && isValidPassword(password) && (
          <p className="text-accent text-sm flex items-center gap-1">
            <span>✅</span> 사용 가능한 비밀번호입니다
          </p>
        )}
      </div>

      {/* Confirm Password Input */}
      <div className="space-y-2">
        <input
          className="h-11 w-full rounded-xl bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-secondary/60 transition-all"
          placeholder="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError && (
          <p className="text-danger text-sm flex items-center gap-1">
            <span>❌</span> {confirmPasswordError}
          </p>
        )}
        {confirmPassword && password === confirmPassword && (
          <p className="text-accent text-sm flex items-center gap-1">
            <span>✅</span> 비밀번호가 일치합니다
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-2">
        <Button
          type="submit"
          variant="neon"
          disabled={!canSubmit || signup.isPending}
          className="w-full"
        >
          {signup.isPending ? "처리중..." : "회원가입"}
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate("/login")}
        >
          로그인으로 돌아가기
        </Button>
      </div>

      {/* Error Message */}
      {signup.isError && (
        <div className="text-danger text-sm bg-danger/10 border border-danger/20 rounded-lg p-3">
          회원가입에 실패했습니다. 다시 시도해주세요.
        </div>
      )}
    </form>
  );
}
