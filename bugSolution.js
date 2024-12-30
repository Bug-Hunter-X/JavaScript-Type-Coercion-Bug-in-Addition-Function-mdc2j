function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Error: Inputs must be numbers