function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x === undefined) {
    return 1; // Handle undefined case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-number case
  }
  return x + 1;
}

console.log(foo(null));   // Expected: 0
console.log(foo(undefined)); // Expected: 1
console.log(foo(5));     // Expected: 6
console.log(foo('abc'));  // Expected: NaN