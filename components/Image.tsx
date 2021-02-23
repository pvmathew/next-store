import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const LazyImage: React.FC<Props> = ({ src, alt, height, width }) => (
  <Container height={height} width={width}>
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
  width: number;
}

const Container = styled.div<ContainerStyled>`
  position: relative;
  height: ${(props) => `${props.height}px;`};
  width: ${(props) => `${props.width}px;`};
  margin: 0 auto;
`;
