import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";
import LoginPage from "@/pages/Login";
import ComponentsTest from "@/pages/Test/ComponentsTest";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/components", element: <ComponentsTest /> },
      { path: "/login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
