import crypto from "crypto";

const mockData = [
  {
    id: crypto.randomBytes(20).toString("hex"),
    name: "한 번에 끝내는 React의 모든것 초격차 패키지",
    status: "ONGOING",
    description: null,
    expired_at: new Date(2022, 11, 31).toISOString(),
  },
  {
    id: crypto.randomBytes(20).toString("hex"),
    name: "김민태의 프론트엔드 아카데미 1장 JavaScript & TypeScript",
    status: "ONGOING",
    description: null,
    expired_at: new Date(9999, 11, 31).toISOString(),
  },
];

export default mockData;
