import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  Product,
  CurrencyTypes,
  ApplicationState,
  LayoutTypes,
} from "../../redux/types";

import Image from "../common/Image";

const Card: React.FC<Product> = ({ title, image, price, category, id }) => {
  const currency = useSelector((state: ApplicationState) => state.currency);
  const layoutStyle = useSelector(
    (state: ApplicationState) => state.layout.style
  );

  const generatePriceString = () => {
    switch (currency.selected) {
      case CurrencyTypes.JPY:
        return `￥${(price * currency.rates.jpy).toFixed(0)}`;
      case CurrencyTypes.GBP:
        return `£${(price * currency.rates.gbp).toFixed(2)}`;
      case CurrencyTypes.EUR:
        return `€${(price * currency.rates.eur).toFixed(2)}`;
      default:
        return `$${price.toFixed(2)}`;
    }
  };

  return (
    <Link href={{ pathname: "/product", query: { id } }}>
      <Container layoutStyle={layoutStyle}>
        <Categories layoutStyle={layoutStyle}>
          {category.split(" ").map((category, index) => {
            if (index === 0) return <Category key={index}>{category}</Category>;
            return <SecondCategory key={index}>{category}</SecondCategory>;
          })}
        </Categories>
        <ImageArea layoutStyle={layoutStyle}>
          <StyledImage src={image} alt={title} height={180} />
        </ImageArea>
        <Title layoutStyle={layoutStyle}>
          {title.length > 60 && layoutStyle != LayoutTypes.LIST
            ? title.slice(0, 60) + "..."
            : title}
        </Title>
        <Price layoutStyle={layoutStyle}>{generatePriceString()}</Price>
      </Container>
    </Link>
  );
};

export default Card;

type LayoutProps = {
  layoutStyle: LayoutTypes;
};

const Container = styled.li<LayoutProps>`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 20px 15px 20px;
  list-style-type: none;
  box-shadow: 0px 0px 5px #bbbbbb;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 240px;
    height: 320px;
    margin: 15px;

    transition: all ease 1s;

    ${({ layoutStyle }: any) =>
      layoutStyle === LayoutTypes.LIST
        ? `
      width: 100%;
      height: 220px;
      display: flex;
      padding: 20px;
      flex-direction: row;
    `
        : `width: 240px;`}
  }
`;

const StyledImage = styled(Image)`
  width: 220px;
`;

const ImageArea = styled.div<LayoutProps>`
  ${({ layoutStyle }: any) =>
    layoutStyle === LayoutTypes.LIST
      ? `
      border-right: solid 1px #eee;
      padding-right: 20px;
    `
      : `border: none;`}
`;

const Categories = styled.div<LayoutProps>`
  ${({ layoutStyle }: any) =>
    layoutStyle === LayoutTypes.LIST &&
    `
      order: 2;
      position: absolute;
      top: 30px;
      left: 290px;
      margin: 0;
      padding: 0;
    `}
`;

const Category = styled.p`
  margin: 0;
  display: inline-block;
  background-color: lightgray;
  font-size: 0.5rem;
  padding-left: 5px;
  position: relative;
  width: auto;
  height: 19px;
  line-height: 19px;
  color: #1f1f1f;
  z-index: 1;
  margin-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    left: 100%;
    top: 0;
    border: 10px solid transparent;
    border-left: 10px solid lightgray;
  }
`;

const SecondCategory = styled.p`
  margin: 0;
  display: inline-block;
  background-color: lightgray;
  font-size: 0.5rem;
  padding-left: 14px;
  position: relative;
  width: auto;
  height: 19px;
  line-height: 19px;
  color: #1f1f1f;
  left: 5px;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    left: 0;
    top: 0;
    border: 10px solid transparent;
    border-left: 10px solid white;
  }

  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    left: 100%;
    top: 0;
    border: 10px solid transparent;
    border-left: 10px solid lightgray;
  }
`;

const Title = styled.h5<LayoutProps>`
  margin: 10px 0;
  display: inline-block;
  width: 100%;

  ${({ layoutStyle }: any) =>
    layoutStyle === LayoutTypes.LIST &&
    `
      font-size: 1.5rem;
      margin-left: 45px;
      margin-top: 45px;
    `}
`;

const Price = styled.p<LayoutProps>`
  display: block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
  padding: 0;

  ${({ layoutStyle }: any) =>
    layoutStyle === LayoutTypes.LIST &&
    `
      font-size: 1.5rem;

    `}
`;
