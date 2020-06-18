import Layout from '../components/layout';
import Kitchens from '../components/kitchen-listing';

import DATA from '../kitchensData';

export default function Home() {
  return (
    <Layout>
      <Kitchens kitchens={DATA} />
    </Layout>
  );
}
