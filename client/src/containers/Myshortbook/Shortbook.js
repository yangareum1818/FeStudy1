import styled from "styled-components";
import CommonPageLayout from "../../Layout/CommonPageLayout";
import { rem } from "../../constants/style";
import Title from "../Common/Title";
import Empty from "../Common/Empty";

const ShortbookListBlock = styled.div`
  margin-top: ${rem.xlSpacing};
`;

function Shortbook() {
  return (
    <CommonPageLayout>
      <Title text={"내 숏북 보기"} />
      <ShortbookListBlock>
        {/* 도서 목록이 존재 하지 않을 때 */}
        <Empty text={"도서 목록이 존재하지 않습니다."} />
      </ShortbookListBlock>
    </CommonPageLayout>
  )
}

export default Shortbook