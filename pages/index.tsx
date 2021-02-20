import { NextPage } from "next";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequest } from "../redux/actions";
import { ApplicationState, Product } from "../redux/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface PropsFromState {
  loading: boolean;
  data: Product[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: () => any;
}

type Props = PropsFromDispatch & PropsFromState;

const Home: NextPage<Props> = (props) => {
  useEffect(() => {
    props.fetchRequest();
  }, []);

  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      {props.loading ? "Now loading" : "Not loading"}
      <p>Number of items: {props.data.length}</p>
      {props.data.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
