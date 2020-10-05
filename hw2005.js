const topNum = 5000;

const numbers = (num) => {
  num++;
  console.log(num);
  if (num > topNum) {
    console.log("We have reached the destination");
  } else {
    setImmediate(() => {
      numbers(num);
    });
  }
};

numbers(100);
