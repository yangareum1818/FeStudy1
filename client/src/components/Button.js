import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from '../constants/style';
import { ReactComponent as Google } from '../images/icons8-google.svg';

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
  margin-top: ${(props) => props.MTop || '3rem'};
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
  font-size: 1.6rem;

  :hover, :focus {
    ${(props) => props.touch && css`
      color: #fff;
      border-color: #b50f30;
      background-color: #b50f30;
  `}}
`;

export default function DefaultButton({ text, grow, type, MTop, children }) {
  return (
    <BtnGroup MTop={MTop}>
      <DefaultBtn type={type} grow={grow} touch>{text}</DefaultBtn>
    </BtnGroup>
  )
}


// WhiteSmokeButton
export const WhiteSmokeBtn = styled(DefaultBtn)`
  border-color: #f2f2f2;
  background-color: #f2f2f2;
  font-size: 1.6rem;
  color: #5e5e5e;
  line-height: 2.4rem;

  :hover, :focus {
    border-color: #e2e2e2;
    background-color: #e2e2e2;
  }
`;

export function WhiteSmokeButton({ type, text, MTop, grow, children }) {
  return (
    <BtnGroup MTop={MTop}>
      <WhiteSmokeBtn type={type} grow={grow}>{text}</WhiteSmokeBtn>
    </BtnGroup>
  )
}


export const Btn = styled(btnReset)`
  flex-grow: ${(props) => props.flexgrow || '0'};
  padding: ${rem.smSpacing} ${rem.lgSpacing};
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

// sns login btn
export const WhiteBtn = styled(btnReset)`
  width: 100%;
  min-height: 4.2rem;
  color: #6e6e73;
  border: 1px solid #6e6e73;
  background: #fff;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export function GoogleBtn({ text, children }) {
  return (
    <WhiteBtn>
      <Google />
      {text}
    </WhiteBtn>
  )
}