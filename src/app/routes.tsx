import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "@/pages/Home";
import IntroPage from "@/pages/Intro";
import NotFoundPage from "@/pages/NotFound";
import LoginPage from "@/pages/Login";
import SignupPage from "@/pages/Signup/SignupPage";
import ComponentsTest from "@/pages/Test/ComponentsTest";
import TestPage from "@/pages/Study/ProblemTestPage";
import StudyPage from "@/pages/Study/StudyPage";
import OnboardingPage from "@/pages/Study/OnboardingPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <IntroPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/components", element: <ComponentsTest /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/study", element: <StudyPage /> },
      { path: "/test", element: <TestPage /> },
      { path: "/onboarding", element: <OnboardingPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
