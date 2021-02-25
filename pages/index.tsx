import React from "react";
import Logo from "../components/Logo";
import { NextPage } from "next";
import CardList from "../components/CardList";
import { fetchInventory as fetchData } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/types";


const Home: NextPage = () => {
  return (
    <>
      <Logo />
      <CardList />
    </>
  );
};

Home.getInitialProps = async ({ store }) => {
  const dispatch: ThunkDispatch<ApplicationState, any, AnyAction> =
    store.dispatch;
  await dispatch(fetchData());
  return {};
};

export default Home;
