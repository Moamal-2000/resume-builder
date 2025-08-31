import { RESUMES } from "@/data/staticData";
import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isAsideOpen: true,
  selectedResume: RESUMES[3].name,
  selectedPreviewResume: RESUMES[0].name,
  isGlobalOverlayActive: false,
  isResumePreviewActive: false,

  updateGlobalState: (state) => set(state),

  toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),

  showResumePreview: (resumeName) => {
    set({
      isGlobalOverlayActive: true,
      isResumePreviewActive: true,
      selectedPreviewResume: resumeName,
    });
  },
}));

export default useGlobalStore;
