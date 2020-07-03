/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
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

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.string).isRequired
};
