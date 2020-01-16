export const renderColumn = column => {
  const columnEl = document.createElement("div");
  columnEl.classList.add("column");
  columnEl.setAttribute("column-id", column.id);

  const columnName = document.createElement("div");
  columnName.innerHTML = column.name;

  columnEl.append(columnName);

  columnEl.addEventListener("dragover", function(event) {
    event.preventDefault();
    console.log("dragOver", event);
  });

  columnEl.addEventListener("drop", function(event) {
    
    console.log("drop", JSON.parse(event.dataTransfer.getData("element")));
  });

  return columnEl;
};
