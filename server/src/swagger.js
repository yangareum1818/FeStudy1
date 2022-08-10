var swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "FastCampus API Docs",
    description: "FastCampus API 문서입니다.",
  },
  host: "localhost:8000",
  schemes: ["http"],
  definitions: {
    user: {
      id: "e879e3721010fa0c365f59151c6c3c878461cdc0",
      email: "remigailard80@korea.ac.kr",
      name: "김민석[ 학부재학 / 보건환경융합과학부 ]",
      phone: null,
      email_certified: 0,
      address: null,
      organization: null,
      company: null,
      provider: "email",
      created_at: "2022-07-31 02:56:29",
      updated_at: "2022-07-31 02:56:29",
    },
    createuser: {
      phone: "01074616005",
      provider: "email",
      name: "안녕아녕",
      email: "remigailard80@korea.ac.kr",
      name: "김민석[ 학부재학 / 보건환경융합과학부 ]",
      password: "1234",
      phone: null,
      address: null,
      organization: null,
      company: null,
    },
    patchuser: {
      id: "e879e3721010fa0c365f59151c6c3c878461cdc0",
      phone: "01074616005",
      provider: "email",
      name: "안녕아녕",
      email: "remigailard801@naver.com",
      address: "경기도 성남시 수정구 ㅇㅇㅇ",
      organization: "Organization",
      company: "토양어선",
    },
    emaillogin: {
      email: "remigailard8@naver.com",
      password: "1234",
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/server.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
