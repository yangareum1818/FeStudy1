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
  padding: ${rem.zero} ${rem.lgSpacing};
  width: 100%;
  min-width: 100%;

  &:focus {
    outline: none;
  }
`;

export default function InputBox({ text, flexgrow, children, ...rest }) {
  return (
    <Label flexgrow={flexgrow}>
      {text && <LabelText> {text} </LabelText>}
      <Input {...rest} />
    </Label>
  )
}


// Auth Input
export const AuthInputWrapper = styled.div`
  margin-bottom: 1.6rem;
`;

export const AuthLabel = styled.label`
  font-size: ${rem.smSpacing};
`;

export const AuthLabelText = styled.span`
  display: inline-block;
  max-height: 1.6rem;
  color: #919191;
  font-weight: 400;
  transition: all .2s ease-out;
  transform-origin: left center;
  transform: translateY(150%) scale(1.17);

  &:focus {
    color: #5e5e5e;
    transform: translateY(0) scale(0);
  }
`;
export const AuthInput = styled.input.attrs(props => ({
  type: props.type,
}))`
  display: block;
  width: 100%;
  min-width: 100%;
  height: 4rem;
  border: none;
  border-bottom: .1rem solid #e3e3e3;
  background-color: rgba(0,0,0,0);
  font-size: 1.4rem;
  caret-color: #2e2e2e;
  color: #2e2e2e;

  &:focus, &:hover {
    outline: none;
    border-bottom: 1px solid #2e2e2e;
  }
`;

export function AuthInputBox({ label, children, ...rest }) {
  return (
    <AuthInputWrapper>
      <AuthLabel>
        {label && <AuthLabelText>{label}</AuthLabelText>}
        <AuthInput {...rest} />
      </AuthLabel>
    </AuthInputWrapper>
  )
}