import styled from "styled-components"

import Button from '../../components/Button';

const FormWrapper = styled.div`
  @media (min-width: 960px) {
    margin-bottom: 2rem;
    padding-right: 4rem;
    padding-top: 4rem;
    padding-bottom: 6rem;
    padding-left: 4rem;
    border-width: 0;
    box-shadow: 0 0.6rem 2rem -0.2rem rgb(155 155 160 / 30%);
  }

  box-sizing: border-box;
`;

const InfoBox = styled.div`
  @media (max-width: 959px) {
    &:first-child {
      label {
        width: calc(100% - 9.2rem);
      }
    }
  }

  margin-bottom: 6rem;

  &.checkbox__cell {
    padding-top: 4rem;
    border-top: .2rem solid #424242;

    .checkbox__note {
      margin-top: 1rem;
      color: #aaaaaf;
      font-size: 1.2rem;
    }
  
    label {
      position: relative;
      padding: 1rem 1rem 1rem 2.6rem;
      margin-right: auto;
      font-size: 1.4rem;
      font-weight: 400;
      
      input {
        position: absolute;
        top: 1.4rem;
        left: 0;
        margin: auto;
        width: 1.4rem;
        height: 1.4rem;
        box-sizing: border-box;
        border: .1rem solid #d3d3d3;
        background: #fff;
      }
    }
  }
`

const InfoTitle = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid #424242;


  h3 {
    font-size: 1.6rem;
  }
`

const InfoCont = styled.div`
  @media (min-width: 960px) {
    margin-top: 3rem;
  }

  margin-top: 2rem;
`
const InforContBlock = styled.div`  
  display: flex;
  align-items: flex-end;
  margin-bottom: 2.4rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    vertical-align: bottom;
    cursor: pointer;

    input {
      margin-top: .6rem;
    }
  }

  button {
    /* display: block;
    padding: 1rem 2.4rem;
    margin-left: .6rem;
    min-width: 8.6rem;
    background: #fff;
    border: 1px solid #6e6e73;
    color: #6e6e73;
    border-radius: .6rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer; */
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  margin-right: -.75rem;
  margin-left: -.75rem;
`;

const Btn = styled.button`
  flex-grow: .5;
  /* flex: 1; */
  display: inline-block;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-right: 1.24rem;
  padding-left: 1.25rem;
  margin: 0 .75rem;
  min-width: 8.6rem;
  background: #ed234b;
  color: #fff;
  border: .1rem solid #ed234b;
  border-radius: .4rem;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  transition: all .2s ease-out;
  cursor: pointer;
`;

const Label = styled.label`
  width: ${props => { 
    const width = props.width
  
    return props.width
  }};
`

function Information() {
  return (
    <FormWrapper>
      <form>
        <InfoBox>
          <InfoTitle>
            <h3>기본정보</h3>
          </InfoTitle>

          <InfoCont>
            <InforContBlock>
              <Label htmlFor="name" width='20rem'>
                이름<br/>
                <input id="name" type="text" placeholder="한글로 공백없이 입력해주세요." />
              </Label>
              <Button text={"변경"} backgroundColor="blue"></Button>
            </InforContBlock>

            <InforContBlock>
              <Label htmlFor="email" width='35rem'>
                이메일<br/>
                <input id="email" type="email" placeholder="실제로 사용하는 이메일 주소를 입력해주세요." />
              </Label>
              <button>변경</button>
            </InforContBlock>

            <InforContBlock>
              <Label htmlFor="phone" width='35rem'>
                휴대전화<br/>
                <input id="phone" type="tel" placeholder="새로운 전화번호를 추가해주세요." />
              </Label>
              <button>변경</button>
            </InforContBlock>

            <InforContBlock>
              <Label htmlFor="password" width='35rem'>
                비밀번호<br/>
                <input id="password" type="password" />
                {/* <span className="msg-error">비밀번호를 입력해주세요.</span> */}
              </Label>
              <button>변경</button>
            </InforContBlock>
          </InfoCont>
        </InfoBox>

        <InfoBox>
          <InfoTitle>
            <h3>추가정보</h3>
          </InfoTitle>

          <InfoCont>
            <InforContBlock>
              <Label htmlFor="belong" width='100%'>
                소속 직장/학교<br/>
                <input id="belong" type="text" placeholder="소속된 직장 / 학교를 입력해주세요.(선택)" />
              </Label>
            </InforContBlock>

            <InforContBlock>
              <Label htmlFor="duty" width='100%'>
                직무<br/>
                <input id="duty" type="text" placeholder="직무를 입력해주세요.(선택)" />
              </Label>
            </InforContBlock>
          </InfoCont>
        </InfoBox>

        <InfoBox>
          <InfoTitle>
            <h3>기본배송주소</h3>
          </InfoTitle>
          
          <InfoCont>
            <InforContBlock>
              <Label htmlFor="zipcode" width='40rem'>
                <input id="zipcode" type="text" placeholder="우편번호" />
              </Label>
              <Button text={ "검색" } backgroundColor="#6e6e73" width='calc(100% - 41.5rem)'></Button>
            </InforContBlock>

            <InforContBlock>
              <Label htmlFor="address" width='100%'>
                <input id="address" type="text" placeholder="'검색' 버튼으로 주소를 입력해주세요." />
              </Label>
            </InforContBlock>
            <InforContBlock>
              <Label htmlFor="detail_address" width='100%'>
                <input id="detail_address" type="text" placeholder="상세주소를 입력해주세요." />
              </Label>
            </InforContBlock>
          </InfoCont>
        </InfoBox>

        <InfoBox className="checkbox__cell">
          <p className="checkbox__note">할인 이벤트와 쿠폰 발급 등의 알림을 받으시고 혜택을 놓치지 마세요.</p>
          <InfoCont>
            <InforContBlock>
              <Label htmlFor="email-agree">
                <input id="email-agree" type="checkbox" />
                이메일 수신
              </Label>
            </InforContBlock>
            <InforContBlock>
              <Label htmlFor="phone-agree">
                <input id="phone-agree" type="checkbox" />
                문자메세지 수신
              </Label>
            </InforContBlock>
          </InfoCont>

          <BtnGroup>
            <Btn type="submit">수정 완료</Btn>
          </BtnGroup>
        </InfoBox>
      </form>
    </FormWrapper>
  )
}

export default Information