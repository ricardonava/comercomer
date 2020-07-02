/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
// pages/index.js
import gql from 'graphql-tag';
import App from '../../components/App';
import MealList from '../../components/MealList';
import { initializeApollo } from '../../lib/RealmApolloClient';

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

const Kitchen = ({ id }) => {
  return (
    <App>
      <MealList id={id} />
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
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  return {
    props: {
      id
    },
    unstable_revalidate: 1
  };
}

export default Kitchen;
