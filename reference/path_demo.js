//importing path module which is already included in node_modules
// so no need to install explicitly using npm install
const path=require('path');

//base file name
console.log('base name:'+path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//whole object Path to use methods
console.log(path.parse(__filename));
