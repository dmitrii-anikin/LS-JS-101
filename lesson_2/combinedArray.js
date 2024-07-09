function merge(array1, array2) {
  let combinedArray = [];
  for (let i = 0; i < array1.length; i++) {
    combinedArray.push(array1[i]);
    combinedArray.push(array2[i]);
  }
  return combinedArray;
}

console.log(merge([1, 2, 3], [4, 5, 6]));
