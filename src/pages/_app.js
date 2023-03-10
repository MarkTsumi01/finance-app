import '@/styles/index.css'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '@/components/Loading';
import store from "../store";

export default function MyApp({ Component, pageProps }) {

  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
    </Provider>
  )
}