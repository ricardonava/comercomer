/* eslint-disable no-underscore-dangle */
// pages/index.js
import gql from 'graphql-tag';
import PropTypes, { object } from 'prop-types';
import App from '../../components/App';
import MealList from '../../components/MealList';
import { initializeApollo } from '../../lib/RealmApolloClient';
// import { getDataFromTree } from '@apollo/react-ssr';

export const ALL_KITCHENS_ID_QUERY = gql`
  query {
    kitchens {
      _id
    }
  }
`;

export const ALL_MEALS_QUERY = gql`
  query kitchen($query: KitchenQueryInput) {
    kitchen(query: $query) {
      comidas {
        nombre
        porcion
        precio
        thumb
        descripcion {
          corta
        }
      }
    }
  }
`;

const Kitchen = ({ data, loading }) => {
  if (loading)
    return (
      <App>
        <div>Loading</div>
      </App>
    );
  return (
    <App>
      <MealList data={data} />
    </App>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ALL_KITCHENS_ID_QUERY
  });

  const paths = data.kitchens.map((kitchen) => ({
    params: { id: kitchen._id }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id: _id } = params;
  const apolloClient = initializeApollo();

  const { data, loading } = await apolloClient.query({
    query: ALL_MEALS_QUERY,
    variables: {
      query: { _id }
    }
  });

  return {
    props: {
      // initialApolloState: apolloClient.cache.extract(),
      data,
      loading
    },
    unstable_revalidate: 1
  };
}

Kitchen.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default Kitchen;

// export default withApollo(Kitchen, {
//   ssr: false
// });

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
