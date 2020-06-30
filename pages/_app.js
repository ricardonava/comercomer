/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/RealmApolloClient';
import '../styles/styles.sass';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
