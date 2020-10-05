var express = require("express");
var router = express.Router();

products1 = [
  { id: 1, name: "AAA", price: 600, weight: 25 },
  { id: 2, name: "BBB", price: 80000, weight: 25000 },
  { id: 3, name: "CCC", price: 10, weight: 10 },
  { id: 4, name: "DDD", price: 50, weight: 6 }
];

products2 = [
  { id: 1, name: "EEE", price: 600, weight: 25 },
  { id: 2, name: "FFF", price: 80000, weight: 25000 },
  { id: 3, name: "GGG", price: 10, weight: 10 },
  { id: 4, name: "HHH", price: 50, weight: 6 }
];

products3 = [
  { id: 1, name: "III", price: 600, weight: 25 },
  { id: 2, name: "JJJ", price: 80000, weight: 25000 },
  { id: 3, name: "KK", price: 10, weight: 10 },
  { id: 4, name: "LLL", price: 50, weight: 6 }
];

products4 = [
  { id: 1, name: "MMM", price: 600, weight: 25 },
  { id: 2, name: "NNN", price: 80000, weight: 25000 },
  { id: 3, name: "OOO", price: 10, weight: 10 },
  { id: 4, name: "PPP", price: 50, weight: 6 }
];

orders = [
  { id: 1, date: new Date(2018, 11, 24), sum: 0, productsID: products1 },
  { id: 2, date: new Date(2016, 12, 14), sum: 0, productsID: products2 },
  { id: 3, date: new Date(2019, 11, 30), sum: 0, productsID: products3 },
  { id: 4, date: new Date(2010, 09, 20), sum: 0, productsID: products4 }
];

router.get("/", function(req, res, next) {
  if (req.session.logged_in) {
    console.log(req.params);
    response = {
      success: true,
      error: false,
      message: "List of all the orders",
      data: orders
    };
    res.status(200).json(response);
  } else {
    res.status(200).json("You're not logged in");
  }
});

router.get("/:id", function(req, res, next) {
  console.log("id: ", req.params);
  let id = req.params.id;
  response = {
    success: true,
    error: false,
    message: ("Order num: ", id),
    data: orders.find(order => order.id == id)
  };
  res.status(200).json(response);
});

router.get("/:id/:products", function(req, res, next) {
  console.log("id: ", req.params);
  let id = req.params.id;
  response = {
    success: true,
    error: false,
    message: ("List of products to order num ", id),
    intData: orders.find(order => order.id == id).productsID
  };
  res.status(200).json(response);
});

router.get("/orders/:id/:products/:id2", function(req, res, next) {
  console.log("id: ", req.params);
  let id = req.params.id;
  let id2 = req.params.id2;
  let intData = orders.find(order => order.id == id);
  let data = intData.productsID.find(product => product.id == id2);
  response = {
    success: true,
    error: false,
    message: ("List of products to order num ", id),
    data: data
  };

  res.status(200).json(response);
});

router.delete("/:id", function(req, res, next) {
  let id = req.params.id;
  let intData = orders.find(order => order.id == id);
  const indexOfOrderRemoved = orders.indexOf(intData);
  orders.splice(indexOfOrderRemoved, 1);
  response = {
    success: true,
    error: false,
    message: ("List of products to order num ", id),
    data: orders
  };
  res.status(200).json(response);
});

// router.post("/", function(req, res, next) {
//   const today = new Date();
//   const productsSent = JSON.parse(req.body.products);
//   let productsSum = calculateSumProducts(productsSent);
//   const extracted = extractProducts(req.body);
//   const newOrder = {
//     id: today.getTime(),
//     date:
//       today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
//     sum: productsSum,
//     products: extracted
//   };
//   orders.push(newOrder);
//   res.status(201).send("Added order");
// });

module.exports = router;
