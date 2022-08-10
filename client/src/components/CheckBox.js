import styled from 'styled-components'
import { rem } from '../constants/style';

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
  margin-right: ${rem.mdSpacing};
  border: 0.1rem solid #d3d3d3;
  border-radius: .4rem;
  background-color: #fff;
  vertical-align: middle;
`;

export default function CheckBox({ text, children }) {
  return (
    <CheckWrapper>
      <CheckLabel>
        <Checked />{text}
      </CheckLabel>
    </CheckWrapper>
  )
}