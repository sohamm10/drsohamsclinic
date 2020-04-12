// function grupms() {

//      console.log('hi there');
//      console.log('you again');
//      console.log('theis is the last time');

// }

// grupms();

// for (let i = 0; i < 5; i++) {
//      grupms();

// }

// function welcome(name) {

//      console.log(`HI there good morning,${name}`);

// }
// welcome('Abhi');

// function rollDie() {

//      let roll = Math.floor(Math.random() * 6) + 1;
//      console.log(`Rolled:  ${roll}`);

// }

// function throwDice(numRolls) {

//      for (let i = 0; i < numRolls; i++) {
//           rollDie();
//      }

// }

// function lol() {

//      let person = "Tom";
//      const age = 34;
//      var color = "Teal";
// }

// console.log(person);

// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     var double = num * 2;
//     result.push(double);
//   }

//   return result;
// }

// function add(x,y){

//      return x+y;

// }

// const sum = function (x, y) {
//   return x + y;
// };

// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetweenFunc(1, 10);

// isChild(7);

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// function printTriple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTriple);
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 12];

// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// console.log(odds);
// console.log(evens);


const nums = [3, 4, 5, 6, 7];

const total = nums.reduce((total, curVal) => {

     return total * curVal;


})