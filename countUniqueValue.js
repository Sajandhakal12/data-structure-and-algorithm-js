// multiple pointer solution my solution
const countUniqueValue = (arr) => {
  if (arr.length <= 1) return arr.length;
  let firstPointer = 0;
  let secondPointer = 1;
  let count = 1;
  while (firstPointer <= arr.length - 1 && secondPointer <= arr.length - 1) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      count = count + 1;
      if (firstPointer < secondPointer) firstPointer = secondPointer + 1;
      else secondPointer = firstPointer + 1;
    } else {
      if (firstPointer < secondPointer) {
        firstPointer = secondPointer + 1;
      } else {
        secondPointer = firstPointer + 1;
      }
    }
  }
  return count;
};

const countUniqueValue1 = (arr) => {
  if (arr.length <= 1) return arr.length;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValue1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
