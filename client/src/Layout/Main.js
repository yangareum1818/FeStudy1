import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 960px) {
    margin: 0 auto;
    padding: 0 6.1224489796%;
    max-width: 980px;
    min-height: 100vh;
  }

  padding: 0 16px;
`;

const MainInterval = styled.main`
  @media (min-width: 960px) {
    margin-top: 80px;
  }

  margin-top: 40px;
`;

function Main({ children }) {
  return (
    <MainInterval>
      <Container>
        { children }
      </Container>
    </MainInterval>
  );
}

export default Main
