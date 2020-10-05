const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "/hello/world/yellow", "yehuda.txt");

fs.access(file, (err) => {
  if (err) {
    const dirname = path.dirname(file);

    fs.mkdir(dirname, { recursive: true }, (err) => {
      if (err) throw err;
      fs.writeFile(file, "Yadid", (err) => {
        if (err) throw err;
      });
    });
  } else {
    fs.writeFile(file, "Yadid", (err) => {
      if (err) throw err;
    });
  }
});
