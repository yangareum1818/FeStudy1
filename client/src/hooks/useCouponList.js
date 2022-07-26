import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function useCouponList(args) { 
  const [mycoupon, setMycoupon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => { 
    axios.get("http://localhost:8000/api/v1/coupons/my").then(res => {
      setLoading(false);
      setMycoupon(res.data);
    }).catch(err => {
      setError(true);
    })
  }, [])

  return {
    mycoupon,
    loading,
    isError
  }
}
