/**
 * creating basic server and start running server
 */

//importing http module
const http=require('http');

//creating port constant with port number
const port= process.env.PORT || 8000;// will look for run time port on actual web server or use default for localhost


//creating server and configuting 
http.createServer((req,res)=>{
    //writing respose (actual output to browser) 

    // req.url will return current url in browser
    if(req.url==='/'){ // if its just domain name with no trailing links 
        
        res.write('<h1>Home</h1>');
    } 
    

    res.end();
}).listen(port,()=>console.log('server is running..'));