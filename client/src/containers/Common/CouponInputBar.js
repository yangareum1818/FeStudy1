import styled from "styled-components";

const CouponInputWrapper = styled.div`
`;

const CouponsInputBox = styled.div`
  @media (min-width: 960px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  height: 7rem;
  background: #f2f2f2;
  font-size: 1.4rem;
  border-radius: .4rem;

  label {
    @media (min-width: 960px) {
      display: inline-block;
      margin-right: 1.6rem;
    }

    display: none;
    color: #000;
  }

  input {
    flex: 1;
    border-color: #e3e3e3;
    border-radius: 0.4rem;
    background-color: #fff;
    color: #919191;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 9.2rem;
    height: 4rem;
    margin-left: 1.6rem;
    padding: 0;
    background: #2e2e2e;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)),#2e2e2e;
      cursor: default;
    }
  }
`;

function CouponInput() {
  
  return (
    <CouponInputWrapper>
      <form>
        <CouponsInputBox>
          <label htmlFor="test">
            쿠폰코드 입력
          </label>
          <input id="test" type="text" placeholder="쿠폰 코드를 입력해주세요." />
          <button type="submit" disabled="disabled" className="btn">쿠폰 등록</button>
        </CouponsInputBox>
      </form>
    </CouponInputWrapper>
  );
}

export default CouponInput
