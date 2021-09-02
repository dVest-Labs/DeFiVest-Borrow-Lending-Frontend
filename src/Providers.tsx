import React from "react";
import { ModalProvider } from "components";
import { Web3ReactProvider } from "@web3-react/core";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { getLibrary } from "utils/web3React";
import store from "state";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <HelmetProvider>
          <ThemeContextProvider>
            <ModalProvider>{children}</ModalProvider>
          </ThemeContextProvider>
        </HelmetProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
