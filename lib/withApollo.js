/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// lib/withApollo.js
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: authorizationHeaderLink.concat(httpLink),
      cache: new InMemoryCache()
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
