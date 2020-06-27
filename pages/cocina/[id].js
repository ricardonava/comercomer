// pages/index.js
import gql from 'graphql-tag';
import PropTypes, { object } from 'prop-types';
import App from '../../components/App';
import MealList from '../../components/MealList';
import withApollo from '../../lib/withApollo';
// import { getDataFromTree } from '@apollo/react-ssr';

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
  if (loading || !data) {
    return (
      <App>
        <h1>loading...</h1>
      </App>
    );
  }
  return (
    <App>
      <MealList data={data} />
    </App>
  );
};

Kitchen.getInitialProps = async (ctx) => {
  const { id: _id } = ctx.query;
  const { data, loading } = await ctx.apolloClient.query({
    query: ALL_MEALS_QUERY,
    variables: {
      query: { _id }
    }
  });
  // console.log(data.kitchen);
  return { data, loading };
};

Kitchen.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default withApollo(Kitchen);

// export default withApollo(Kitchen, {
//   ssr: false
// });

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
