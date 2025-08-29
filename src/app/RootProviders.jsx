"use client";

import Header from "@/components/Header/Header";
import GlobalOverlay from "@/components/Shared/GlobalOverlay/GlobalOverlay";
import { usePathname } from "next/navigation";

const RootProviders = ({ children }) => {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={pathname === "/" ? "homePage" : ""}>
        <Header />
        {children}
        <GlobalOverlay />
      </body>
    </html>
  );
};

export default RootProviders;
