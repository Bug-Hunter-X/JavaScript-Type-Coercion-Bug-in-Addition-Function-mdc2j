# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion in arithmetic operations. The `foo` function is intended to add two numbers, but due to JavaScript's loose typing, it concatenates strings when one of the arguments is a string.

## Bug Description
The `bug.js` file contains a function that adds two numbers. However, if one of the inputs is a string, the function will concatenate instead of adding numerically.  This is caused by JavaScript's automatic type coercion behavior. 

## Solution
The solution (`bugSolution.js`) addresses this by explicitly checking the types of the arguments before performing the addition operation. This prevents unexpected string concatenation and ensures correct numerical addition. 

## How to reproduce
1. Clone this repository.
2. Run `bug.js` using Node.js (or a browser's console): `node bug.js` 
3. Observe the unexpected output.
4. Run `bugSolution.js` using Node.js: `node bugSolution.js`. Observe the corrected output.