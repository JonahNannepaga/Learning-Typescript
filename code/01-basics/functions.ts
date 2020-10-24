/* -------------------------------------------------------------------------- */
/*                           Functions types - Void                           */
/* -------------------------------------------------------------------------- */

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printAns(num: number): void {
  console.log('Result 10 + 10 = ', num);
}

printAns(add(10, 10));

/* -------------------------------------------------------------------------- */
/*                                Function type                               */
/* -------------------------------------------------------------------------- */

// This accepts any function, this may lead to runtime errors

// let combineValues: Function;
// combineValues = add;
// console.log(combineValues(8, 8));

//Making this more specific by giving types to parameters
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

/* -------------------------------------------------------------------------- */
/*                           Function with callbacks                          */
/* -------------------------------------------------------------------------- */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(10, 20, (result) => {
  console.log('Result from callback: ', result);
});
