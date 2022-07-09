import styled from "styled-components";
import Course from './MyContant/Course';

const ContentContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
  background-color: #e0ea34;
`;


function Contant({ children }) {
  return (
    <ContentContainer>
      <Course />
    </ContentContainer>
  );
}

export default Contant
