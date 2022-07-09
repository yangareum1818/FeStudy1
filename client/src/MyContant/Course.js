function TabItems() {
  const items = ['전체 목록', '수강 예정', '수강중', '수강 완료'];
  return (
    <div className="me_panel">
      <ul className="me_panel_cell">
        {items.map((item) => (
          <li><a>{item}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default TabItems
