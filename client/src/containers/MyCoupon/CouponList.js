import styled from "styled-components";

import CommonPageLayout from "../../Layout/CommonPageLayout";
import CouponItem from "./CouponItem";
import CouponInputBar from "../Common/CouponInputBar"
import useCouponList from "../../hooks/useCouponList";

const CouponsListBlock = styled.div`
  @media (min-width: 960px) {
    margin-top: 2.4rem;
  }

  margin-top: 2rem;
`;

function Coupon() {
  const couponlist = useCouponList();
  
  if (couponlist.isError) { 
    return <div> Error! </div>
  }

  return (
    <CommonPageLayout>
      <CouponInputBar />
      <CouponsListBlock>
        {(!couponlist.loading && couponlist.mycoupon && !couponlist.isError) ? couponlist.mycoupon.map((coupon) => (
          <CouponItem coupon={coupon} />
        )) : (<div>Loaing...</div>)}
      </CouponsListBlock>
    </CommonPageLayout>
  );
}

export default Coupon
