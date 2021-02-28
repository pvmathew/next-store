import styled from "styled-components";
import Image from "../components/Image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ApplicationState, Product, CurrencyTypes } from "../redux/types";

const Listing: React.FC = () => {
  // product is null on first render
  // store will have listing data after second hydration cycle
  const product: Product | null = useSelector(
    (state: ApplicationState) => state.listing.data
  );

  const currency = useSelector((state: ApplicationState) => state.currency);

  if (product) {
    const { title, image, price, category, description } = product;

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
      <Container>
        <Link href="/">
          <BackButton>
            <LeftArrow /> Back
          </BackButton>
        </Link>
        <ImageArea>
          <Image src={image} alt={title} height={500} />
        </ImageArea>
        <TextArea>
          {category.split(" ").map((category, index) => {
            if (index === 0) return <Category>{category}</Category>;
            return <SecondCategory>{category}</SecondCategory>;
          })}
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>{generatePriceString()}</Price>
          <AddToCartButton>Add To Cart</AddToCartButton>
        </TextArea>
      </Container>
    );
  }

  return <Container></Container>;
};

export default Listing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 70vh;
  margin: 20px;
  list-style-type: none;
  box-shadow: 0px 0px 5px #bbbbbb;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const BackButton = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  color: #505050;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  top: 10px;
  left: 0px;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    top: 15px;
    left: 5px;
  }
`;

const LeftArrow = styled.i`
  border: solid #505050;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-bottom: 2px;
`;

const ImageArea = styled.div`
  width: 100%;
  border-bottom: solid 1px #cecece;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    border-bottom: none;
    border-right: solid 1px #cecece;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    padding: 50px;
  }
`;

const TextArea = styled.div`
  width: 100%;
  padding: 20px 10px 10px 10px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding: 80px 50px;
  }
`;

const Category = styled.p`
  margin: 0;
  display: inline-block;
  background-color: lightgray;
  font-size: 0.8rem;
  padding-left: 7px;
  position: relative;
  width: auto;
  height: 25px;
  line-height: 25px;
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
    border: 12.5px solid transparent;
    border-left: 12.5px solid lightgray;
  }
`;

const SecondCategory = styled.p`
  margin: 0;
  display: inline-block;
  background-color: lightgray;
  font-size: 0.8rem;
  padding-left: 18px;
  padding-right: 2px;
  position: relative;
  width: auto;
  height: 25px;
  line-height: 25px;
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
    border: 12.5px solid transparent;
    border-left: 12.5px solid white;
  }

  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    left: 100%;
    top: 0;
    border: 12.5px solid transparent;
    border-left: 12.5px solid lightgray;
  }
`;

const Title = styled.h1`
  margin: 20px 10px;
  display: block;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin: 20px 10px;
`;

const Price = styled.h2`
  margin-top: 50px;
  text-align: right;
`;

const AddToCartButton = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #505050;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: 0;
  font-size: 1em;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #111111;
    border: none;
    color: white;
  }
`;
