import styled from "styled-components";
import CourseItem from "./CourseItem"
import TabPanel from "../Common/TabPanel"
import useCourseList from "../../hooks/useCourseList";
import CommonPageLayout from "../../Layout/CommonPageLayout";
import Title from "../Common/Title";

const CouresListBlock = styled.div`
  margin-top: 3rem;
`;

function Course() {
  const course = useCourseList();

  if (course.isError) {
    return <div> Error! </div>
  }

  return (
    <CommonPageLayout>
      <Title text={"내 강의 보기"} />
      <TabPanel></TabPanel>
      <CouresListBlock>
        {(!course.loading && course.mycourse) ? course.mycourse.map((article) => (
          <CourseItem article={article} />
        )) : (<div> Loading.. </div>)}
      </CouresListBlock>
    </CommonPageLayout>
  );
  
}

export default Course
