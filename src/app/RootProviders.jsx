"use client";

import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

const RootProviders = ({ children }) => {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={pathname === "/" ? "homePage" : ""}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootProviders;
