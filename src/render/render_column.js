export const renderColumn = column => {
  const columnEl = document.createElement('div');
  columnEl.classList.add('column');
  columnEl.setAttribute('column-id', column.id);

  const columnName = document.createElement('div');
  columnName.innerHTML = column.name;

  columnEl.appendChild(columnName);

  return columnEl;
};
