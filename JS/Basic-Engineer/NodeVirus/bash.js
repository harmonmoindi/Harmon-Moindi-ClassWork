/*
for and while loops.
We are going to create an application. 
- create a function (void function - no parameters)
               - create a file. (name of file is current date.txt)
               - 10k lines of code. (use for loop)
               - file system api - nodejs

Step 2:
Create another function
That function should call another function 10 times. 
*/
/* const fs = require("fs"); //nodejs file system
const fileData = "Hello world, testing file.";
function testAppendFile() {
  const cb = (error) => {
    if (error) {
      console.log("Creating file failed");
      console.log(error);
    }
  };
  fs.appendFile("testfile.txt", fileData, cb);
}
testAppendFile(); */

const fs = require("fs"); //nodejs file system
const filename = `${Date.now()}.txt`;
function oneKLines() {
  let data = "";
  for (let i = 0; i <= 1000; i++) {
    data += `Hello, this is count ${i}\n`;
  }
  return data;
}
function testAppendFile() {
  const cb = (error) => {
    if (error) {
      console.log("Creating file failed");
      console.log(error);
    }
  };
  fs.appendFile(filename, oneKLines(), cb);
}
testAppendFile();

function main() {
  for (let i = 0; i < 11; i++) {
    createAndWriteFile();
  }
}
main();
