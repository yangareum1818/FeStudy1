import styled from 'styled-components'
import { rem } from './Variables';

export const Label = styled.label`
  flex-grow: ${(props) => props.flexgrow || "1"};
  color: ${(props) => props.color || "#424242"};
  font-size: ${rem.smSpacing};
  font-weight: bold;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type || "text",
}))`
  display: block;
  margin-top: ${rem.xsmSpacing};
  padding: ${rem.smSpacing} ${rem.lgSpacing};
  width: 100%;
  min-width: 100%;
`;

// export const EmailInput = styled(Input).attrs({
//   type: "email"
// })``;

export default function InputBox({ type, text, flexgrow, placeholder, color, children }) {
  return (
    <Label flexgrow={flexgrow} color={color}>{text}
      <Input type={type} placeholder={placeholder} readonly/>
    </Label>
  )
}