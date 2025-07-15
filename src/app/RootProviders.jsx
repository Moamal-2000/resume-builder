"use client";

import Header from "@/components/Header/Header";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const RootProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
};

export default RootProviders;
