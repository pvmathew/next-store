import styled from "styled-components";
import { NextPage } from "next";
import CardList from "../components/CardList";
import { wrapper } from "../redux/store";
import { fetchData } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/types";

 
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  console.log("2. Page.getStaticProps uses the store to dispatch things");
  const dispatch: ThunkDispatch<ApplicationState, any, AnyAction> = store.dispatch;
  await dispatch(fetchData());
});

const Home: NextPage = () => {
  return (
    <>
      <Logo src="https://d1vv73x37cbx43.cloudfront.net/skin/frontend/enterprise/newrhdtheme/css/logocss/CurrentSVGLogo/rhd_logo.svg" />
      <CardList />
    </>
  );
};

export default Home;

const Logo = styled.img`
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 50px;
  margin-top: 20px;
`;
