import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isAsideOpen: true,
  toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
}));

export default useGlobalStore;
