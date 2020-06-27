import App from '../../components/App';
import MealList, {
  allMealsQueryVars,
  ALL_MEALS_QUERY
} from '../../components/MealList';
import { initializeApollo } from '../../lib/RealmApolloClient';

const IndexPage = () => (
  <App>
    <MealList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_MEALS_QUERY,
    variables: allMealsQueryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    unstable_revalidate: 1
  };
}

const ids = [
  { id: '5ef26fae5fa2dbcd18c3597c' },
  { id: '5ef299ec719fe0d802475d8e' },
  { id: '5ef299f4719fe0d802475d8f' }
];

export async function getStaticPaths() {
  return {
    paths:
      ids.map(({ id }) => ({
        params: {
          id
        }
      })) || [],
    fallback: false
  };
}

export default IndexPage;
