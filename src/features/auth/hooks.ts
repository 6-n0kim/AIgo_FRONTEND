import { useMutation } from "@tanstack/react-query";
import { loginApi } from "./api";

export function useLogin() {
  return useMutation({ mutationFn: loginApi });
}
