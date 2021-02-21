function shift(array, direction, num) {
    var times = num > array.length ? num % array.length : n;
    return array.concat(array.splice(0, (direction ==='right' ? array.length - times : times)));
 }

console.log("shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)==>", shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))
console.log("shift([1, 2, 3, 4 ,5], 'right', 3)==>", shift([1, 2, 3, 4 ,5], 'right', 3))