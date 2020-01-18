export const renderCard = card => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.setAttribute('data-id', card.id);
  cardEl.setAttribute('draggable', true);

  const cardHeader = document.createElement('h3');
  cardHeader.innerHTML = card.name;

  const cardText = document.createElement('div');
  cardText.innerHTML = card.description;

  cardEl.appendChild(cardHeader);
  cardEl.appendChild(cardText);

  cardEl.addEventListener('dragstart', dragStart);

  return cardEl;
};

const dragStart = event => {
  event.dataTransfer.setData('content', event.target.dataset.id);
  console.log(event.target);
};
