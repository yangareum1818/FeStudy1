import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import ContentLayout from "./ContentLayout";

const SectionFlex = styled.section`
  @media (min-width: 960px) {
    margin: 0 -1rem;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default function CommonPageLayout({ children }) {
  return (
    <>
      <Header></Header>
      <Main>
        <SectionFlex>
          <Sidebar />
          <ContentLayout>{children}</ContentLayout>
        </SectionFlex>
      </Main>
    </>
  );
}
