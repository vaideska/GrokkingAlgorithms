//  4.1
const getTailArr = (arr) => {
  const newArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const sum = (arr) => {
  if (arr.length === 0) return 0;
  return arr[0] + sum(getTailArr(arr));
}

console.log("Рекурсивный способ суммы чисел в массиве:", sum([1, 2, 3, 4]));

//  4.2

const lenArr = (arr) => {
  if (arr.length === 0) return 0;
  return 1 + lenArr(getTailArr(arr));
}

console.log("Рекурсивны подсчет кол-ва эл-ов в массиве:", lenArr([1, 2, 3, 4, 5]));

//  4.3

const max = (arr) => {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  sub_max = max(getTailArr(arr));
  return arr[0] > sub_max ? arr[0] : sub_max;
}

console.log("Наибольший элемент в массиве:", max([1, 2, 6, 4, 9, 2, 4, 5]));