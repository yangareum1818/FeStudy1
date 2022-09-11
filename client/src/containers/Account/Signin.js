import React from "react";
import styled from "styled-components";
import DefaultButton, { GoogleBtn, SnsButton } from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import { AuthInputBox } from "../../components/Input";
import AccountPageLayout from "../../Layout/AccountPageLayout";

const SignInDivider = styled.hr`
  height: 0.1rem;
  margin: 3.2rem 0;
  border-width: 0.1rem 0 0;
  border-top: 0.1rem solid #e3e3e3;
  color: #919191;
  text-align: center;

  &::after {
    content: "또는 이메일로 로그인";
    position: relative;
    top: -1rem;
    padding: 0 1.6rem;
    background: #fff;
  }
`;

const FormBox = styled.form``;

function SignIn() {
  const handleClickGoogleLogin = () => {
    window.location.href = `http://localhost:8000/auth/google/login?redirect_url=${window.location}`;
  };

  const SignupLink = () => {
    window.location.href = `/account/signup`;
  };

  return (
    <AccountPageLayout>
      <GoogleBtn
        onClick={handleClickGoogleLogin}
        text={"구글로 1초 만에 시작하기"}
      />

      <SignInDivider />

      <FormBox>
        <AuthInputBox type={"email"} label={"이메일"} />
        <AuthInputBox type={"password"} label={"비밀번호"} />
        <CheckBox text={"자동 로그인"} />
        <DefaultButton text={"로그인"} />
        <SnsButton
          onClick={SignupLink}
          type={"button"}
          text={"이메일로 회원가입"}
          MTop={"1.6rem"}
        />
      </FormBox>
    </AccountPageLayout>
  );
}

export default SignIn;
