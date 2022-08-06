import styled from "styled-components";
import {  Route, Routes } from "react-router-dom";

import CourseList from "../containers/MyContant/CourseList";
import CouponList from "../containers/MyCoupon/CouponList";
import Information from "../containers/MyInformation/Information";

const ContentSectionLayout = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  width: 100%;
  min-height: 100vh;
`;


function ContentLayout() {
  return (
    <ContentSectionLayout>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="coupon-list" element={<CouponList />} />
        <Route path="information" element={<Information />} />
      </Routes>
    </ContentSectionLayout>
  );
}

export default ContentLayout
