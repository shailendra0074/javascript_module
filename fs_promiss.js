// Promise (in JavaScript) is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// In other words, a promise is like a placeholder for a value that you don't have yet, but will get in the future.

// Key points about a Promise:

// It can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.

// Fulfilled: The operation completed successfully.

// Rejected: The operation failed.

// It helps you handle asynchronous code (like API calls, reading files, etc.) more cleanly compared to using lots of callbacks.

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
  
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   });
  
//   myPromise
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
  

const fs = require('fs');
const path = require("path");

const fileName = "promisses.txt";
const filePath = path.join(__dirname, fileName );

const file = __dirname;

fs.promises.readdir(file)
.then((data) =>{
  console.log(data);
})
.catch((err) => {
  console.error(err);
});

// write file
fs.promises.writeFile(filePath, 'this is promisses fie', 'utf-8')
.then(() =>{
    console.log("fie is a successfully create");
})
.catch((err) => {
  console.log(err);
});

//read file
// write file
fs.promises.readFile(filePath, 'utf-8')
.then((data) =>{
    console.log(data);
})
.catch((err) => {

    console.log(err);
  
});