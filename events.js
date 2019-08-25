//importing event module
const events = require("events");
//creating instnce of event to handle events
const emmiter = new events.EventEmitter();

//creating handler to handle custom event
emmiter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

//creating  static events
emmiter.emit("customEvent", "Hello World", "Hiren");

//creating dynamic data events
//creating input stream on data event (input from terminal)
process.stdin.on("data",data=>{
    const input=data.toString.trim();// fetching data from terminal
    if(input==="exit"){ // if user enters exit text then create custom event with final message and exit input stream
        //raising customevent
        emmiter.emit("customEvent","Good Bye!","Process");
        //exit input stream
        process.exit();
    }
    //raising customevent 
    emmiter.emit("customEvent",input,"Terminal");

});