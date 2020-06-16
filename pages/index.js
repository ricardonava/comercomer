import Layout from '../components/layout';
import Card from '../components/card';

export default function Home() {
  return (
    <Layout>
      <div className="columns is-multiline">
        {[
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten',
          'eleven',
          'twelve',
          'thirteen'
        ].map((number) => (
          <div className="column is-one-third">
            <Card number={number} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
