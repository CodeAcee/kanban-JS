export const dragCard = event => {
  event.dataTransfer.setData('content', event.target.dataset.id);
};

export const dragOver = event => {
  event.preventDefault();
};

export const dropCard = event => {
  const cardId = event.dataTransfer.getData('content');
  const cardElement = document.querySelector(`[data-id="${cardId}"]`);
  event.target.append(cardElement);
}
