import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  height: number;
  className?: string;
}

const NextImage: React.FC<Props> = ({ src, alt, height, className }) => (
  <Container className={className} height={height}>
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </Container>
);

export default NextImage;

interface ContainerStyled {
  height: number;
}

const Container = styled.div<ContainerStyled>`
  position: relative;
  height: ${(props) => `${props.height}px;`};
  width: 100%;
  margin: 0 auto;
`;
