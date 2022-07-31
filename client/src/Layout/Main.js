import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 960px) {
    margin: 0 auto;
    padding: 0 6.12%;
    max-width: 980px;
  }

  padding: 0 1.6rem;
`;

const MainInterval = styled.main`
  @media (min-width: 960px) {
    margin-top: 9rem;
  }

  margin-top: 4rem;
  min-height: 100vh;
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
