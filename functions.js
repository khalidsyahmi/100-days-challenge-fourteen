// Advanced JavaScript

//default parameter
function greetUser(greetingPrefix, defaultName = "user") {
  console.log(greetingPrefix + " " + defaultName + "!");
}

greetUser("Hi", "Mark");
greetUser("Hello");

//rest parameter //...
function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp(1, 2, 3, 4, 5, 6));

//spread operator // ...variable of an array
const arrayOfNum = [1, 2, 3, 4, 5, 6];

console.log(sumUp(...arrayOfNum));
console.log(sumUp(...arrayOfNum, ...arrayOfNum));

// functions are also objects with properties

//template literals
function greetUser2(greetingPrefix, defaultName = "user") {
  /* console.log(greetingPrefix + " " + defaultName + "!"); */

  console.log(`${greetingPrefix} ${defaultName}!`);
}

greetUser2("Hi", "Mark");
greetUser2("Hello");

// node functions.js to run the js file in the terminal
