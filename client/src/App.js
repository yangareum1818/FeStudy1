import styled from "styled-components";
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Main from './Layout/Main';
import ContentLayout from './Layout/ContentLayout';

const SectionFlex = styled.section`
  @media (min-width: 960px) {
    margin: 0 -10px;
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
            <ContentLayout />
          </SectionFlex>
      </Main>
    </div>
  );
}

export default App
