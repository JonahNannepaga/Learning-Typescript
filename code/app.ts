function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log('3.Union Types(number):', combine(3, 4));
console.log('3.Union Types(string):', combine('Jonah', 'Joe'));
