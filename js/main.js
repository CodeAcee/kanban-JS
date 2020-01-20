import { getCards } from '../src/services/card';
import { getColums } from '../src/services/column';
import { renderColumn } from '../src/render/render_column';
import { renderCard } from '../src/render/render_card';

const app = document.getElementById('app');
const board = document.createElement('div');
const title = document.createElement('h1');
title.innerHTML = "Task Board";
title.classList.add("title")
board.classList.add('column-block');
app.appendChild(board);
board.append(title)


const columns = getColums();
const cards = getCards();

columns.forEach(column => {
  const columnEl = renderColumn(column);

  cards
    .filter(card => card.colId === column.id)
    .map(renderCard)
    .forEach(card => columnEl.append(card));
  board.append(columnEl);
});
