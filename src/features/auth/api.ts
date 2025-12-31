import { http } from "@/services/http/client";
import type { LoginRequest, LoginResponse } from "./types";

export async function loginApi(body: LoginRequest) {
  const res = await http.post<LoginResponse>("/auth/login", body);
  return res.data;
}
