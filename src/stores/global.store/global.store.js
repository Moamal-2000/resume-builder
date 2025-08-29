import { RESUMES } from "@/data/staticData";
import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isAsideOpen: true,
  selectedResume: RESUMES[0].name,
  isGlobalOverlayActive: false,

  updateGlobalState: (state) => set(state),

  toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
}));

export default useGlobalStore;
