import { dragOver, drop } from '../utils/dragNdrop';

export const renderColumn = column => {
  const columnEl = document.createElement('div');
  const columnName = document.createElement('div');
  const columnTitle = document.createElement('p');
  const columnButton = document.createElement('button');

  columnButton.classList.add('column-btn');
  columnButton.innerHTML = '&#10010';

  columnTitle.classList.add('column-title');
  columnEl.classList.add('column');
  columnEl.setAttribute('column-id', column.id);
  columnTitle.innerHTML = column.name;

  columnTitle.append(columnButton);
  columnEl.append(columnName);
  columnName.append(columnTitle);

  columnEl.addEventListener('dragover', dragOver);
  columnEl.addEventListener('drop', drop);

  return columnEl;
};
