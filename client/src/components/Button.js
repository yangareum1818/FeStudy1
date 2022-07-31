import React from 'react';
import styled from 'styled-components'

const Btn = styled.button`
  flex-grow: .5;
  /* flex: 1; */
  display: inline-block;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-right: 1.24rem;
  padding-left: 1.25rem;
  margin-left: .75rem;
  min-width: 8.6rem; // 얘랑
  background: ${props => {
  console.log(props);
    return props.backgroundColor ? props.backgroundColor : "#fff"
  }}; // 얘랑
  color: "#000"; // 얘랑
  border: .1rem solid #ed234b; // 얘랑
  border-radius: .4rem;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  transition: all .2s ease-out;
  cursor: pointer;
`;

export default function Button({ text, backgroundColor, children }) {
  return (
    <Btn backgroundColor={backgroundColor}> {text} </Btn>
  )
}