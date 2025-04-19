// The fs module in Node.js provides an API to interact with the file system, allowing you to read,
//  write, update, and delete files and directories.


// Asynchronous methods take a callback function (to handle success/error).

const fs = require('fs');
const path = require("path");

const fileName = "asynctest.txt";
const filePath = path.join(__dirname, fileName );

fs.writeFile(filePath, "New File Data in text", "utf-8", (err) =>{
    if(err){
        console.error(err);
    }
    else{
        console.log("file is saved");
    }
});

// read data

fs.readFile(filePath, "utf-8", (err, data) =>{
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
});


