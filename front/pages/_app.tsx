import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '../components/layout/Layout';
import { Provider } from "react-redux";
import wrapper from "../store/configureStore";
import { GlobalStyle } from '../styles/global';

export default function MyApp({ Component, pageProps, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return(
  <Provider store={store}>
    <Head>
      <meta charSet="utf-8" />
      <title>나만의 레시피</title>
    </Head>
    <GlobalStyle />
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </Provider>
  );
}