// try catch
const fs = require("fs/promises");

function readFile() {
  /*   let fileData;
   */ /* fileData = */

  //Asynchronous /callback function
  /*   fs.readFile("data.txt", function (error, fileData) {

    //callback error handling
    if (error) {
//any handling ...
}
    console.log("File parsing is done!");
    console.log(fileData.toString());
  }); */

  //Promises
  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing is done!");
      console.log(fileData.toString());
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {}) //second promises chain
    .catch(function (error) {
      console.log(error);
    }); // promises error handling

  console.log("Hello world");
}
readFile();

// async/ await
async function readText() {
  let fileData;

  //wrap in try catch again
  try {
    //await
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }
  console.log("File parsing is done!");
  console.log(fileData.toString());
  console.log("Hello world");
}
readText();
