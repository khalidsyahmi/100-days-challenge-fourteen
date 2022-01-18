//Classes

//blueprint
class Job {
  constructor(jobTitle, jobLocation, jobSalary) {
    this.title = jobTitle;
    this.location = jobLocation;
    this.salary = jobSalary;
  }

  describeLiteral() {
    console.log(
      `I am a ${this.title} at ${this.location} with a salary of ${this.salary} usd`
    );
  }
}

//create object based on that blueprint
const programmer = new Job("Full-stack Developer", "Turing.com", 30000);
const teacher = new Job("Web development coding mentor", "Udemy.com", 50000);

console.log(programmer);
console.log(teacher);

// you can now call methods of that created objects
programmer.describeLiteral();
teacher.describeLiteral();
