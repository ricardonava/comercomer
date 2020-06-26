import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { useMemo } from 'react';
import * as RealmWeb from 'realm-web';

let apolloClient;

const APP_ID = 'comer-comer-lftdl';

const graphqlURL = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

const app = new RealmWeb.App({
  id: APP_ID,
  baseUrl: 'https://realm.mongodb.com'
});

// Add an Authorization header
// With a valid user access token to all GraphQL requests
const authorizationHeaderLink = setContext(async (_, { headers }) => {
  // If no user is logged in, log in an anonymous user
  await app.logIn(RealmWeb.Credentials.anonymous());

  // Get a valid access token for the current user
  const { accessToken } = app.currentUser;
  // console.log('currentUser', accessToken, app.currentUser);

  // Set the Authorization header, preserving any other headers
  return {
    headers: {
      ...headers,

      Authorization: `Bearer ${accessToken}`
    }
  };
});

const httpLink = new HttpLink({ uri: graphqlURL });

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authorizationHeaderLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(initialState = null) {
  const client = createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client
  // The initial state gets hydrated here
  if (initialState) {
    client.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return client;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = client;

  return client;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
