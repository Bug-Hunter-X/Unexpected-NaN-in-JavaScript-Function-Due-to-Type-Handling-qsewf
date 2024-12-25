# Unexpected NaN in JavaScript Function Due to Type Handling

This repository demonstrates a common JavaScript error where an unexpected `NaN` value results from a function failing to handle type checking correctly. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version with robust type checking.

## Bug Description

The function `foo` attempts to handle `null`, `undefined`, and non-numeric inputs; however, the non-numeric input case should be more robust.  The initial implementation directly uses `typeof` check. This improved version uses `isNaN` after coercing the input to a number using `Number()`.

## Solution

The solution improves type checking using `isNaN` to prevent the NaN issue. This ensures that the function handles unexpected inputs more gracefully. 