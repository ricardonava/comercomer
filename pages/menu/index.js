import Link from 'next/link';
import Layout from '../../components/layout';
import Meals from '../../components/menu';
import DATA from '../../kitchensData';

export default function Menu() {
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
      <Meals meals={DATA} />
    </Layout>
  );
}
