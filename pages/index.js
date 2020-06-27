// pages/index.js
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
import App from '../components/App';
import KitchenList from '../components/KitchenList';
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

const Home = () => {
  const { loading, data } = useQuery(ALL_KITCHENS_QUERY);

  if (loading || !data) {
    return (
      <App>
        <h1>loading...</h1>
      </App>
    );
  }
  return (
    <App>
      <KitchenList data={data} />
    </App>
  );
};

// Home.getInitialProps = (ctx) => {
//   const apolloClient = ctx.apolloClient;

//   console.log(apolloClient);
// };

export default withApollo(Home);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
