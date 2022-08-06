import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 960px) {
    margin: 0 auto;
    max-width: 98rem;
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
