"use client";

import { RESUMES } from "@/data/staticData";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import { usePathname } from "next/navigation";

const ResumeWrapper = () => {
  const pathname = usePathname();
  const isRootPage = pathname === "/builder";

  if (isRootPage) return;

  const selectedResume = useFormsStore((s) => s.selectedResume);
  const selectedResumeData = RESUMES.find(
    (resume) => resume.name === selectedResume
  );

  return selectedResumeData.component;
};

export default ResumeWrapper;
