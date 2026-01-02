import { http } from "@/services/http/client";
import type { LoginRequest, LoginResponse } from "./types";

export async function loginApi(body: LoginRequest) {
  console.log("Login API request:", body);
  const formData = new FormData();
  formData.append('username', body.email);
  formData.append('password', body.password);
  const res = await http.post<LoginResponse>("/auth/login", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  console.log("Login API response:", res.data);
  return res.data;
}
