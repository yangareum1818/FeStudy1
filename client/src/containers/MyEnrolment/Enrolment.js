import styled from "styled-components";
import CommonPageLayout from "../../Layout/CommonPageLayout";
import { rem } from "../../constants/style";
import Empty from "../Common/Empty";

const EnrolmentListBlock = styled.div`
  margin-bottom: ${rem.lgSpacing};
  padding: ${rem.lgSpacing} ${rem.lgSpacing};
  box-shadow: 0 6px 20px -2px rgb(155 155 160 / 30%),
    0 0 1px 0 rgb(110 110 115 / 30%);
`;

function Enrolment() {
  return (
    <CommonPageLayout>
      <EnrolmentListBlock>
        {/* 수강신청이 존재 하지 않을 때 */}
        <Empty
          text={
            "수강신청 내역이 존재하지 않습니다. 다양한 분야의 강의들을 둘러보고 수강신청 해보세요 :)"
          }
        />
      </EnrolmentListBlock>
    </CommonPageLayout>
  );
}

export default Enrolment;
