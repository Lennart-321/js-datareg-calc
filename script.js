//1.
// const name = window.prompt("Whats your name?");
// window.alert(`Hello ${name}`);

// //2. 3.
// let yearOfBirth;
// const yearNow = new Date().getFullYear();
// let validYear = "";
// do {
//   const yearOfBirthStr = window.prompt("What year where you born?" + validYear);
//   yearOfBirth = Number(yearOfBirthStr);
//   validYear = " (Enter valid year, please!)";
// } while (
//   isNaN(yearOfBirth) ||
//   typeof yearOfBirth != "number" ||
//   yearOfBirth < 1 ||
//   yearNow < yearOfBirth
// );
// if (yearOfBirth < 100) {
//   yearOfBirth += Math.floor(yearNow / 100) * 100;
//   if (yearOfBirth > yearNow) {
//     yearOfBirth -= 100;
//   }
// }
// window.alert(
//   `You are born ${yearOfBirth} and are ${yearNow - yearOfBirth} years old.`
// );

//4. 5.
const numberStr = window.prompt("Enter 2 numbers!");
//const nums = numberStr.split(new RegExp("[, ]+"), 2);
//const nums = numberStr.split("[, ]+", 2);
const nums = numberStr.split(" ", 2);
const num1 = parseInt(nums[0]);
const num2 = parseInt(nums[1]);
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
// console.log(`${nums[0]} + ${nums[1]} = ${nums[0] + nums[1]}`);
// console.log(`${nums[0]} - ${nums[1]} = ${nums[0] - nums[1]}`);
// console.log(`${nums[0]} * ${nums[1]} = ${nums[0] * nums[1]}`);
// console.log(`${nums[0]} / ${nums[1]} = ${nums[0] / nums[1]}`);

//6.
window.alert("Calculations ara ready and can be inspected in the console.");

// let nan = window.isNaN("Infinity");
// let fin = window.isFinite(-NaN);
// console.log(nan, fin);
