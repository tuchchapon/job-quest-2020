function secondMax(arr) {
  if (arr.length === 1) return arr[0];
  if (!arr[0]) return "Error!";
  if (Math.max.apply(null, arr) === Math.min.apply(null, arr)) return arr[0];
  arr.splice(arr.indexOf(Math.max.apply(null, arr)));
  return Math.max.apply(null, arr);
}

console.log("secondMax =", secondMax([80, 5, 40, 56, 189]));
