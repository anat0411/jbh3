const fs = require("fs");

// for(let i = 0 ; i < 10 ; i++) {
//     fs.writeFile(`./files/${i+1}.txt`, i+1, () => {});
// }

// Get dir files
fs.readdir("./files", (err, files) => {
  if (err) throw err;

  // let counter = files.length;
  // files.forEach(file => {
  //     fs.readFile(`./files/${file}`, (err, data) => {
  //         if(err) throw err;
  //         console.log(data.toString());

  //         if(--counter <= 0) console.log('done');
  //     });
  // });

  let counter = files.length;
  for (let i = 0; i < files.length; i++) {
    fs.readFile(`./files/${files[i]}`, (err, data) => {
      if (err) throw err;
      console.log(data.toString());

      if (--counter <= 0) console.log("done");
    });
  }
});
