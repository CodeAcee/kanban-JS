export const renderColumn = column => {
  const columnEl = document.createElement('div');
  const columnName = document.createElement('div');
  const columnTitle = document.createElement('p');
  const columnButton = document.createElement('button');

  columnButton.classList.add = 'column__btn'
  columnButton.innerHTML = '&#10010'


  columnTitle.classList.add('column__title')
  columnEl.classList.add('column');
  columnEl.setAttribute('column-id', column.id);
  columnTitle.innerHTML = column.name;

  columnTitle.append(columnButton)
  columnEl.append(columnName);
  columnName.append(columnTitle);

  columnEl.addEventListener('dragover', dragOver);

  columnEl.addEventListener('drop', function(event) {
    const cardId = event.dataTransfer.getData('content');
    const cardElement = document.querySelector(`[data-id="${cardId}"]`);
    columnEl.append(cardElement);
  });

  return columnEl;
};

const dragOver = (event) => {
  event.preventDefault();
  
}