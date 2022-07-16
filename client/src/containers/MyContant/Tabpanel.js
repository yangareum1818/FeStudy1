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
  margin-top: 14px;
  margin-right: -5px;
  margin-left: -5px;
`;
const MePanelItem = styled.li`
  margin-right: 5px;
  margin-left: 5px;

  &.active {
    background: #ff7450;
    color:#fff;
  }

  .me-panelitem-link {
    @media (min-width: 720px) {
      font-size: 14px;
      padding-right: 14px;
      padding-left: 14px;
    }

    display: block;
    padding: 10px 14px;
    background-color: #f8f8f8;
    color: #9b9ba0;
    font-weight: 500;
    border-radius: 20px;
    transition: all .3s ease-out;
    cursor: pointer;

    &:focus, &:hover {
      background: #e6e8eb;
    }
  }
`

function TabItems() {
  const items = ['전체 목록', '수강 예정', '수강중', '수강 완료'];
  return (
    <MePanel>
      <MePanelCell>
        {items.map((item) => (
          <MePanelItem>
            <a className="me-panelitem-link">{item}</a>
          </MePanelItem>
        ))}
      </MePanelCell>
    </MePanel>
  );
}

export default TabItems
