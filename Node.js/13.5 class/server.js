const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3003, () => {
  console.log("Server listening on port 3003");
});
