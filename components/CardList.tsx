import { connect } from "react-redux";
import { ApplicationState } from "../redux/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Product } from "../redux/types";

import Card from "./card";

interface PropsFromState {
  loading: boolean;
  data: Product[];
  errors?: string;
}

interface PropsFromDispatch {
  // someAction: () => any;
}

type Props = PropsFromDispatch & PropsFromState;

const CardList: React.FC<Props> = (props) => {
  return (
    <>
      <p>Number of items: {props.data.length}</p>
      <ul>
        {props.data.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    // someAction: () => {
    //   dispatch(action();
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
