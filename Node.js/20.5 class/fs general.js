const fs = require("fs");
const path = require("path");

// CRUD
// Create
// fs.open(path.join(__dirname, 'ex', '2.txt'), 'w+', (err, fd) => {
//     if(err) throw err;
// });

// const user = {
//     name: 'Yehuda',
//     id: 1234
// }

// fs.writeFile(path.join(__dirname, 'ex', 'data.json'), JSON.stringify(user), (err) =>{
//     if(err) throw err;
// });

// fs.appendFile(path.join(__dirname, 'ex', '3.txt'), '5', (err) =>{
//     if(err) throw err;
// });

// Read
// fs.readFile(path.join(__dirname, 'ex', 'data.json'), (err, data) => {
//     if(err) throw err;
//     const {name} = JSON.parse(data.toString())
//     console.log(name);
// });

// Update
// Delete
// fs.unlink(path.join(__dirname, 'ex', 'data.json'), (err) => {
//     if(err) throw err;
// })

// fs.mkdir(path.join(__dirname, 'data'), (err) => {
//     if(err) throw err;
// })

// fs.rmdir(path.join(__dirname, 'data'), (err) => {
//     if(err) throw err;
// })

// fs.stat(path.join(__dirname, 'ex'), (err, stats) => {
//     console.log(stats.isDirectory());
// });

// fs.access(path.join(__dirname, 'ex1'), (err)=>{
//     console.log(err);
// })
