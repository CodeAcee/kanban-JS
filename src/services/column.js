import column from "../data/column.json";

export const getColums = () => {
  const colData = JSON.stringify(column);
  return colData;
};
