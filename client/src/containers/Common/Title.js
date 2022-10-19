import styled from "styled-components";
import { rem } from "../../constants/style";

export const TitleName = styled.h2`
  @media (min-width: 960px) {
    display: block;
  }

  font-size: ${rem.lgSpacing};
  font-weight: normal;
  display: none;
  margin-bottom: ${rem.xlSpacing};
  padding-bottom: ${rem.lgSpacing};
  border-bottom: 0.1rem solid #424242;
`;

export default function Title({ text, children }) {
  return (
    <TitleName>{text}</TitleName>
  )
}
