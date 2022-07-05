import styled from "styled-components";

const Side = styled.div`
  @media (min-width: 960px) {
    min-width: 210px;
    margin: 0 1rem;
    padding-right: 2rem;
  }

  flex: 1;
  width: 100%;
`;

function SideBar() {
  const listOfItems = ['내 강의 보기', '내 숏북 보기', '수강 신청 내역', '거래 내역', '쿠폰 내역', '회원 정보 수정', '기기 관리', '로그아웃']
  return (
    <Side>
        <h3>안녕하세요, 님</h3>
        <p>사용 가능 쿠폰 
          <a href=""></a>
        </p>
        <ul>
      {listOfItems.map((item) => (
          <li><a> {item} </a></li>
      ))}
        </ul>
    </Side>
  );
}

export default SideBar
