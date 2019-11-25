export const generateColumn = (column) => {
  const columnEl = document.createrElement('div');
  columnEl.classlist.add('column');
  columnEl.setAttribute('column-id', column.id);

  columnName = document.createElement('div');
  columnName.innerHTML = column.name;

  columnEl.appendChild(columnName);

  return columnEl;
};
