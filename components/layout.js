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
      </Head>
      <NavBar />
      <div className="container">
        <body>{children}</body>
      </div>
      <Footer />
    </>
  );
};
