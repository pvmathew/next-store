import React from "react";
import wrapper from "../redux/store";
import App, { AppInitialProps, AppContext } from "next/app";
import { createGlobalStyle } from "styled-components";

//Progress Bar
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 2,
  color: "#ff6700",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

class WrappedApp extends App<AppInitialProps> {

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(WrappedApp);

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}`;
