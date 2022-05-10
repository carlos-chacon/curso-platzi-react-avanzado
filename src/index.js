import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, from } from '@apollo/client'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { App } from './App'
import Context from './Context'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-carlos-chacon.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      window.sessionStorage.removeItem('token')
    })
  }
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache()
})

const container = document.getElementById('app')

const root = createRoot(container)
// ReactDOM.render(<App />, document.getElementById('app'))
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Context.Provider>
)
