/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/styles.sass';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
