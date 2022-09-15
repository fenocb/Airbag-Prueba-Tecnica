/**
 * Esta funcion  quita los números que se repiten en un arreglo
 * @param {number[]} ArrayDuplicate    El arreglo de valores que deseas depurar
 * @returns {number[]}  Array depurado
 */
const clearDuplicates = (ArrayDuplicate) => {
  const notDuplicateArray = new Set(ArrayDuplicate);
  return notDuplicateArray;
};
console.log(
  clearDuplicates([1, 1, 1, 2, 3, 3, 3, 5, 4, 8, 9, 6, 4, 151, 1, 21, 5, 16])
);
