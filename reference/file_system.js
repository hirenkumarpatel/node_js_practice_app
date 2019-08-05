//importing file system modules
const fs = require("fs");
const path = require("path");

//make directory using fs.mkdir function
fs.mkdir(path.join(__dirname,'/new_folder'),{},(err)=>{
    if(err)throw err;
    console.log('new folder created');
});

//create file in folder and write content in it
fs.writeFile(
  path.join(__dirname, "/new_folder", "/sample.txt"),
  "Here is sample text ",
  err => {
    if (err) throw err;
    console.log("new file created");

    //append text to existed file
    fs.appendFile(
      path.join(__dirname, "/new_folder", "/sample.txt"),
      "Here is additional text ",
      err => {
        if (err) throw err;
        console.log("new file appended");
      }
    );
  }
);

//read file
fs.readFile(
  path.join(__dirname, "/new_folder", "/sample.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
