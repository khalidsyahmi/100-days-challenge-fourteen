// try catch
const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("restaurants.json");
  } /*  catch {
    console.log("Try catch error handling");
  }
 */ catch (error) {
    console.log(error.message);
  }
  console.log("Hello world");
}

readFile();
