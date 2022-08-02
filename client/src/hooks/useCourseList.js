import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function useCourseList() {
  const [mycourse, setMycourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    // useEffect는 DOM이 그려진다음에 돈다.
    axios.get("http://localhost:8000/api/v1/courses/my", {
      withCredentials: true
    }).then(res => {
      // 데이터를 가져온 다음에 로딩상태를 false
      setLoading(false);
      setMycourse(res.data);
    }).catch(err => {
      setError(true);
      // 에러나면 뭐할건지 ,,,
    })
  }, [])

  return {
    mycourse,
    loading,
    isError
  }
}