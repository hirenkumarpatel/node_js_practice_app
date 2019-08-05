/**
 * creating basic server and start running server
 */

//importing http,path and file system fs module
const http = require("http");
const path = require("path");
const fs = require("fs");

//creating port constant with port number
const port = process.env.PORT || 8000; // will look for run time port on actual web server or use default for localhost

//creating server and configuting
const server = http.createServer((req, res) => {
  //writing respose (actual output to browser)

  //create dynamic file path
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filepath);

  //extension of file
  let extname = path.extname(filepath);

  //Initial Content type
  let contenttype = "text/html";

  //check extension and set content-type
  switch (extname) {
    case ".js":
      contenttype = "text/javascript";
      break;
      case ".css":
      contenttype = "text/stylesheet";
      break;
      case ".json":
      contenttype = "application/json";
      break;
      case ".png":
      contenttype = "image/png";
      break;
      case ".jpg":
      contenttype = "image/png";
      break;
  }
  res.end();
});
// event listener
server.listen(port, () => console.log("server is running.."));
