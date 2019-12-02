import { getCards } from "../src/services/card";
import { getColums } from "../src/services/column";
import { renderColumn } from '../src/render/render_column';
import { renderCard } from '../src/render/render_card';

const app = document.getElementById('app');
const board = document.createElement('div');
board.classList.add('column__block');
app.appendChild(board);

const columns = getColums();
const cards = getCards();

columns.forEach((column) => {
  const columnEl = renderColumn(column);
  cards.filter((card) => card.colId === column.id)
        .map(renderCard)
        .forEach(card => columnEl.append(card))  
  board.append(columnEl);
})

