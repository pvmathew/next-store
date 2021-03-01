import styled from "styled-components";
import Link from "next/link";

import CurrencySelect from "./CurrencySelect";

const Header: React.FC = () => (
  <Container>
    <CurrencySelect />
    <Link href="/">
      <Logo src="https://d1vv73x37cbx43.cloudfront.net/skin/frontend/enterprise/newrhdtheme/css/logocss/CurrentSVGLogo/rhd_logo.svg" />
    </Link>
  </Container>
);

const Container = styled.div`
  padding: 60px auto 60px auto;
  border-bottom: solid 1px #eee;
  margin: 20px 20px;

  @media only screen and (min-width: 768px) {
    margin: 20px 50px;
  }
`;

const Logo = styled.img`
  display: block;
  margin: 80px auto 60px auto;
  cursor: pointer;
  width: 240px;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export default Header;
