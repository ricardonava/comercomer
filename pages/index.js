import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App with Bulma.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero is-primary is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <header className="navbar">
            <div className="container is-fullhd">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroC"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-success is-inverted">
                      <span className="icon">
                        <i className="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Next.js</h1>
            <h2 className="subtitle">Bulma.io | Sass</h2>
          </div>
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
