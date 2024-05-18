// function sayHello(name){
//     console.log("Hello ", name)
// }

// sayHello("Umair")

//const logger = require('./logger');

//console.log(logger);

//logger.log('message');
// logger('message');

// const path = require('path');
// const os = require('os');
const fs = require('fs');


// var pathObj = path.parse(__filename);

// var totalMemory = os.totalmem;
// var freeMemory = os.freemem;

//var file = fs.readdirSync('../');

// console.log(pathObj);
// console.log(`Total Memory ${totalMemory}`);
// console.log(`Free Memory ${freeMemory}`);
//console.log(file);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
