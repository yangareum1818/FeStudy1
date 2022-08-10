import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/icon-logo.svg';
import DefaultButton, { GoogleBtn, WhiteSmokeButton } from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import { AuthInputBox } from '../../components/Input';

const AuthSection = styled.section`
  @media (min-width: 960px) {
    max-width: 44rem;
    margin: auto;
    margin-top: 6rem;
    padding: 6rem 4rem;
    border: 1px solid #e3e3e3;
    border-radius: 0.6rem;
  }
  
  padding: 6rem 2rem;
`;

const AuthH1 = styled.h1`
  margin: 0.67em 0;
  font-size: 2rem;
`;

const AuthLink = styled.a`
  display: inline-flex;
  padding-bottom: 1.6rem;
  cursor: pointer;
`;

const AuthText = styled.p`
  padding-bottom: 3rem;
  font-weight: normal;
  font-style: normal;
  font-size: 2.4rem;
  color: #2e2e2e;
  line-height: 3.6rem;
`;

const AuthCont = styled.div``;

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

const AuthInputWrapper = styled.div`
  margin-bottom: 1.6rem;
`;

function Account() {
  const GoogleLogin = () => {
    window.location.href = `http://localhost:8000/auth/google/login?redirect_url=${window.location}`;
  }

  return (
    <AuthSection>
      <AuthH1>
        <AuthLink href='/' >
          <Logo />
        </AuthLink>
        <AuthText>
          인생을 바꾸는 교육,<br/>
          패스트캠퍼스.
        </AuthText>
      </AuthH1>

      <AuthCont>
        <GoogleBtn onClick={GoogleLogin} text={"구글로 1초 만에 시작하기"} />

        <SignInDivider />

        <form>
          <AuthInputWrapper>
            <AuthInputBox type={"email"} text={"이메일"} />
          </AuthInputWrapper>
          <AuthInputWrapper>
            <AuthInputBox type={"password"} text={"비밀번호"} />
          </AuthInputWrapper>
          <CheckBox text={"자동 로그인"} />
          <DefaultButton text={"로그인"} grow={"1"} MTop={"3.2rem"} />
          <WhiteSmokeButton type={"button"} text={"이메일로 회원가입"} grow={"1"} MTop={"1.6rem"} />
        </form>
      </AuthCont>
    </AuthSection>
  )
}

export default Account