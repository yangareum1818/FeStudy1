import styled from 'styled-components'
import { rem } from '../constants/style';

export const Label = styled.label`
  flex-grow: ${(props) => props.flexgrow || "1"};
  color: ${(props) => props.color || "#424242"};
  font-size: ${rem.smSpacing};
  font-weight: bold;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: ${rem.xsmSpacing};
`

export const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
}))`
  display: block;
  margin: ${(props) => props.margin || `0`};
  padding: ${rem.smSpacing} ${rem.lgSpacing};
  width: 100%;
  min-width: 100%;
`;


export default function InputBox({ type, text, flexgrow, placeholder, color, margin, children }) {
  return (
    <Label flexgrow={flexgrow} color={color}>
      {text && <LabelText> {text} </LabelText>}
      <Input type={type} placeholder={placeholder} margin={margin} />
    </Label>
  )
}
// <Input> 안에 readonly

export const CheckWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const CheckLabel = styled.label`
    margin-right: auto;
    padding: 1rem 1rem 1rem .2rem;
    font-size: 1.4rem;
    cursor: pointer;
`;

export const Checked = styled.input.attrs(props => ({
  type: 'checkbox',
}))`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 2.6rem;
  border: 0.1rem solid #d3d3d3;
  border-radius: .4rem;
  background-color: #fff;
  vertical-align: middle;
`;

export function CheckBox({ text, children }) {
  return (
    <CheckWrapper>
      <CheckLabel>
        <Checked />{text}
      </CheckLabel>
    </CheckWrapper>
  )
}