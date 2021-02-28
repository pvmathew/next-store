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
  margin: 20px 50px;
  padding: 60px auto 60px auto;
  border-bottom: solid 1px #eee;
`;

const Logo = styled.img`
  width: 300px;
  display: block;
  margin: 80px auto 60px auto;
  cursor: pointer;
`;

export default Header;
