const http = require('http');
var fs = require('fs');
// var express = require('express');



const hostname = '127.0.0.1'; // <= DNS <= localhost
const port = 3000;

const server = http.createServer((req, res) => {
    //console.log(req);
//     fs.appendFile('logs.txt', 'Hello content!\n', function (err) {
//         if  (err) throw err;
//         console.log('Saved!');
//     });
//   console.log("Got Request from Client...");
//   fs.readFile('logs.txt', (err, data) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write(data);
//     res.end();
//   });
//   let x = fs.readFileSync('logs.txt');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});