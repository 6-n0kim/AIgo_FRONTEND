import type { AxiosInstance } from "axios";

export function applyInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(err)
  );
}
