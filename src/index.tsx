import React from "react";
import ReactDOM from "react-dom/client";
import {RecoilRoot, useRecoilValue} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {IntlProvider} from "react-intl";
import {QueryClient, QueryClientProvider} from "react-query";

import {createTheme, ThemeProvider} from "@mui/material";

import {localeState} from "@recoils/locale/state";
import {ko, en} from "./locale";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FFF",
      contrastText: "#000",
    },
  },
});

const locales: any = {
  ko,
  en,
};

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <Init />
  </RecoilRoot>,
);

function Init() {
  const locale = useRecoilValue(localeState);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <IntlProvider locale={locale} messages={locales[locale]}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </ThemeProvider>
        </IntlProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
