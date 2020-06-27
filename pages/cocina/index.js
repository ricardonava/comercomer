import { useQuery } from '@apollo/react-hooks';
// pages/index.js
import gql from 'graphql-tag';
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

const Kitchen = (props) => {
  const { loading, data } = useQuery(ALL_MEALS_QUERY, {
    variables: props
  });
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

Kitchen.getInitialProps = ({ query }) => {
  const { params } = query;
  return {
    query: { _id: params }
  };
};

export default withApollo(Kitchen);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
