import { Provider } from "@self.id/react";
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <Component {...pageProps} />;
    </Provider>
  );
}
