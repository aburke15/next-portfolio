import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/portfolio.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js" as any);
  });
  return <Component {...pageProps} />;
}

export default MyApp;
