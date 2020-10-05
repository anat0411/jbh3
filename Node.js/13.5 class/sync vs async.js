const start = new Date().getSeconds();

setTimeout(() => {
  console.log(`log0 ${new Date().getSeconds() - start}`);
}, 1000);

setTimeout(() => {
  console.log(`log1 ${new Date().getSeconds() - start}`);
}, 500);

while (true) {
  if (new Date().getSeconds() - start >= 3) {
    break;
  }
}
