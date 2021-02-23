import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  height: number;
}

const LazyImage: React.FC<Props> = ({ src, alt, height }) => (
  <Container height={height}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="contain"
      loading="lazy"
    />
  </Container>
);

export default LazyImage;

interface ContainerStyled {
  height: number;
}

const Container = styled.div<ContainerStyled>`
  position: relative;
  height: ${(props) => `${props.height}px;`};
`;
