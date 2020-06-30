/* eslint-disable react/prop-types */
// pages/index.js
import gql from 'graphql-tag';
import App from '../components/App';
import KitchenList from '../components/KitchenList';
import { initializeApollo } from '../lib/RealmApolloClient';
// import { getDataFromTree } from '@apollo/react-ssr';

export const ALL_KITCHENS_QUERY = gql`
  query {
    kitchens {
      _id
      cover
      direccion
      logo
      nombre
      tel
      horario
    }
  }
`;

const Home = ({ data, loading }) => {
  if (loading)
    return (
      <App>
        <div>Loading</div>
      </App>
    );

  return (
    <App>
      <KitchenList data={data} />
    </App>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data, loading } = await apolloClient.query({
    query: ALL_KITCHENS_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data,
      loading
    },
    unstable_revalidate: 1
  };
}

export default Home;
// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
