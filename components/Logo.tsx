import styled from "styled-components";
import Link from "next/link";

const LogoComponent: React.FC = () => (
  <Link href="/">
    <Logo src="https://d1vv73x37cbx43.cloudfront.net/skin/frontend/enterprise/newrhdtheme/css/logocss/CurrentSVGLogo/rhd_logo.svg" />
  </Link>
);

const Logo = styled.img`
  width: 300px;
  display: block;
  top: 50px;
  margin: 50px auto;
  cursor: pointer;
`;

export default LogoComponent;
