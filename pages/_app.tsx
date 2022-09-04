import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "../styles/style.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
