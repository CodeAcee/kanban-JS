import card from '../src/data/services/card';
import column from '../src/data/services/column';

const app = document.querySelector('#app');
app.classList.add('#app');

const board = document.createElement('div');
board.classList.add('board');
app.appendChild(board);


// const btn = document.createElement('button');
// btn.textContent = "+";
// btn.classList.add("header__btn");
// header.appendChild(btn);


// const columnArea = document.createElement('div');
// columnArea.classList.add('column__block');
// app.appendChild(columnArea);


// const generateColumn = () => {
//   const column = document.createElement('div');
//   column.classList.add('column');
//   columnArea.appendChild(column);
//   return column;
// }

// btn.addEventListener('click', generateColumn);

