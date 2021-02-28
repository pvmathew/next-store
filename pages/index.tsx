import React from "react";
import { NextPage } from "next";
import { fetchExchangeRate, fetchInventory } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/types";
import { wrapper } from "../redux/store";

import Header from "../components/common/Header";
import CardList from "../components/index/CardList";
import CardListHeader from "../components/index/CardListHeader";
import CardListResult from "../components/index/CardListResult";
import Footer from "../components/common/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CardListHeader />
      <CardList />
      <CardListResult />
      <Footer />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch: ThunkDispatch<ApplicationState, any, AnyAction> =
      store.dispatch;
    await dispatch(fetchInventory());
    await dispatch(fetchExchangeRate());

    return {
      props: {},
    };
  }
);

export default Home;
