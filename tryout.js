const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const { url } = request;

  switch (url) {
    case "/gil":
      response.setHeader("Content-Type", "text/plain");
      response.end("<h1>Hello Gill</h1>");
      break;

    default:
      response.end(url);
      break;
  }
});

server.listen(3000, (err) => {
  if (err) throw err;

  console.log(`Server listenning on port: ${PORT}`);
});
