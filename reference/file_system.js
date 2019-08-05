//importing file system modules
const fs= require('fs');
const path= require('path');

//make directory using fs.mkdir function
fs.mkdir(path.join(__dirname,'/new_folder'),(err)=>{
    if(err)throw err;
    console.log('new folder created');
});
