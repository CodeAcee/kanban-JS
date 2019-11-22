import card from '../card.json';

export  const getCards = () => {
  let cardData = JSON.stringify(card);
  return cardData;
 }

 console.log(getCards());