import Layout from '../components/layout';
import Kitchens from '../components/kitchens';

import kitchensData from '../kitchensData';

export default function Home() {
  return (
    <Layout>
      <Kitchens kitchens={kitchensData} />
    </Layout>
  );
}
