import Header from "@/components/Layout/Header";
import { store, wrapper } from "@/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <main className="font-inter">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default wrapper.withRedux(App);
