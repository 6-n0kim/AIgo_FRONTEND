import { http } from "@/services/http/client";
import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
  CheckEmailResponse,
} from "./types";

export async function loginApi(body: LoginRequest) {
  console.log("Login API request:", body);
  const formData = new FormData();
  formData.append("username", body.email);
  formData.append("password", body.password);
  const res = await http.post<LoginResponse>("/auth/login", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("Login API response:", res.data);
  return res.data;
}

export async function signupApi(body: SignupRequest) {
  console.log("Signup API request:", body);
  const res = await http.post<SignupResponse>("/auth/register", body);
  console.log("Signup API response:", res.data);
  return res.data;
}

export async function checkEmailApi(email: string) {
  console.log("Check email API request:", email);
  try {
    const res = await http.get<CheckEmailResponse>("/auth/check-email", {
      params: { email },
    });
    console.log("Check email API response:", res.data);
    return res.data;
  } catch (error) {
    console.log("Email check failed (using mock):", error);
    return { available: true };
  }
}

export async function logoutApi() {
  console.log("Logout API request");
  const res = await http.post("/auth/logout");
  console.log("Logout API response:", res.data);
  return res.data;
}
