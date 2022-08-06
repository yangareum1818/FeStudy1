import React from 'react';
import styled, { css } from 'styled-components'
import { rem } from '../constants/style';

// Button Reset
export const btnReset = styled.button`
  display: inline-block;
  padding: 0.8rem 2.9rem;
  min-width: 8.6rem;
  min-height: 4rem;
  vertical-align: middle;
  outline: none;
  border-radius: .4rem;
  border: 0.1rem solid #ed234b;
  background-color: #ed234b;
  letter-spacing: inherit;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  transition: all .2s ease-out;
`;

// BtnGroup & Default Button
export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
`;

export const DefaultBtn = styled(btnReset).attrs(props => ({
  type: props.type || 'submit',
}))`
  flex: 1;
  flex-grow: ${(props) => props.grow || '.5'};
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  padding-right: 1.24rem;
  padding-left: 1.25rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  color: #fff;
  border-color: #ed234b;
  background-color: #ed234b;

  :hover, :focus {
    ${(props) => props.touch && css`
      color: #fff;
      border-color: #b50f30;
      background-color: #b50f30;
  `}}
`;

export default function DefaultButton({ text, grow, type, children }) {
  return (
    <BtnGroup>
      <DefaultBtn type={type} grow={grow} touch>{text}</DefaultBtn>
    </BtnGroup>
  )
}

export const Btn = styled(btnReset)`
  flex-grow: ${(props) => props.flexgrow || '0'};
  padding: ${rem.xsmSpacing} ${rem.lgSpacing};
  margin-left: ${rem.xsmSpacing};
  border: .1rem solid ${(props) => props.border || "#6e6e73"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#6e6e73"};

  :hover, :focus {
    ${(props) => props.touch && css`
      border-color: ${(props) => props.hoverborder || "#2e2e2e"};
      background-color: ${(props) => props.hoverbackground || "#2e2e2e"};
      color: ${(props) => props.hovercolor|| "#fff"};
  `}}
`;


export function Button({ text, flexgrow, backgroundColor, color, children }) {
  return (
    <Btn flexgrow={flexgrow} backgroundColor={backgroundColor} color={color} touch>{text}</Btn>
  )
}
