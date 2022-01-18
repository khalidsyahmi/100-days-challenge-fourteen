const fs = require("fs/promises");

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
