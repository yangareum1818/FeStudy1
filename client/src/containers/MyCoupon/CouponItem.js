import styled from "styled-components"

const CouponItemBox = styled.div`
  padding: 2.4rem;
  border: .1rem solid #e3e3e3;
  border-radius: 0.6rem;
  color: #2e2e2e;

  & + & {
    margin-top: 2rem;
  }

  .coupon_item {
    font-size: 1.4rem;
    line-height: 2.4rem;

    .coupon_title {
      .title_days {
        strong {
          margin-right: .8rem;
          color: #ed234b;
          font-weight: 700;
        }
        span {
          color: #ababab;
        }
      }

      .title {
        margin-top: .8rem;
        font-size: 2rem;
        line-height: 3rem;
      }
    }

    .coupon_sub_title {
      margin-top: 2rem;
      padding-top: 2rem;
      font-size: 1.6rem;
      border-top: 1px solid #e3e3e3;

      .sub_title_box {
        display: flex;
        margin-top: 0.3rem;

        .sub_title {
          margin-right: .8rem;
        }
      }
    }
  }
`;

function CouponItem(coupon) {


  const { title, showAt, hideAt, discount, description } = coupon.article;
 
    const show = new Date(showAt).toISOString().split("T")[0];
    const hide = new Date(hideAt).toISOString().replace("T", " ").replace(/\..*/, ''); 
  
  const toDay = function (from, to) {
    const fromDate = new Date(from);
    const toDate = new Date(to); 

    // 까지 - 부터
    const diffDate = toDate.getTime() - fromDate.getTime();
    // 남은 일수
    const DateDiff = Math.floor(Math.abs(diffDate / (1000 * 60 * 60)))

    if (DateDiff >= 365 * 24) { 
      // 년 단위로 나타낼 것임.
      return Math.floor(DateDiff / (365 * 24)) + '년'
    }

    if (DateDiff >= 30 * 24) { 
      // 월 단위
      return Math.floor(DateDiff / (30 * 24)) + '달'
    }

    if (DateDiff >= 7 * 24) {
      // 주 단위
      return Math.floor(DateDiff / (7 * 24)) + '주'
    }

    if (DateDiff >= 24) { 
      // 주 단위
      return Math.floor(DateDiff / 24) + '일'
    }
    return DateDiff + '시간'
  }
  

  return (
    <CouponItemBox>
      <div className="coupon_item">
        <div className="coupon_title">
          <div className="title_days">
            <strong>D - {toDay(showAt, hideAt)}</strong>
            <span>({show} ~ {hide} 까지)</span>
          </div>
          <p className="title">{title}</p>
        </div>
        <div className="coupon_sub_title">
          <p className="sub_title_discount">{discount}</p>
          <div className="sub_title_box">
            <p className="sub_title">적용대상 : </p>
            <p className="sub_cont">{description}</p>
          </div>
        </div>
      </div>
    </CouponItemBox>
  )
}

export default CouponItem