import React from 'react';
import styled from 'styled-components';
import { rem } from '../../constants/style';
import { AuthInputBox } from '../../components/Input';
import DefaultButton from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import AccountPageLayout from '../../Layout/AccountPageLayout';

const SignupBanner = styled.p`
  margin-top: ${rem.lgSpacing};
  padding: 1.1rem 1.7rem;
  border-radius: 0.4rem;
  background-color: rgba(228,255,24,.3);
  font-size: 1.2rem;
  color: #aaaaaf;
  letter-spacing: -0.022rem;
  transition: all .2s ease-out;

  strong {
    display: block;
    margin-bottom: .5rem;
    color: #222;
  }

  span {
    color: #3c3c3c;
  }
`;

const SignupCont = styled.div``;

const FormBox = styled.form`
  margin-top: ${rem.lgSpacing};
  margin-bottom: 3.2rem;
`;

const AgreementCheckBox = styled.div`
  margin-top: ${rem.smSpacing};
`;

function SignUp() {

  return (
    <AccountPageLayout>
      <SignupBanner>
        <strong>신규 가입 시 총 100,000원 할인쿠폰 즉시 발급!</strong>
        <span>8월 패스트캠퍼스가 처음인분들께 쏩니다!</span>
      </SignupBanner>

      <SignupCont>
        <FormBox>
          <AuthInputBox label={"이름"} />
          <AuthInputBox label={"이메일"} />
          <AuthInputBox label={"휴대폰 번호(숫자만)"} />
          <AuthInputBox label={"비밀번호"} />
          <AuthInputBox label={"비밀번호 확인"} />
        </FormBox>

        <AgreementCheckBox>
          <CheckBox text={"전체 동의"} />
        </AgreementCheckBox>

        <DefaultButton text={"회원가입하기"} grow={"1"} MTop={"3.2rem"} />
      </SignupCont>
    </AccountPageLayout>
  )
}

export default SignUp