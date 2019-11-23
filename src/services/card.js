import card from "../data/card.json";

export const getCards = () => {
  const cardData = JSON.stringify(card);
  return cardData;
};
