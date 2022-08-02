import styled from "styled-components"
import { rem } from '../../components/Variables'
import Button from '../../components/Button';
import InputBox from '../../components/Input'

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
            
            </InfoContent>
          </InfoBox>
        </form>
      </FormWrapper>
  )
}

export default Information