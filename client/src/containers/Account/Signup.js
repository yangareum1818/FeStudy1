import React, {
  useCallback,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { rem } from "../../constants/style";
import { AuthInputBox } from "../../components/Input";
import DefaultButton from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import AccountPageLayout from "../../Layout/AccountPageLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { regexEmail, regexPhone, regexPassword } from "../Common/Regex";

const SignupBanner = styled.p`
  margin-top: ${rem.lgSpacing};
  padding: 1.1rem 1.7rem;
  border-radius: 0.4rem;
  background-color: rgba(228, 255, 24, 0.3);
  font-size: 1.2rem;
  color: #aaaaaf;
  letter-spacing: -0.022rem;
  transition: all 0.2s ease-out;

  strong {
    display: block;
    margin-bottom: 0.5rem;
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

const ErrorMSG = styled.p`
  margin-top: 1rem;
  color: #f00;
  font-size: ${rem.smSpacing};
`;

function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = useRef(null);
  password.current = watch("password");
  console.log(watch("password"));

  const onSubmit = (data) => console.log(data);

  return (
    <AccountPageLayout>
      <SignupBanner>
        <strong>신규 가입 시 총 100,000원 할인쿠폰 즉시 발급!</strong>
        <span>8월 패스트캠퍼스가 처음인분들께 쏩니다!</span>
      </SignupBanner>

      <SignupCont>
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <AuthInputBox
            name={"name"}
            label={"이름"}
            {...register("name", {
              required: {
                value: true,
                message: "이름을 입력해주세요.",
              },
              maxLength: {
                value: 8,
                message: "최대 8자 이하로 이름을 입력해주세요.",
              },
            })}
          />
          {errors.name && <ErrorMSG>{errors.name.message}</ErrorMSG>}
          <AuthInputBox
            name={"email"}
            type={"email"}
            label={"이메일"}
            {...register("email", {
              required: {
                value: true,
                message: "이메일은 필수로 입력해주세요.",
              },
              pattern: {
                value: regexEmail,
                message: "이메일 형식에 맞게 입력해주세요.",
              },
            })}
          />
          {errors.email && <ErrorMSG>{errors.email.message}</ErrorMSG>}
          <AuthInputBox
            name={"phone"}
            label={"휴대폰 번호(숫자만)"}
            {...register("phone", {
              required: {
                value: true,
                message: "핸드폰 번호를 입력해주세요.",
              },
              pattern: {
                value: regexPhone,
                message: "'-'없이 휴대폰 번호를 입력해주세요.",
              },
            })}
          />
          {errors.phone && <ErrorMSG>{errors.phone.message}</ErrorMSG>}
          <AuthInputBox
            type="password"
            name={"password"}
            label={"비밀번호"}
            {...register("password", {
              required: {
                value: true,
                message: "비밀번호를 입력해주세요.",
              },
              pattern: {
                value: regexPassword,
                message:
                  "영문, 숫자, 특수기호 조합으로 8자이상 20자이하 입력해주세요.",
              },
            })}
          />
          {errors.password && <ErrorMSG>{errors.password.message}</ErrorMSG>}
          <AuthInputBox
            type="password"
            name={"passwordcheck"}
            label={"비밀번호 확인"}
            {...register("passwordcheck", {
              required: {
                value: true,
                message: "비밀번호를 한번 더 입력해주세요.",
              },
              validate: (value) => {
                value === password.current;
              },
            })}
          />
          {errors.passwordcheck && (
            <ErrorMSG>{errors.passwordcheck.message}</ErrorMSG>
          )}

          <AgreementCheckBox>
            <CheckBox type="checkbox" text={"전체 동의"} />
          </AgreementCheckBox>

          <DefaultButton
            type={"submit"}
            text={"회원가입하기"}
            grow={"1"}
            MTop={"3.2rem"}
          />
        </FormBox>
      </SignupCont>
    </AccountPageLayout>
  );
}

export default SignUp;
