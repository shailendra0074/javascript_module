// The fs module in Node.js provides an API to interact with the file system, allowing you to read,
//  write, update, and delete files and directories.



// Synchronous methods have the word Sync in their names (like readFileSync, writeFileSync).

const fs = require('fs');
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName );
const writeFile = fs.writeFileSync(filePath,  "This is a new file create update data", "utf-8");


console.log(writeFile);

// Read file

const readFile = fs.readFileSync(filePath, 'utf-8');

// console.log(readFile.toString());
console.log(readFile);

// update content

const appendFile = fs.appendFileSync(filePath,  "\n This is a new file create update data", "utf-8");


console.log(appendFile);

// delete file

// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);
const newReNameFile = "updatefile.txt";
const newReNameFilePath = path.join(newReNameFile);

const reNameFile = fs.renameSync(filePath, newReNameFilePath);

console.log(reNameFile);