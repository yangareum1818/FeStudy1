import styled from "styled-components";
import CourseItem from "./CourseItem"
import TabPanel from "../Common/TabPanel"
import useCourseList from "../../hooks/useCourseList";

const CouresListBlock = styled.div`
  margin-top: 3rem;
`;

function Course() {
  const course = useCourseList();

  if (course.isError) {
    return <div> Error! </div>
  }

  return (
    <>
      <TabPanel></TabPanel>
      <CouresListBlock>
        {(!course.loading && course.mycourse && !course.isError) ? course.mycourse.map((info) => (
          <CourseItem article={info} />
        )) : (<div> Loading.. </div>)}
      </CouresListBlock>
    </>
  );
}

export default Course
