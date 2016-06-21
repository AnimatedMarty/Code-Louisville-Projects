var profile = require("./profile.js");
var users = process.argv.slice(2);

//console.dir(process.argv);

//var users = ["chalkers", "martinlindsey", "davemcfarland"];

users.forEach(profile.get);
    


