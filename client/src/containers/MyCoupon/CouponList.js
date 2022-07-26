import styled from "styled-components";
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
  
  return (
    <>
      <CouponInputBar />
      <CouponsListBlock>
        {(!couponlist.loading && couponlist.mycoupon && !couponlist.isError) ? couponlist.mycoupon.map((coupon) => (
          <CouponItem article={coupon} />
        )) : (<div>Loaing...</div>) | console.log(couponlist.isError)}
      </CouponsListBlock>
    </>
  );
}

export default Coupon
