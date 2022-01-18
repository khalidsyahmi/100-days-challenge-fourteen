// node primitive-vs-reference.js

//Primitive
const hobbies = ["sports", "cooking"];
const age = 32;

hobbies.push("reading");
/* hobbies = ["sports", "cooking"]; */ //not allowed to overwrite the old adresses

console.log(hobbies);

//Reference
//object
const person = { age: 32 };

function deductAdultYears(p) {
  p.age -= 18; //related and both address is affected
  return p.age;

  /* return p.age - 18; //does'nt reference the address back */
}

/* console.log(deductAdultYears(person));
console.log(person);
 */

// spread operator to list new obj
/* console.log(deductAdultYears({age: person.age})); */
console.log(deductAdultYears({ ...person }));
console.log(person);

/* person.push(deductAdultYears({ ...person }));
console.log(person);
 */
