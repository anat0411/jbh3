const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const { url } = request;

  switch (url) {
    case "/add/1/2":
      response.setHeader("Content-Type", "text/plain");
      response.end("3");
      break;

    case "/multiply/2/4":
      response.setHeader("Content-Type", "text/plain");
      response.end("8");
      break;

    case "/divide/12/6":
      response.setHeader("Content-Type", "text/plain");
      response.end("2");
      break;

    case "/subtract/20/5":
      response.setHeader("Content-Type", "text/plain");
      response.end("15");
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
