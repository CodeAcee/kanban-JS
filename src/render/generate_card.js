export const generateCard = (card) => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.setAttribute('card-id', card.id);

  const cardHeader = document.createElement('h3');
  cardHeader.innerHTML = card.name;

  const cardText = document.createElement('div');
  cardText.innerHTML = card.text;

  cardEl.appendChild(cardHeader);
  cardEl.appendChild(cardText);
}