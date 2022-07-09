import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

const SidebarWrapper = styled.div`
  @media (min-width: 960px) {
    min-width: 210px;
    white-space: nowrap;
    margin: 0 1rem;
    padding-right: 2rem;
  }

  flex: 1;
  width: 100%;
`;

function SideBar() {
  const [userName, setUserName] = useState();
  const listOfItems2 = [
    {
      href: 'https://www.naver.com',
      name: '내 강의 보기'
    },
    {
      href: 'https://www.daum.net',
      name: '내 숏북 보기'
    }
  ]
  axios.get("http://localhost:8000/api/v1/user/my").then(res => {
    setUserName(res.data[0].name)
  })
  return (
    <SidebarWrapper>
        <h3 className="name-section">안녕하세요, {userName}님</h3>
        <p>사용 가능 쿠폰 
          <a href="https://www.naver.com"></a>
        </p>
        <ul>
      {listOfItems2.map((item) => (
          <li><a href={item.href}> {item.name} </a></li>
      ))}
        </ul>
    </SidebarWrapper>
  );
}

export default SideBar
