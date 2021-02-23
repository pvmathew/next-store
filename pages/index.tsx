import Logo from "../components/Logo";
import { NextPage } from "next";
import CardList from "../components/CardList";
import { wrapper } from "../redux/store";
import { fetchData } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/types";

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  console.log("2. Page.getStaticProps uses the store to dispatch things");
  const dispatch: ThunkDispatch<ApplicationState, any, AnyAction> =
    store.dispatch;
  await dispatch(fetchData());
});

const Home: NextPage = () => {
  return (
    <>
      <Logo />
      <CardList />
    </>
  );
};

export default Home;
