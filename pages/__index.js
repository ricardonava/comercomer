import App from '../components/App';
import KitchenList, { ALL_KITCHENS_QUERY } from '../components/KitchenList';
import { initializeApollo } from '../lib/RealmApolloClient';

const IndexPage = () => (
  <App>
    <KitchenList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_KITCHENS_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    unstable_revalidate: 1
  };
}

export default IndexPage;
