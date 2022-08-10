import styled from "styled-components";

import Header from './Layout/Header';
import Main from './Layout/Main';
import Sidebar from './Layout/Sidebar';
import ContentLayout from './Layout/ContentLayout';
import Account from "./containers/Account/Account";

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
      <Header />
      <Main>
        <Account />
        <SectionFlex>
          <Sidebar />
          <ContentLayout />
        </SectionFlex>
      </Main>
    </div>
  );
}

export default App