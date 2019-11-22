let app = document.querySelector('#app')
app.classList.add('app');

let header = document.createElement('div');
header.classList.add('header');
app.appendChild(header);


let btn = document.createElement('button');
btn.textContent = "Add column";
btn.classList.add("btn");
header.appendChild(btn);


let columnArea = document.createElement('div');
columnArea.classList.add('block');
app.appendChild(columnArea);


let generateColumn = () => {
  let column = document.createElement('div');
  column.classList.add('column');
  columnArea.appendChild(column);
  return column;
}

btn.addEventListener('click', generateColumn);

