import { useMutation, useQuery } from "@tanstack/react-query";
import { loginApi, signupApi, checkEmailApi, logoutApi } from "./api";

export function useLogin() {
  return useMutation({ mutationFn: loginApi });
}

export function useSignup() {
  return useMutation({ mutationFn: signupApi });
}

export function useLogout() {
  return useMutation({ mutationFn: logoutApi });
}

export function useCheckEmail(email: string, enabled: boolean = false) {
  return useQuery({
    queryKey: ["checkEmail", email],
    queryFn: () => checkEmailApi(email),
    enabled: enabled && email.length > 0,
    staleTime: 0,
  });
}
