import React from "react";
import Logo from "../components/Logo";
import styled from "styled-components";
import CardList from "../components/CardList";
import { NextPage } from "next";
import { fetchExchangeRate, fetchInventory } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/types";
import { wrapper } from "../redux/store";
import CurrencySelect from "../components/CurrencySelect";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <CurrencySelect />
      <Logo />
      <NewArrivalsTextSection>
        <div>
          <NewArrivalsText>New Arrivals</NewArrivalsText>
          <NewArrivalsSubText>See the latest items.</NewArrivalsSubText>
        </div>
        <NewArrivalsFlairBlock />
      </NewArrivalsTextSection>
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

const NewArrivalsTextSection = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
    padding-right: 0;
  }
`;

const NewArrivalsText = styled.h1`
  line-height: 20px;
  text-align: right;
  padding: 0;
  margin: 0;
  color: #111111;
  
`;

const NewArrivalsSubText = styled.h3`
  padding-bottom: 0;
  line-height: 10px;
  padding: 0;
  margin: 0;
  text-align: right;
  font-size: 0.8rem;
  margin-top: 12px;
  color: #505050;
`;

const NewArrivalsFlairBlock = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
    background-color: #111111;
    margin-left: 10px;
    display: block;
  }
`;
