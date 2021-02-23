import { Product } from "../redux/types";
import styled from "styled-components";
import Image from "./Image";

const Card: React.FC<Product> = ({ title, image, price, category }) => {
  return (
    <Container>
      {category.split(" ").map((category, index) => {
        if (index === 0) return <Category>{category}</Category>;
        return <SecondCategory>{category}</SecondCategory>;
      })}
      <Image src={image} alt={title} height={150} width={150} />
      <Title>{title.length > 62 ? title.slice(0, 62) + "..." : title}</Title>
      <Price>${price.toFixed(2)}</Price>
    </Container>
  );
};

export default Card;

const Container = styled.li`
  position: relative;
  width: 240px;
  height: 300px;
  list-style-type: none;
  box-shadow: 0px 0px 5px #bbbbbb;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
  /* transition: 0.2s ease transform; */

  &:hover{
  }
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

const Title = styled.h5`
  margin: 10px 0;
  display: inline-block;
`;

const Price = styled.p`
  display: block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
  padding: 0;
`;
