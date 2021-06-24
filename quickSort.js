const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const [ , ...tailArr] = array;
  const less = tailArr.filter((elem) => elem <= pivot);
  const greater = tailArr.filter((elem) => elem > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log("quickSort:", quickSort([5, 3, 6, 2, 8, 0, 2, 7]));