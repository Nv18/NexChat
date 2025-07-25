import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("nexchat-theme") || "sunset",
  setTheme: (theme) => {
    localStorage.setItem("nexchat-theme", theme);
    set({ theme });
  },
}));