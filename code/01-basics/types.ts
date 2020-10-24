/* -------------------------------------------------------------------------- */
/*                 1.Intro - Using TS introduction(Types)                     */
/* -------------------------------------------------------------------------- */

const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}
button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});

/* -------------------------------------------------------------------------- */
/*                       2. Types - Core Syntax Features                      */
/* -------------------------------------------------------------------------- */

enum Designation {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const person: {
  name: string;
  age: number;
  role: [number, string];
  designation: number;
} = {
  name: 'Jonah',
  age: 22,
  role: [2, 'admin'],
  designation: Designation.READ_ONLY,
};
console.log('2.Types- Object: ', person);
console.log('2.Types- Typles: ', person.role);
console.log('2.Types- Enum: ', person.designation);

if (person.designation === Designation.ADMIN) {
  console.log('Enum validation -> User has ADMIN access.');
}
