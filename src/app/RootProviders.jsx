"use client";

import Header from "@/components/Header/Header";
import { store } from "@/redux/store";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";

const RootProviders = ({ children }) => {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={pathname === "/" ? "homePage" : ""}>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
};

export default RootProviders;
