export const renderCard = card => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.setAttribute('card-id', card.id);
  cardEl.setAttribute('draggable', true);

  const cardHeader = document.createElement('h3');
  cardHeader.innerHTML = card.name;

  const cardText = document.createElement('div');
  cardText.innerHTML = card.description;

  cardEl.appendChild(cardHeader);
  cardEl.appendChild(cardText);

  cardEl.addEventListener('dragstart', event => {
    event.dataTransfer.setData('element', JSON.stringify({card: card.id, column: card.colId}));
  })

  return cardEl;
}
