import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserInfo() {
  const [info, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/api/v1/user/my",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setUserInfo(res.data);
        console.log(res.data);

        setLoading(false);
      });
  }, []);

  return {
    info,
    loading,
  };
}
