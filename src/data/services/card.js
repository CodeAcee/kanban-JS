import card from "../card.json";

export const getCards = () => {
  const cardData = JSON.stringify(card);
  return cardData;
};
