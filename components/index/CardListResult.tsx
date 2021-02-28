import styled from "styled-components";
import { ApplicationState } from "../../redux/types";
import { useSelector } from "react-redux";

const CardListResult = () => {
  const inventory = useSelector(
    (state: ApplicationState) => state.inventory.data
  );
  return (
    <NumItemsText>
      Now showing items {inventory[0].id}-{inventory[inventory.length - 1].id} of {inventory.length}
    </NumItemsText>
  );
};

export default CardListResult;

const NumItemsText = styled.p`
  text-align: center;
  color: #505050;
  font-size: 0.8rem;
`;
