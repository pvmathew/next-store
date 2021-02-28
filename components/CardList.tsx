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
  padding: 0 0;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: flex-start;

  @media only screen and (min-width: 768px) {
    padding: 0 100px;
  }
`;

const NumItemsText = styled.p`
  text-align: center;
  color: #505050;
  font-size: 0.8rem;
`;
