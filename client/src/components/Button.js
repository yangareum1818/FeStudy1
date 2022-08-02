import React from 'react';
import styled, { css } from 'styled-components'
import { rem } from './Variables';

export const btnReset = styled.button`
  display: inline-block;
  padding: 0;
  min-width: 8.6rem;
  min-height: 4rem;
  vertical-align: middle;
  outline: none;
  border: none;
  border-radius: .4rem;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-out;
`;

export const Btn = styled(btnReset)`
  padding: ${rem.xsmSpacing} ${rem.lgSpacing};
  margin-left: ${rem.xsmSpacing};
  border: .1rem solid ${(props) => props.border || "#6e6e73"};
  background-color: ${(props) => props.backColor || "#fff"};
  color: ${(props) => props.color || "#6e6e73"};

  :hover, :focus {
    ${(props) => props.touch && css`
      border-color: ${(props) => props.hoverborder || "#2e2e2e"};
      background-color: ${(props) => props.hoverbackground || "#2e2e2e"};
      color: ${(props) => props.hovercolor|| "#fff"};
  `}}
`;


export default function Button({ text, children }) {
  return (
    <Btn touch>{text}</Btn>
  )
}