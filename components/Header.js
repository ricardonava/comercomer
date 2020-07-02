/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';

export default function Header() {
  return (
    <header>
      <Head>
        <title>Comer Comer</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </Head>
    </header>
  );
}
