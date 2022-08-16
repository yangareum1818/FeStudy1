import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MePanel = styled.div`
  @media (min-width: 720px) {
    align-items: center;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MePanelCell = styled.ul`
  @media (min-width: 720px) {
    margin-top: 0;
  }

  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 1.4rem;
  margin-right: -.5rem;
  margin-left: -.5rem;
`;
const MePanelItem = styled.li`
  margin: 0 .5rem;
`

const CategoryLink = styled(NavLink)`
    @media (min-width: 720px) {
      font-size: 1.4rem;
      padding-right: 1.2rem;
      padding-left: 1.2rem;
    }

    display: block;
    padding: .8rem 1.2rem;
    background-color: #f8f8f8;
    color: #9b9ba0;
    font-weight: 500;
    border-radius: 2rem;
    transition: all .3s ease-out;
    cursor: pointer;

    &:focus, &:hover {
      background: #e6e8eb;
    }
    
    &.active {
      background: #ff7450;
      color:#fff;
    }
`;

function TabItems() {
  const courseItem = [
    {
      name: 'all',
      text: '전체 목록',
    },
    {
      name: 'expected',
      text: '수강 예정',
    },
    {
      name: 'taking',
      text: '수강중',
    },
    {
      name: 'completion',
      text: '수강완료',
    },
  ];
  return (
    <MePanel>
      <MePanelCell>
        {courseItem.map((category) => (
          <MePanelItem>
            <CategoryLink key={category.name} className={({ isActive }) => (isActive ? "active" : "undefined")} to={category.name === 'all' ? '/' : `/${category.name}`}
            >
              {category.text}
            </CategoryLink>
          </MePanelItem>
        ))}
      </MePanelCell>
    </MePanel>
  );
}

export default TabItems
