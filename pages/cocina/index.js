import App from '../../components/App';
import MealList, { ALL_MEALS_QUERY } from '../../components/MealList';
import { initializeApollo } from '../../lib/RealmApolloClient';

const IndexPage = () => (
  <App>
    <MealList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_MEALS_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    unstable_revalidate: 1
  };
}

export default IndexPage;
