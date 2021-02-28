import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  height: number;
}

const NextImage: React.FC<Props> = ({ src, alt, height }) => (
  <Container height={height}>
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </Container>
);

export default NextImage;

interface ContainerStyled {
  height: number;
}

const Container = styled.div<ContainerStyled>`
  position: relative;
  height: 300px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    height: ${(props) => `${props.height}px;`};
  }
`;
