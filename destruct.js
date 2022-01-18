//array values into other individual constants
const input = ["mad ", "max "];
const [first, last] = input;

console.log(first);
console.log(last);

//object array into individual objects
const job = { title: "developer", location: "new york" };

/* const { title } = job;

const { title: jTitle } = job;
const { location: jLocation } = job;

console.log(jTitle);
console.log(jLocation);
 */
const { title: jobTitle, location: jobLocation } = job;

console.log(jobTitle);
console.log(jobLocation);
