import styled from "styled-components";
import { NavLink } from "react-router-dom";

import useCouponList from "../hooks/useCouponList";
import useUserInfo from "../hooks/useUserInfo";

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
  margin-top: 0.8rem;
  font-size: 1.4rem;
  color: #424242;
`;

const SidebarCouponCount = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  color: #ed234b;
  text-decoration: underline;
`;

const SidebarListWraaper = styled.ul`
  margin-top: 3.4rem;
  font-size: 1.6rem;
  border-top: 0.1rem solid #e6e8eb;
`;

const SidebarList = styled.li`
  padding: 2rem 0 1.9rem;
  border-bottom: 0.1rem solid #e6e8eb;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  color: #282828;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }

  &:hover,
  &:focus {
    color: #ed234b;
  }
`;

const navList = [
  {
    path: "/",
    name: "내 강의 보기",
    value: "course-list",
  },
  {
    path: "/shortbook",
    name: "내 숏북 보기",
    value: "shortbook",
  },
  {
    path: "/enrolment",
    name: "수강 신청 내역",
    value: "enrolment",
  },
  {
    path: "https://www.daum.net",
    name: "거래 내역",
    value: "deal",
  },
  {
    path: "/coupon",
    name: "쿠폰 내역",
    value: "coupon-list",
  },
  {
    path: "/information",
    name: "회원 정보 수정",
    value: "information",
  },
  {
    path: "https://www.daum.net",
    name: "기기 관리",
    value: "device",
  },
  {
    path: "https://www.daum.net",
    name: "로그아웃",
    value: "logout",
  },
];

function SideBar() {
  const userInfo = useUserInfo();
  const couponcount = useCouponList();

  if (userInfo.isError) {
    return <div> Error! </div>;
  }

  return (
    <SidebarWrapper>
      <NameSidebar>
        안녕하세요,{" "}
        {!userInfo.loading && !userInfo.isError
          ? userInfo.info.name
          : "Loading.."}
        님!
      </NameSidebar>
      <AvailableSidebarSub>
        사용 가능 쿠폰&nbsp;
        <SidebarCouponCount href="/coupon">
          {couponcount.loading ? "Loading!" : couponcount.mycoupon.length}
        </SidebarCouponCount>
      </AvailableSidebarSub>
      <SidebarListWraaper>
        {navList.map((item) => (
          <SidebarList key={item.name}>
            <SidebarLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.path}
            >
              {item.name}
            </SidebarLink>
          </SidebarList>
        ))}
      </SidebarListWraaper>
    </SidebarWrapper>
  );
}

export default SideBar;
