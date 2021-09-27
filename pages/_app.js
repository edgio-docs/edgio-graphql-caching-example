import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink as apolloCreateHttpLink,
} from '@apollo/client'
import { createHttpLink } from '@layer0/apollo'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: '/graphql' }, apolloCreateHttpLink),
  })
  return (
    <div className="bg-white text-black font-display flex flex-col items-center">
      <ApolloProvider client={client}>
        <div className="py-10 w-full max-w-[90vw] lg:max-w-[75vw] sm:px-10 flex flex-col">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
