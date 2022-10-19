import { useState } from "react";

export default function useUserInfoChange() {
  const [newinfo, setNewInfo] = useState({
    id: "",
    phone: "",
    provider: "",
    name: "",
    email: "",
    address: "",
    organization: "",
    company: "",
  });

  const [loading, setLoading] = useState(true);

  return {
    newinfo,
    loading,
    setNewInfo,
    setLoading,
  };
}
