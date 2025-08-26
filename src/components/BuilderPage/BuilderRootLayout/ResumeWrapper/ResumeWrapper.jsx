"use client";

import { RESUMES } from "@/data/staticData";
import useGlobalStore from "@/stores/global.store/global.store";
import { usePathname } from "next/navigation";

const ResumeWrapper = () => {
  const pathname = usePathname();
  const isRootPage = pathname === "/builder";

  if (isRootPage) return;

  const selectedResume = useGlobalStore((s) => s.selectedResume);
  const selectedResumeData = RESUMES.find(
    (resume) => resume.name === selectedResume
  );

  return selectedResumeData.component;
};

export default ResumeWrapper;
