import columns from './data/column.json';
import card from './data/card.json';


 export const getColums = () => {
 let colData = JSON.stringify(columns);
 return colData;
}

export const getCards = () => {
  let cardData = JSON.stringify(card);
  return cardData;
 }

console.log(getColums());
console.log(getCards());