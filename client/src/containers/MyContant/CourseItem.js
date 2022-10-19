import styled from "styled-components";

const CoureWrapper = styled.div`
  overflow: hidden;
  border: 0.1rem solid #e6e8eb;
  border-radius: 0.6rem;
  animation: fade-in .2s ease-in-out forwards;

  & ~ & {
    margin-top: 3rem;
  }
`
const CoureItemBox = styled.div`
  @media (min-width: 960px) {
    margin: 0 2rem;
    padding: 2rem 0;
  }

  display: block;
  margin: 0 1.6rem;
  padding: 1.6rem 0;
  font-size: 1.2rem;
`;

const CoureTitle = styled.h4`
  display: inline-flex;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
  color: #282828;
  font-size: 1.4rem;
  background-position: 0 100%;
  background-size: 0 2.4rem;
  background-image: linear-gradient(transparent calc(100% - 0.8rem), rgba(255, 116, 80, 0.25) 0.8rem);
  background-repeat: no-repeat;
  transition: all .4s ease-out;
`;

const CoureSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CoureSubText = styled.span`
  display: inline-block;
  margin-right: 0.8rem;
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: 0.1rem solid #ff7450;
  border-radius: 1.2rem;
  vertical-align: top;

  background-color: #ff7450;
  color: #fff;
`;

const CourePeriod = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: 1.2rem;
  color: #6e6e73;
  line-height: 1.8rem;
`;


function CourseItem({ article }) {
  // const name = article.name;
  // const status = article.status;
  // const expired_at = article.expired_at;
  const { name, status, expired_at } = article;
  const period = new Date(expired_at).toISOString().split("T")[0];
  
  return (
    <CoureWrapper>
      <CoureItemBox>
        <CoureSubTitle>
          <CoureSubText>{status}</CoureSubText>
        </CoureSubTitle>
        <CoureTitle>{name}</CoureTitle>
        <CourePeriod>수강 기간 : {period} 까지</CourePeriod>
      </CoureItemBox>
    </CoureWrapper>
  )
}

export default CourseItem