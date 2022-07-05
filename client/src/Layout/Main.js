import styled from "styled-components";

const Main_interval = styled.main`
  @media (min-width: 960px) {
    margin-top: 8rem;
  }

  margin-top: 4rem;
`;

function Main({ children }) {
  return (
    <Main_interval>
        { children }
    </Main_interval>
  );
}

export default Main
