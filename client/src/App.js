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

const SectionFlex = styled.section`
  @media (min-width: 960px) {
    margin: 0 -1rem;
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
          <SectionFlex>
            <Sidebar />
            <Contant />
          </SectionFlex>
      </Main>
    </div>
  );
}

export default App
