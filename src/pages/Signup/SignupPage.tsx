import { SignupForm } from "@/features/auth/components/SignupForm";

const SignupPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="glass p-6">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-center mb-8">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,206,201,0.18)]">
            AIgo
          </span>
        </h1>
        <h3 className="text-3xl font-bold text-center mb-2">회원가입</h3>
        <p className="text-center mb-6">AIgo에 오신 것을 환영합니다</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-col sm:items-center">
          <div className="mb-6"></div>
          <SignupForm />
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
