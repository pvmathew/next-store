import styled from "styled-components";
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ApplicationState,
  LayoutActionTypes,
  LayoutTypes,
} from "../../redux/types";

import Card from "./Card";

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const inventory = useSelector(
    (state: ApplicationState) => state.inventory.data
  );
  const layoutStyle = useSelector(
    (state: ApplicationState) => state.layout.style
  );

  useLayoutEffect(() => {
    const checkWindowWidth = () => {
      // force layoutStyle to grid on resize to prevent breakage
      if (window.innerWidth < 768) {
        dispatch({
          type: LayoutActionTypes.SET_GRID,
        });
      }
    };
    window.addEventListener("resize", checkWindowWidth);
    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  return (
    <>
      <List layoutStyle={layoutStyle}>
        {inventory.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </List>
    </>
  );
};

export default CardList;

type LayoutProps = {
  layoutStyle: LayoutTypes;
};

const List = styled.ul<LayoutProps>`
  padding: 0 0;
  display: flex;
  flex-flow: wrap;

  @media only screen and (min-width: 768px) {
    padding: 0 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(245px, max-content));
    justify-content: center;

    ${({ layoutStyle }: any) =>
      layoutStyle === LayoutTypes.LIST &&
      `
      display: flex;

    `}
  }
`;
