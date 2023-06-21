const EventEmitter = require("events");
const http = require("http");
//ES5
//const myEmitter = new EventEmitter();

// ES6
class Sales extends EventEmitter {
    constructor(){
        super();
    }
}


const myEmitter = new Sales();
// This is lister , we can create multiple listner 
myEmitter.on("newSale",() => {
    console.log("There was a sale");
});

myEmitter.on("newSale", ()=>{
    console.log("Customer name: shraddha");
});

myEmitter.on("newSale", stock => {
    console.log(`There are now ${stock} items left in stock`);
});
// This is Event Observer 
myEmitter.emit("newSale", 9);

///////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});


server.on("request", (req, res) => {
    console.log("Another Requesr");
});

server.on("close", () => {
    console.log("Server Closed");
});

server.listen(8000,"127.0.0.1",() => {
    console.log("Waiting for requests..");
});