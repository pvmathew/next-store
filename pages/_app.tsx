import React from "react";
import wrapper from "../redux/store";
import App, { AppInitialProps, AppContext } from "next/app";


class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    ctx.store.dispatch({ type: "APP", payload: "was set in _app" });
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);

