import theme from "@chakra-ui/theme"
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
