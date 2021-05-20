const selectionSort = (arr) => { 
  const newArr = arr.slice();
  let n = newArr.length;
      
  for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i; j < n; j++) {
          if(newArr[j] < newArr[min]) {
              min = j; 
          }
       }
       if (min != i) {
           let tmp = newArr[i]; 
           newArr[i] = newArr[min];
           newArr[min] = tmp;      
      }
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));