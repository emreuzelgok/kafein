/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default MyApp;
