import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useUserName() {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post("http://localhost:8000/api/v1/user/my", {}, {
      withCredentials: true
    }).then(res => {
      console.log(res.data)
      setUserName(res.data.name)
      setLoading(false);
    });  
  }, [])

  return {
    userName,
    loading
  }
}