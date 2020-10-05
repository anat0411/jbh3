const express = require("express");
const port = process.env.PORT || 3000;
const { events } = require("./events.json");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

//creating the route
app.route("/events").get((req, res) => {
  res.json(events);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

//create another server, use port 3001 in the other server
//connect this server to the client api
