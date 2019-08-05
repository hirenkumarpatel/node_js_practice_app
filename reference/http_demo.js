/**
 * creating basic server and start running server
 */

//importing http module
const http=require('http');
//creating port constant with port number
const port=8000;

//creating server and configuting 
http.createServer((req,res)=>{
    //writing respose
    res.write('Hello World!');
    res.end();
}).listen(port,()=>console.log('server started'));