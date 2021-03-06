const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const port = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log(`New client id ${socket.id}`);

  socket.on("chat", (data) => {
    io.emit("msg", data);
  });

  socket.on("disconnect", () => {
    console.log(`Client id ${socket.id} disconnect`);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client.html"));
});

http.listen(port, () => console.log(`Server running on port ${port}`));
