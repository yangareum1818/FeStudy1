import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

const SidebarWrapper = styled.nav`
  @media (min-width: 960px) {
    min-width: 210px;
    white-space: nowrap;
    margin: 0 10px;
    padding-right: 20px;
  }

  flex: 1;
  width: 100%;
`;

const NameSidebar = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #474747;
`;

const AvailableSidebarSub = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #424242;
`;

const SidebarCouponCount = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #ed234b;
  text-decoration: underline;
`;

const NavListWraaper = styled.ul`
  margin-top: 20px;
  border-top: 1px solid #e6e8eb;
`;

const NavListItem = styled.a`
  display: block;
  padding: 20px 0 19px;
  color: #282828;
  border-bottom: 1px solid #e6e8eb;
  transition: all .3s ease-out;

  &:hover, &:focus {
    color: #ed234b;
  }
`;

function SideBar() {
  const [userName, setUserName] = useState();
  const navList = [
    {
      href: 'https://www.naver.com',
      name: '내 강의 보기'
    },
    {
      href: 'https://www.daum.net',
      name: '내 숏북 보기'
    },
    {
      href: 'https://www.daum.net',
      name: '수강 신청 내역'
    },
    {
      href: 'https://www.daum.net',
      name: '거래 내역'
    },
    {
      href: 'https://www.daum.net',
      name: '쿠폰 내역'
    },
    {
      href: 'https://www.daum.net',
      name: '회원 정보 수정'
    },
    {
      href: 'https://www.daum.net',
      name: '기기 관리'
    },
    {
      href: 'https://www.daum.net',
      name: '로그아웃'
    }
  ];

  axios.get("http://localhost:8000/api/v1/user/my").then(res => {
    setUserName(res.data[0].name)
  });
  
  return (
    <SidebarWrapper>
        <NameSidebar>안녕하세요, {userName}님 !</NameSidebar>
        <AvailableSidebarSub>사용 가능 쿠폰 
          <SidebarCouponCount href="https://www.naver.com">2
            {/* {CourseMockData.mockData.length} */}
          </SidebarCouponCount>
        </AvailableSidebarSub>
        <NavListWraaper className='navlist-wrapper'>
      {navList.map((item) => (
          <li>
            <NavListItem href={item.href}>{item.name}</NavListItem>
          </li>
      ))}
        </NavListWraaper>
    </SidebarWrapper>
  );
}

export default SideBar
