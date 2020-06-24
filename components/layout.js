/* eslint-disable react/prop-types */
import Head from 'next/head';

import NavBar from './navbar';
import Footer from './footer';

export default ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App with Bulma.io</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </Head>
      <NavBar />
      <body className="has-navbar-fixed-top">
        <div className="container">{children}</div>
      </body>
      <Footer />
    </>
  );
};
