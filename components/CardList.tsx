import { connect } from "react-redux";
import { ApplicationState } from "../redux/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Product } from "../redux/types";
import styled from "styled-components";

import Card from "./Card";

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
      <List>
        {props.data.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </List>
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

const List = styled.ul`
  padding: 0 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-gap: 40px;
  justify-content: center;
  align-content: flex-start;
`;
