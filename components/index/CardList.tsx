import styled from "styled-components";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../redux/types";

import Card from "./Card";

const CardList: React.FC = () => {
  const inventory = useSelector(
    (state: ApplicationState) => state.inventory.data
  );

  return (
    <>
      <List>
        {inventory.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </List>
    </>
  );
};

export default CardList;

const List = styled.ul`
  padding: 0 0;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: flex-start;

  @media only screen and (min-width: 768px) {
    padding: 0 100px;
  }
`;
