import type { AppProps /*, AppContext */ } from "next/app"
import { GlobalStyles } from "twin.macro"
import { ChakraProvider } from "@chakra-ui/react"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <GlobalStyles />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default App
