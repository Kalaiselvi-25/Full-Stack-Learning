function secondLargest(arr) {
  if (arr.length < 2) return null;
  let first = -Infinity;
  let second = -Infinity;
  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}
console.log(secondLargest([10, 5, 20, 8, 20])); 
console.log(secondLargest([5, 5, 5]));          