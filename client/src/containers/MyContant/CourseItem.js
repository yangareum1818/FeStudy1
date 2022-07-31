import styled from "styled-components";

const CoureItemBox = styled.div`
  overflow: hidden;
  border: 0.1rem solid #e6e8eb;
  border-radius: 0.6rem;
  animation: fade-in .2s ease-in-out forwards;

  & ~ & {
    margin-top: 3rem;
  }

  .coure_item {
    @media (min-width: 960px) {
      margin: 0 2rem;
      padding: 2rem 0;
    }

    display: block;
    margin: 0 1.6rem;
    padding: 1.6rem 0;
    font-size: 1.2rem;
  }
`

function CourseItem(info){
  const name = info.article.name
  const status = info.article.status
  const expired_at = info.article.expired_at
  
  return (
    <CoureItemBox>
      <a href="#none" className="coure_item" target="_blank">
        <span className="coure_item_info">{status}</span>
        <div className="coure_item_title">{name}</div>
        <p className="coure_item_period">{expired_at}</p>
      </a>
    </CoureItemBox>
  )

  
}

export default CourseItem