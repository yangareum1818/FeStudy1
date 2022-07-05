import styled from "styled-components";

const Contant_Ir = styled.div`
  padding: 0 1rem;
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
  background-color: #e0ea34;
`;


function Contant({ children }) {
  return (
    <Contant_Ir>
      Section
    </Contant_Ir>
  );
}

export default Contant
