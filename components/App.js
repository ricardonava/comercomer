import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const App = ({ children }) => {
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
};

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
