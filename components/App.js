/* eslint-disable react/prop-types */
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

export default function App({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      <body className="has-navbar-fixed-top">
        <main className="container">{children}</main>
      </body>
      <Footer />
    </>
  );
}
