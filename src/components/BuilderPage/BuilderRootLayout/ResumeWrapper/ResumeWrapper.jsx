"use client";

import { usePathname } from "next/navigation";
import LiveResume2 from "../../Resumes/LiveResume2/LiveResume2";

const ResumeWrapper = () => {
  const pathname = usePathname();
  const isRootPage = pathname === "/builder";

  if (isRootPage) return;

  return <LiveResume2 />;
};

export default ResumeWrapper;
