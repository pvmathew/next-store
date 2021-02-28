import styled from "styled-components";
import Link from "next/link";

const LogoComponent: React.FC = () => (
  <Container>
    <Link href="/">
      <Logo src="https://d1vv73x37cbx43.cloudfront.net/skin/frontend/enterprise/newrhdtheme/css/logocss/CurrentSVGLogo/rhd_logo.svg" />
    </Link>
  </Container>
);

const Container = styled.div`
/* background-color: black; */
margin: 0 50px;
border-bottom: solid 1px #eee;
margin-bottom: 20px;
`

const Logo = styled.img`
  width: 300px;
  display: block;
  margin: 80px auto 60px auto;
  cursor: pointer;
`;

export default LogoComponent;
