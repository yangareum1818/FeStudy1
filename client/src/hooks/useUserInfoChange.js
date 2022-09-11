import axios from "axios";
import { useState, useEffect } from "react";

export default function useUserInfoChange() {
  const [newinfo, setNewInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .put("http://localhost:8000/api/v1/user/my", newinfo)
      .then((res) => {
        setNewInfo(res.data);
        setLoading(false);
      })
      .then(() => {
        alert("수정이 완료되었습니다.");
      })
      .catch(() => {
        alert("수정사항을 다시 한번 확인해주세요.");
      });
  }, [newinfo]);

  return {
    newinfo,
    loading,
    setNewInfo,
  };
}
