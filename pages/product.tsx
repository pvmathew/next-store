import React from "react";
import { NextPage } from "next";
import { ApplicationState } from "../redux/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchExchangeRate, fetchListing } from "../redux/actions";
import { wrapper } from "../redux/store";

import Header from "../components/common/Header";
import Listing from "../components/product/Listing";

const Product: NextPage = () => {
  return (
    <>
      <Header />
      <Listing />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const dispatch: ThunkDispatch<ApplicationState, any, AnyAction> =
      store.dispatch;
    await dispatch(fetchListing(query.id));
    await dispatch(fetchExchangeRate());

    return {
      props: {},
    };
  }
);

export default Product;
