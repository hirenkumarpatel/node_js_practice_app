/**
 * creating basic server and start running server
 * to use server that automatically restart on each save install nodemon by 'npm -D nodemon'
 * use 'npm run dev' to start server if defined  "start": "node index",
 *  "dev": "nodemon index"
 */

//importing http,path and file system fs module
const http = require("http");
const path = require("path");
const fs = require("fs");

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
      contenttype = "text/css";
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

  //read file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found!
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            //set respose values
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(`Server Error:${err.code}`);
      }
    } else {
      //load page on success
      res.writeHead(200, { "Content-Type": contenttype });
      res.end(content, "utf8");
    }
  });
});

//creating port constant with port number
const port = process.env.PORT || 8000; // will look for run time port on actual web server or use default for localhost

// event listener
server.listen(port, () => console.log("server is running.."));
