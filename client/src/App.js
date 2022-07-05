import logo from './logo.svg';
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Contant from './Layout/Contant';

export const GlobalStyle = createGlobalStyle `
  body {
    background-color: #eee;
  }
`;

const Container = styled.div`
  @media (min-width: 960px) {
    margin: 0 auto;
    padding: 0 6.1224489796%;
    max-width: 980px;
    min-height: 100vh;
  }

  padding: 0 1.6rem;
`;

const SectionFlex = styled.section`
  @media (min-width: 960px) {
    margin: 0 -1rem;
    flex-direction: row;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Container>
          <SectionFlex>
            <Sidebar />
            <Contant />
          </SectionFlex>
        </Container>
      </Main>
    </div>
  );
}

export default App
