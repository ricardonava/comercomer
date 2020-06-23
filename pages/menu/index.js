import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Link from 'next/link';
import Layout from '../../components/layout';
import Meals from '../../components/menu';
import withApollo from '../../realm/RealmApolloProvider';

const QUERY = gql`
  query {
    kitchen(query: { _id: "5ef26fae5fa2dbcd18c3597c" }) {
      comidas {
        nombre
        porcion
        precio
        thumb
      }
    }
  }
`;

const Menu = () => {
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
      <nav className="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li className="is-active">
            <Link href="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Meals meals={data} />
      </main>
    </Layout>
  );
};

export default withApollo(Menu);
