import type { AppProps } from "next/app"
import { GlobalStyles } from "twin.macro"
import { ChakraProvider } from "@chakra-ui/react"
import { useApollo } from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState, pageProps.token)
  return (
    <div>
      <GlobalStyles />
      <ChakraProvider>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </div>
  )
}

export default App
