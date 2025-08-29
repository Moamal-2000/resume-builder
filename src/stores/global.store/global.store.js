import { RESUMES } from "@/data/staticData";
import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isAsideOpen: true,
  selectedResume: RESUMES[0].name,
  isGlobalOverlayActive: false,
  isResumePreviewActive: false,

  updateGlobalState: (state) => set(state),

  toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),

  showResumePreview: () => {
    set({ isGlobalOverlayActive: true, isResumePreviewActive: true });
  },
}));

export default useGlobalStore;
