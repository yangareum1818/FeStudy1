import styled, {css} from "styled-components"
import { rem } from '../../constants/style';
import DefaultButton, { Button } from '../../components/Button';
import InputBox, { CheckBox } from '../../components/Input'

// Strong Line
const MDivider = styled.h3`
  padding-bottom: ${rem.lgSpacing};
  margin-bottom: ${rem.lgSpacing};
  width: 100%;
  font-size: 1.6rem;
  border-bottom: .2rem solid #424242;
`;

const FormWrapper = styled.div`
  @media (min-width: 960px) {
    margin-bottom: ${rem.lgSpacing};
    padding: ${rem.xxlSpacing} ${rem.xxlSpacing} ${rem.xxxlSpacing};
    border-width: 0;
    box-shadow: 0 .6rem 2rem -.2rem rgb(155 155 160 / 30%);
  }
`;

const InfoBox = styled.div`
  margin-bottom: ${rem.xxxlSpacing};
`;

const InfoContent = styled.div`
  @media (min-width: 960px) {
    margin-top: ${rem.xlSpacing};
    font-size: 1.4rem;
  }

  margin-top: ${rem.lgSpacing};
`

const InfoCont = styled.div`
  margin-bottom: ${rem.lgSpacing};
  display: flex;
  align-items: flex-end;
`;

const InfoText = styled.div`
  font-size: 1.2rem;
  margin-top: ${rem.xlSpacing};
  padding: ${rem.xlSpacing} ${rem.zero};
  border-top: .1rem solid #e6e8eb;
  color: #aaaaaf;

  strong {
    display: block;
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
  margin-top: ${rem.smSpacing};
  color: #aaaaaf;
`;

// Section04
const Agreement = styled(InfoBox)`
  @media (min-width: 960px) {
    padding-top: ${rem.xxlSpacing};
    border-top: 0.2rem solid #424242;
  }
  @media (max-width: 959px) {
    margin-top: ${rem.xlSpacing};
    padding-top: ${rem.xxlSpacing};
    border-top: 0.1rem solid #ccced2;
  }
`;

const AgreeTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #282828;
  font-size: 1.4rem;
`;

const CheckMoreBtn = styled.button`
  font-size: 1.2rem;
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: ease-out;
  padding: 0 0.4rem;
  border: 0.1rem solid #9b9ba0;
  color: #9b9ba0;

  :hover {
    color: #ff7450;
    border-color: #ff7450;
  }
`

const CheckBoxWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// 계정 삭제 버튼
const Delete = styled.div`
  margin-top: -2rem;
`;

const DeleteBtn = styled.a`
  color: #9b9ba0;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
`;

function Information() {
  return (
      <FormWrapper>
        <form>
          <InfoBox>
            <MDivider>기본 정보</MDivider>
            
            <InfoContent>
              <InfoCont>
                <InputBox text={"이름"} flexgrow={".1"} />
                <Button text={"변경"} />
              </InfoCont>
            
              <InfoCont>
                <InputBox type={"email"} text={"이메일"} flexgrow={".5"} />
                <Button text={"변경"} />
              </InfoCont>
            
              <InfoCont>
                <InputBox type={"tel"} text={"휴대전화"} flexgrow={".5"} />
                <Button text={"변경"} />
              </InfoCont>
            
              <InfoCont>
                <InputBox type={"password"} text={"비밀번호"} flexgrow={".5"} />
                <Button text={"변경"} touch />
              </InfoCont> 
            
            </InfoContent>
          </InfoBox>

          <InfoBox>
            <MDivider>추가 정보</MDivider>
            
            <InfoContent>
              <InfoCont>
                <InputBox color={"#aaaaaf"} text={"소속 직장/학교"} placeholder={"소속된 직장/학교를 입력해주세요. (선택) "} />
              </InfoCont>
            
              <InfoCont>
                <InputBox color={"#aaaaaf"} text={"직무"} placeholder={"직무를 입력해주세요. (선택)"} />
              </InfoCont>
            
              <InfoText>
                <strong>[추가 정보 등록 시 유의사항]</strong>
                추가 정보(소속 직장 또는 학교, 직무 정보)는 강의 추천의 목적으로만 사용됩니다.
              </InfoText>
            
            </InfoContent>
          </InfoBox>
        
          <InfoBox>
            <MDivider>기본 배송 주소</MDivider>
            
            <InfoContent>
              <InfoCont>
                <InputBox flexgrow={"6"} placeholder={"우편번호"} />
                <Button text={"검색"} flexgrow={"4"} backgroundColor={"#6e6e73"} color={"#fff"} />
              </InfoCont>
            
              <InfoCont>
                <InputBox placeholder={"'검색' 버튼으로 주소를 검색해주세요."} />
              </InfoCont>
              <InfoCont>
                <InputBox placeholder={"상세주소를 입력해주세요."} />
              </InfoCont>
            
              <Description>
                <p>*강의 구매 시, 배송상품(학습기기)가 포함된 경우 배송비는 패스트캠퍼스가 부담합니다.</p>
                <p>*단, 배송상품 출고 후 단순 변심에 의한 환불시 왕복배송비는 고객님 부담이므로 결제금액에서 차감 후 환불됩니다.</p>
              </Description>
            </InfoContent>
          </InfoBox>

          <Agreement>
            <AgreeTitle>마케팅 수신 동의에 동의합니다.
              <CheckMoreBtn>약관보기</CheckMoreBtn>
            </AgreeTitle>
            <Description>
              <p>할인 이벤트와 쿠폰 발급 등의 알림을 받으시고 혜택을 놓치지 마세요.</p>
            </Description>
          
            <CheckBoxWrapper>
              <CheckBox text={"이메일 수신"} />
              <CheckBox text={"문자메세지 수신"} />
            </CheckBoxWrapper>
            
            <DefaultButton type={'submit'} text={"수정 완료"} grow={".5"} touch />
          </Agreement>
        
          <Delete>
            <DeleteBtn>계정 삭제하기</DeleteBtn>
          </Delete>
        </form>
      </FormWrapper>
  )
}

export default Information