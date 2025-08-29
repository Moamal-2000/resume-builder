import { RESUMES } from "@/data/staticData";
import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isAsideOpen: true,
  selectedResume: RESUMES[0].name,
  isGlobalOverlayActive: true,

  updateGlobalState: (state) => set(state),

  updateSelectedResume: (selectedResume) => set({ selectedResume }),

  toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
}));

export default useGlobalStore;
