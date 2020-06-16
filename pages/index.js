import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <body>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into{' '}
              <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
        </section>
      </body>
    </Layout>
  );
}
