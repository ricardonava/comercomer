/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// React
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
// Apollo
import { setContext } from 'apollo-link-context';
import withApollo from 'next-with-apollo';
import React from 'react';
// Realm
import * as RealmWeb from 'realm-web';

const APP_ID = 'comer-comer-lftdl';

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

// Construct a new Apollo HttpLink that connects to your app's GraphQL endpoint
const graphqlurl = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;
const httpLink = new HttpLink({ uri: graphqlurl });

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: authorizationHeaderLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      const { apollo } = props;
      return (
        <ApolloProvider client={apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);

// Construct a new Apollo client with the links we just defined
// const client = new ApolloClient({
//   link: authorizationHeaderLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

// render(
//   // Wrap your app with an ApolloProvider
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );
