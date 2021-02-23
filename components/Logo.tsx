import styled from "styled-components"

const LogoComponent: React.FC = () => (
  <Logo src="https://d1vv73x37cbx43.cloudfront.net/skin/frontend/enterprise/newrhdtheme/css/logocss/CurrentSVGLogo/rhd_logo.svg" />
);

const Logo = styled.img`
  width: 300px;
  display: block;
  top: 50px;
  margin: 50px auto;
`;

export default LogoComponent;
