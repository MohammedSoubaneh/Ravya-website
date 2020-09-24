"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.get("/api/products/:id", function (req, res) {
  var productId = req.params.id;

  var product = _data["default"].products.find(function (x) {
    return x._id === productId;
  });

  if (product) res.send(product);else res.status(404).send({
    msg: "Product Not Found."
  });
});
app.get("/api/products", function (req, res) {
  res.send(_data["default"].products);
});
app.get("/api/products/cart/", function (req, res) {
  res.send(_data["default"].products);
});

if (process.env.NODE_ENV === 'production') {
  app.use(_express["default"]["static"]('ravya-website/frontend/build'));
}

app.listen(PORT, function () {
  console.log("Server started at ".concat(PORT));
});