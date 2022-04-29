import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-carlos-chacon.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')

const root = createRoot(container)
// ReactDOM.render(<App />, document.getElementById('app'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
