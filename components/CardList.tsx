import { useSelector } from "react-redux";
import { ApplicationState } from "../redux/types";
import styled from "styled-components";

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
      <NumItemsText>
        Now showing items 1-{inventory.length} of {inventory.length}
      </NumItemsText>
    </>
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

const NumItemsText = styled.p`
  text-align: center;
  color: #505050;
  font-size: 0.8rem;
  margin: 30px 0;
`;
