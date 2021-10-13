var http = require("http");
// const { render } = require('ejs');
var myModule = require('./my-module.js');

// render(myModule.myText)

//create a server object:
http.createServer((req, res) => {
      res.write(myModule.myText); //write a response to the client
      res.end(); //end the response
    })
  .listen(8080); //the server object listens on port 8080
