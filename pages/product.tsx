import React from "react";
import Logo from "../components/Logo";
import { NextPage } from "next";
import { ApplicationState } from "../redux/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchListing as fetchData } from "../redux/actions";
import Listing from "../components/Listing";

const Product: NextPage = () => {
  return (
    <>
      <Logo />
      <Listing />
    </>
  );
};

Product.getInitialProps = async ({ store, query }) => {
  const dispatch: ThunkDispatch<ApplicationState, any, AnyAction> =
    store.dispatch;
  await dispatch(fetchData(query.id));
  return {};
};

export default Product;
