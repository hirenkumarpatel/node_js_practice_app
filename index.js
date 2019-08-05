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
const server= http
  .createServer((req, res) => {
    //writing respose (actual output to browser)

    // req.url will return current url in browser
    if (req.url === "/") {
      // if its just domain name with no trailing links

      fs.readFile(
        path.join(__dirname, "public", "index.html"),
        (err, content) => {
          if (err) throw err;
          //setting respose values and write html content
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content);
        }
      );
    }

    if (req.url === "/about") {
          fs.readFile(
          path.join(__dirname, "public", "about.html"),
          (err, content) => {
            if (err) throw err;
            //setting respose values and write html content
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
          }
        );
      }

      //work as API
      if (req.url === "/api/users") {
        
        //creating array of object (normally fetch from database or another site)
        const users=[
            {name:'Hiren Patel',age:29},
            {name:'John Doe',age:35},
            {name:'Will Smith',age:43}
            
        ];
        //setting respose values and write html content
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(users));
        }
    });

    // event listener
    server.listen(port, () => console.log("server is running.."));
