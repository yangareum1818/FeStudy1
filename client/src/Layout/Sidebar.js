import { useState } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

import useCouponList from '../hooks/useCouponList';
import useUserName from '../hooks/useUserName';

const SidebarWrapper = styled.nav`
  @media (min-width: 960px) {
    min-width: 21rem;
    white-space: nowrap;
    margin: 0 1rem;
    padding-right: 2rem;
  }

  flex: 1;
  width: 100%;
`;

const NameSidebar = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #474747;
`;

const AvailableSidebarSub = styled.p`
  margin-top: .8rem;
  font-size: 1.4rem;
  color: #424242;
`;

const SidebarCouponCount = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  color: #ed234b;
  text-decoration: underline;
`;

const NavListWraaper = styled.ul`
  margin-top: 3.4rem;
  font-size: 1.6rem;
  border-top: .1rem solid #e6e8eb;

  .list-item {
    display: block;
    padding: 2rem 0 1.9rem;
    color: #282828;
    border-bottom: .1rem solid #e6e8eb;
    transition: all .3s ease-out;
    cursor: pointer;

    &.active {
      font-weight: bold;
    }

    &:hover, &:focus {
      color: #ed234b;
    }
  }
`;

const navList = [
  {
    path: '/',
    name: '내 강의 보기',
    value: 'all'
  },
  {
    path: 'https://www.daum.net',
    name: '내 숏북 보기',
    value: 'shortbook'
  },
  {
    path: 'https://www.daum.net',
    name: '수강 신청 내역',
    value: 'enrolment'
  },
  {
    path: 'https://www.daum.net',
    name: '거래 내역',
    value: 'deal'
  },
  {
    path: '/coupon-list',
    name: '쿠폰 내역',
    value: 'coupon'
  },
  {
    path: 'https://www.daum.net',
    name: '회원 정보 수정',
    value: 'profile'
  },
  {
    path: 'https://www.daum.net',
    name: '기기 관리',
    value: 'device'
  },
  {
    path: 'https://www.daum.net',
    name: '로그아웃',
    value: 'logout'
  }
];

function SideBar() {
  const username = useUserName();
  // console.log(username);
  const couponcount = useCouponList();
  console.log(couponcount);

  return (
    <SidebarWrapper>
        <NameSidebar>안녕하세요, { username.loading ? 'Loading...' : username.userName}님 !</NameSidebar>
        <AvailableSidebarSub>사용 가능 쿠폰&nbsp;
          <SidebarCouponCount href='/coupon-list'>{ couponcount.loading ? 'Loading!' : couponcount.mycoupon.length }</SidebarCouponCount>
        </AvailableSidebarSub>
        <NavListWraaper className='navlist-wrapper'>
          {navList.map((item, index) => (
            <li>
              <NavLink
                key={ index}
                className={({ isActive }) => isActive ? "list-item active" : "list-item"}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </NavListWraaper>
    </SidebarWrapper>
  );
}

export default SideBar
