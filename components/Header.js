/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function Header() {
  // const { pathname } = useRouter();

  return (
    <header>
      <Head>
        <title>Create Next App with Bulma.io</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </Head>
      {/* <Link href="/">
        <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
      </Link> */}
    </header>
  );
}
