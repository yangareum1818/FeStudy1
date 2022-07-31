import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useUserName() {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post("http://localhost:8000/api/v1/user/my").then(res => {
      console.log(res);
      // setUserName(res.data[0].name)
      setLoading(false);
    });  
  }, [])

  return {
    userName,
    loading
  }
}