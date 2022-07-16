import styled from "styled-components";
import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem"
import axios from 'axios';

const CouresItemBlock = styled.div`
  overflow: hidden;
  border: 0.1rem solid #e6e8eb;
  border-radius: 0.6rem;
  animation: fade-in .2s ease-in-out forwards;

  &~& {
    margin-top: 30px;
  }
`;

function Course() {
  const [mycourse, setMycourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    // useEffect는 DOM이 그려진다음에 돈다.
    axios.get("http://localhost:8000/api/v1/courses/").then(res => {
      // 데이터를 가져온 다음에 로딩상태를 false
      setLoading(false);
      setMycourse(res.data);
    }).catch(err => {
      setError(true);
      // 에러나면 뭐할건지 ,,,
    })
  }, [])

  return (
    <CouresItemBlock>
      {(!loading && mycourse) ? mycourse.map((info) => (
        <CourseItem article={info} />
      )) : (<div> Loading ... </div>)};
    </CouresItemBlock>
  );
}

export default Course
