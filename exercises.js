//  4.1
const sum = (arr) => {
  if (arr.length === 0) return 0;
  const [ , ...tailArr] = arr;
  return arr[0] + sum(tailArr);
}

console.log("Рекурсивный способ суммы чисел в массиве:", sum([1, 2, 3, 4]));

//  4.2

const lenArr = (arr) => {
  if (arr.length === 0) return 0;
  const [ , ...tailArr] = arr;
  return 1 + lenArr(tailArr);
}

console.log("Рекурсивны подсчет кол-ва эл-ов в массиве:", lenArr([1, 2, 3, 4, 5]));

//  4.3

const max = (arr) => {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  const [ , ...tailArr] = arr;
  sub_max = max(tailArr);
  return arr[0] > sub_max ? arr[0] : sub_max;
}

console.log("Наибольший элемент в массиве:", max([1, 2, 6, 4, 9, 2, 4, 5]));