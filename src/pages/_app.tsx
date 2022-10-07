import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { CartContextProvider } from "../contexts/CartContext";

// import dynamic from "next/dynamic";

globalStyles();

// const dynamicHeader = dynamic(() => import("../components/Header/index"), {
//   ssr: false,
// });

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <CartContextProvider>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </CartContextProvider>
    );
  }
}
