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
      slug
    }
  }
`;

const Kitchen = ({ venue }) => {
  return (
    <App>
      <MealList venue={venue} />
    </App>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ALL_VENUES_QUERY
  });
  const paths = data.venues.map((venue) => ({
    params: { venue: venue.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { venue } = params;

  return {
    props: {
      venue
    },
    unstable_revalidate: 1
  };
}

export default Kitchen;
