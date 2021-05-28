const getTailArr = (arr) => {
  const newArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const less = getTailArr(array).filter((elem) => elem <= pivot);
  const greater = getTailArr(array).filter((elem) => elem > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log("quickSort:", quickSort([5, 3, 6, 2, 8, 0, 2, 7]));