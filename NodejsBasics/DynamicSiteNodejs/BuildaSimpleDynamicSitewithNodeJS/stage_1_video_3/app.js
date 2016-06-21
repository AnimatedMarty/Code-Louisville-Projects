var router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and Javascript points from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our tempplate via HTTP

//Create a web server

var https = require("https");
https.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(3000);
console.log("Server running at http://<workspace-url>/");





