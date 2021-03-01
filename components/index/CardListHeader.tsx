import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LayoutActionTypes, LayoutTypes } from "../../redux/types";
import { ApplicationState } from "../../redux/types";

const CardListHeader: React.FC = () => {
  const dispatch = useDispatch();
  const layoutStyle = useSelector(
    (state: ApplicationState) => state.layout.style
  );

  return (
    <NewArrivalsTextSection>
      <div>
        <NewArrivalsText>New Arrivals</NewArrivalsText>
        <NewArrivalsSubText>See the latest items.</NewArrivalsSubText>
      </div>
      <NewArrivalsFlairBlock>
        <GridViewButton
          layoutStyle={layoutStyle}
          onClick={() =>
            dispatch({
              type: LayoutActionTypes.SET_GRID,
            })
          }
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </GridViewButton>
        <ListViewButton
          layoutStyle={layoutStyle}
          onClick={() =>
            dispatch({
              type: LayoutActionTypes.SET_LIST,
            })
          }
        >
          <Line />
          <Line />
          <Line />
          <Line />
        </ListViewButton>
      </NewArrivalsFlairBlock>
    </NewArrivalsTextSection>
  );
};

const NewArrivalsTextSection = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
    padding-right: 0;
  }
`;

const NewArrivalsText = styled.h1`
  line-height: 20px;
  text-align: right;
  padding: 0;
  margin: 0;
  color: #111111;
`;

const NewArrivalsSubText = styled.h3`
  padding-bottom: 0;
  line-height: 10px;
  padding: 0;
  margin: 0;
  text-align: right;
  font-size: 0.8rem;
  margin-top: 12px;
  color: #505050;
`;

const NewArrivalsFlairBlock = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    height: 50px;
    width: 100px;
    background-color: #111111;
    margin-left: 10px;
    margin-right: 60px;

    display: flex;
    /*flex-flow: wrap;
    justify-content: center;
    align-items: center;
    padding: 8px;
    box-sizing: border-box; */
  }
`;

type LayoutProps = {
  layoutStyle: LayoutTypes;
}

const GridViewButton = styled.div<LayoutProps>`
  width: 50px;
  background-color: gray;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;

  background-size: 200% 100%;
  background-image: linear-gradient(to right, gray 50%, #ff6700 50%);
  transition: background-position 0.5s;

  ${({ layoutStyle }: any) =>
    layoutStyle === LayoutTypes.GRID &&
    `
    background-position: 100% 0;
    `}
`;

const ListViewButton = styled.div<LayoutProps>`
  width: 50px;
  background-color: gray;
  padding: 5px 8px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  background-size: 200% 100%;
  background-image: linear-gradient(to right, gray 50%, #ff6700 50%);
  transition: background-position 0.5s;

  ${({ layoutStyle }: any) =>
    layoutStyle === LayoutTypes.LIST &&
    `
    background-position: -100% 0;
    `}
`;

const Box = styled.div`
  width: 12px;
  height: 12px;
  margin: 0px 2px;
  background-color: white;
  border-radius: 1px;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: white;
  margin: 2px 0;
`;

export default CardListHeader;
