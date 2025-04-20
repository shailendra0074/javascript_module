// async and await are keywords used in modern JavaScript (also Python, but I'll assume you're asking for JavaScript).

// async is used to declare a function that returns a Promise automatically. It makes the function asynchronous, meaning it can pause and wait for other asynchronous operations (like fetching data from an API) without blocking the whole program.

// await can only be used inside an async function. It tells JavaScript to wait until the Promise is resolved (or rejected) before continuing to the next line.

// async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   }

// fetchData is an async function.

// await fetch(...) means "wait until the data is fetched".

// Only after that, it moves to response.json() and then logs the result.

// Quick definition style:

// async makes a function return a Promise and allows the use of await inside it. await pauses the function execution until the awaited Promise is settled.
  
const fs = require('fs/promises');
const path = require("path");

const fileName = "asynctest.txt";
const filePath = path.join(__dirname, fileName );


const fileFolder = async() => {
    try {
        const res = await fs.promises.readdir(filePath); // Capture the result
        console.log(res); // Now res has the list of files/folders
    } catch (error) {
        console.error(error);
    }
};

fileFolder();

// const createFile = async() =>{
//  try {
//     await fs.writeFile(filePath, "new file created in text", "utf-8");
//     console.log("new file create successfully");
    
//  } catch (error) {
//     console.error(error);
//  }
// };
// createFile();

