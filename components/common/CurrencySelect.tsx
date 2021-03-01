import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ApplicationState,
  CurrencyActionTypes,
  CurrencyTypes,
} from "../../redux/types";

const CurrencySelect: React.FC = () => {
  const [dropdownVisibility, showDropdown] = useState(false);
  const dispatch = useDispatch();
  const selectedCurrency: CurrencyTypes = useSelector(
    (state: ApplicationState) => state.currency.selected
  );

  const DropdownListItems = [
    { flag: "🇺🇸", currency: CurrencyTypes.USD },
    { flag: "🇯🇵", currency: CurrencyTypes.JPY },
    { flag: "🇪🇺", currency: CurrencyTypes.EUR },
    { flag: "🇬🇧", currency: CurrencyTypes.GBP },
  ].map((item, index) => (
    <DropdownListItem
      key={index}
      onClick={() => {
        dispatch({
          type: CurrencyActionTypes.SELECT_CURRENCY,
          payload: CurrencyTypes[item.currency],
        });
        showDropdown(false);
      }}
    >
      {item.flag} {item.currency}
    </DropdownListItem>
  ));

  return (
    <Container>
      <DropdownButton onClick={() => showDropdown((state) => !state)}>
        {selectedCurrency} <DownArrow />
      </DropdownButton>
      {/* {dropdownVisibility && <DropdownList>{DropdownListItems}</DropdownList>} */}
      <DropdownList active={dropdownVisibility}>
        {DropdownListItems}
      </DropdownList>
    </Container>
  );
};

export default CurrencySelect;

const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DropdownButton = styled.div`
  width: 80px;
  height: 30px;
  background-color: white;
  border: 1px solid #eee;

  cursor: pointer;
  text-align: center;
  line-height: 30px;
  top: 50px;
  left: 50px;
  font-size: 0.75rem;
`;

const DownArrow = styled.i`
  border: solid #808080;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom: 2px;
  margin-left: 2px;
`;

const DropdownList = styled.div`
  transition: max-height 0.5s ease;
  max-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;

  ${({ active }: any) =>
    active &&
    `
      max-height: 200px;
      opacity: 1;
    `}
`;

const DropdownListItem = styled.div`
  width: 80px;
  height: 30px;
  background-color: white;
  border: 1px solid #eee;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  top: 50px;
  left: 50px;
  font-size: 0.75rem;
  border-top: none;
  background-color: #fafafa;
  text-align: center;

  &:hover {
    background-color: #f4f4f4;
  }
`;
