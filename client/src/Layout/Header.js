import styled from "styled-components";

const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  font-size: 3.2rem;
  font-weight: 700;
  border-bottom: 0.1rem solid #eee;
`;

function Header({ children }) {
  return (
    <Head>
      HEADER
      <a href="/account/signin">
        로그인
        {children}
      </a>
    </Head>
  );
}

export default Header;
