export const renderColumn = column => {
  const columnEl = document.createElement('div');
  const columnName = document.createElement('div');
  const columnTitle = document.createElement('p');
  
  columnTitle.classList.add('column__title')
  columnEl.classList.add('column');
  columnEl.setAttribute('column-id', column.id);
  columnTitle.innerHTML = column.name;
  columnEl.append(columnName);
  columnName.append(columnTitle);

  columnEl.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  columnEl.addEventListener('drop', function(event) {
    const cardId = event.dataTransfer.getData('content');
    const cardElement = document.querySelector(`[data-id="${cardId}"]`);
    columnEl.append(cardElement);
  });

  return columnEl;
};
