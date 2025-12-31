import { create } from "zustand";

type AppState = {
  token: string | null;
  setToken: (t: string | null) => void;
};

export const useAppStore = create<AppState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));
