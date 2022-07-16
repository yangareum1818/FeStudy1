import styled from "styled-components";


function CourseItem(info){
  const name = info.article.name
  const status = info.article.status
  const expired_at = info.article.expired_at
  return (
    <div className="coure-item">
      <a href="" target="_blank">
        <span className="coure-item-info">{status}</span>
        <div className="coure-item-title">{name}</div>
        <p className="coure-item-period">{expired_at}</p>
      </a>
    </div>
  )

  
}

export default CourseItem