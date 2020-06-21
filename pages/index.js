// pages/index.js
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Kitchens from '../components/kitchen-listing';
import Layout from '../components/layout';
import withApollo from '../realm/RealmApolloProvider';

// import { getDataFromTree } from '@apollo/react-ssr';

const QUERY = gql`
  query {
    kitchens {
      _id
      cover
      logo
      nombre
      sucursal
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return (
      <Layout>
        <main>
          <h1>Loading...</h1>
        </main>
      </Layout>
    );
  }
  return (
    <Layout>
      <main>
        <Kitchens kitchens={data} />
      </main>
    </Layout>
  );
};

export default withApollo(Home);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
