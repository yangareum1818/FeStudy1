import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/icon-logo.svg';
import Main from './Main';

const AuthSection = styled.section`
  @media (min-width: 960px) {
    max-width: 44rem;
    margin: auto;
    margin-top: 6rem;
    margin-bottom: 6rem;
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

function AccountPageLayout({ children }) {
  return (
    <Main>
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
          { children }
        </AuthCont>
      </AuthSection>
    </Main>
  )
}

export default AccountPageLayout