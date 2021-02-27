import React from "react";
import Logo from "../components/Logo";
import { NextPage } from "next";
import { ApplicationState } from "../redux/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  fetchExchangeRate,
  fetchListing,
} from "../redux/actions";

import Listing from "../components/Listing";
import CurrencySelect from "../components/CurrencySelect";
import { wrapper } from "../redux/store";

const Product: NextPage = () => {
  return (
    <>
      <CurrencySelect />
      <Logo />
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
