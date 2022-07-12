import styled from "styled-components";
import Course from "../MyContant/Course";
import Tabpanel from '../MyContant/Tabpanel';

const ContentContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
  background-color: #e0ea34;
`;


function Contant({ children }) {
  return (
    <ContentContainer>
      <Tabpanel />
      <Course />
    </ContentContainer>
  );
}

export default Contant
