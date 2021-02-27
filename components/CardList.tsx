import { useSelector } from "react-redux";
import { ApplicationState } from "../redux/types";
import styled from "styled-components";

import Card from "./Card";

const CardList: React.FC = () => {
  const inventory = useSelector(
    (state: ApplicationState) => state.inventory.data
  );

  return (
    <List>
      {inventory.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </List>
  );
};

export default CardList;

const List = styled.ul`
  padding: 0 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-gap: 40px;
  justify-content: center;
  align-content: flex-start;
`;
