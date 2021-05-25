const iterFact = (n) => {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("itaration method:", iterFact(5));

const recursionFact = (n) => {
  if (n === 0) return 1;
  return n * recursionFact(n - 1);
}

console.log("recursion method", recursionFact(5));

const tailRecursionFact = (n) => {
  const facTimes = (n, acc) => {
    return (n === 0) ? acc : facTimes(n - 1, acc * n);
  }
  return facTimes(n, 1);
}

console.log("tail recursion method", tailRecursionFact(5));
