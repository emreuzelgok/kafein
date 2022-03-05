import '../styles/globals.scss';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
