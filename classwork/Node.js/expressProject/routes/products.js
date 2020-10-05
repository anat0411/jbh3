var express = require("express");
var router = express.Router();

products = [
  { id: 1, name: "HDD", price: 600, weight: 25 },
  { id: 2, name: "Car", price: 80000, weight: 25000 },
  { id: 3, name: "Key", price: 10, weight: 10 },
  { id: 4, name: "Shirt", price: 50, weight: 6 }
];
router.delete("/", function(req, res, next) {
  var bodyProduct = req.body;
  var id = bodyProduct.id;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  res.json(products);
});

router.get("/", function(req, res, next) {
  response = {
    success: true,
    error: false,
    message: "list",
    data: products
  };
  res.json(products);
});

router.post("/", function(req, res, next) {
  var bodyProduct = req.body;
  bodyProduct.id = products.length + 1;
  var newProduct = {
    id: bodyProduct.id,
    name: bodyProduct.name,
    price: bodyProduct.price,
    weight: bodyProduct.weight
  };
  products.push(newProduct);
  res.json(products);
});

router.put("/", function(req, res, next) {
  var bodyProduct = req.body;
  var id = bodyProduct.id;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].name = bodyProduct.name;
      products[i].price = bodyProduct.price;
      products[i].weight = bodyProduct.weight;
    }
  }
  res.json(products);
});

module.exports = router;
