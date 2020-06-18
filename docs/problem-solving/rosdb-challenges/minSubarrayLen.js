function minSubarrayLen(arr, num) {
  if (arr.length === 0) return 0;
  if (arr.some(i => i >= num)) return 1;

  let tempSum = 0;
  let subarray = 2;
  let tempArr = [];
  let index = 0;

  const subarrayLen = () => {
    return subarray === arr.length
      ? (tempArr = arr)
      : (tempArr = arr.slice(index, index + subarray));
  };

  while (subarray < arr.length + 1) {
    subarrayLen();

    tempSum = tempArr.reduce((a, b) => a + b, 0);

    if (tempSum >= num) return subarray;

    if (index === arr.length - 2) {
      subarray++;
      index = 0;
    } else {
      index++;
    }
  }

  return 0;
}

module.exports = minSubarrayLen;

// eslint-disable-next-line no-console
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
