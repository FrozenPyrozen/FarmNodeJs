const EventEmmiter = require("events");
const http = require("http");

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

myEmmiter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmmiter.on("newSale", () => {
  console.log("Costumer name!");
});

myEmmiter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmmiter.emit("newSale", 9);

///////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recived!");
  console.log(req.url);

  res.end("Request recived!");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  console.log("Server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
