/** The issue here is that your page is trying to import bootstrap 
 * whenever this page loads, including when the page is being rendered 
 * server-side by the Next.js server (or by the next export process). 
 * Bootstrap, though, can't run on the server-side because it looks for 
 * window.jquery as part of its startup process, and window is undefined 
 * when in the node env.To fix this, you have to wrap the imports for bootstrap, 
 * jquery, and popper.js in a check to ensure they are only imported on the client-side
 */

if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}
import "@shopify/polaris/dist/styles.css";
import fetch from "node-fetch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "next/app";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import translations from "@shopify/polaris/locales/en.json";

const client = new ApolloClient({
  fetch: fetch,
  fetchOptions: {
    credentials: "include",
  },
});
class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;
    return (
      <AppProvider i18n={translations}>
        <Provider
          config={{
            apiKey: API_KEY,
            shopOrigin: shopOrigin,
            forceRedirect: true,
          }}
        >
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </AppProvider>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  console.log("My store: ", ctx.query.shop);
  return {
    shopOrigin: ctx.query.shop,
  };
};

export default MyApp;
