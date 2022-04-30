import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-carlos-chacon.vercel.app/graphql',
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
