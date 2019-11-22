import column from '../column.json';

 export const getColums = () => {
 let colData = JSON.stringify(column);
 return colData;
}
console.log(getColums());