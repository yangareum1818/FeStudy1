import styled from "styled-components";
import Course from "../containers/MyContant/CourseList";
import Tabpanel from '../containers/MyContant/Tabpanel';

const ContentSectionLayout = styled.div`
  padding: 0 10px;
  width: 100%;
  min-height: 300px;
`;


function ContentLayout({ children }) {
  return (
    <ContentSectionLayout>
      <Tabpanel />
      <Course />
    </ContentSectionLayout>
  );
}

export default ContentLayout
