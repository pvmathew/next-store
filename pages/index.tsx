import React from "react";
import Logo from "../components/Logo";
import { NextPage } from "next";
import CardList from "../components/CardList";
import { fetchExchangeRate, fetchInventory } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/types";
import CurrencySelect from "../components/CurrencySelect";
import Footer from "../components/Footer";
import { wrapper } from "../redux/store";

const Home: NextPage = () => {
  return (
    <>
      <CurrencySelect />
      <Logo />
      <CardList />
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
