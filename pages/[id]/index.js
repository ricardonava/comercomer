/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
// pages/index.js
import gql from 'graphql-tag';
import App from '../../components/App';
import MealList from '../../components/MealList';
import { initializeApollo } from '../../lib/RealmApolloClient';

const ALL_VENUES_QUERY = gql`
  query {
    venues {
      _id
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
    query: ALL_VENUES_QUERY
  });
  const paths = data.venues.map((venue) => ({
    params: { id: venue._id }
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
