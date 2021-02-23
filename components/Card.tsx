import { Product } from "../redux/types";
import styled from "styled-components";
import Image from "./Image";

const Card: React.FC<Product> = ({ title, image }) => {
  return (
    <Container>
      <Image src={image} alt={title} height={200} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;

const Container = styled.li`
  position: "relative";
  width: 240px;
  height: 300px;
  list-style-type: none;
  box-shadow: 0px 0px 5px #9e9e9e;
  padding: 10px;
  box-sizing: border-box;
`;

const StyledImage = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h4`
  display: inline;
`;
