import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Container>
      <ReturnText
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      >
        Return to Top
      </ReturnText>
      <FooterText>Created by Pavin for RHDJapan.</FooterText>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #111111;
  text-align: center;
  margin-top: 60px;
  height: 100px;
  padding: 20px;
`;

const ReturnText = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 5px;
  background-color: #1f1f1f;
  color: #ffffff;
  padding: 15px 25px;
  cursor: pointer;
  outline: none;
  border: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  color: #505050;
  font-size: 0.5rem;
  position: static;
  bottom: 0;
  left: 0;
  display: inline-block;
`;
