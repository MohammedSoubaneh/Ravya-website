"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _data = _interopRequireDefault(require("./data"));

var bodyParser = require('body-parser');

var path = require('path');

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
app.use(urlencodedParser);
app.use(jsonParser);
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

var stripe = require('stripe')("sk_test_51HLEnyGLtWDqx1qOWBvKR2GMVhO50m9WJA3IQr2j0Yj6eJG028G7SrndLuvJIe1B9wQltDMU4bn8pi42xSTfMyok00gW15982r");

app.post('/create-session', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var session;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: req.body.cartItems,
              mode: 'payment',
              success_url: "https://ravya.herokuapp.com/home/products".concat("?success=true"),
              cancel_url: "https://ravya.herokuapp.com/home/products".concat("?canceled=true")
            });

          case 2:
            session = _context.sent;
            res.json({
              id: session.id
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use(_express["default"]["static"](path.join(__dirname, '/../frontend/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join("".concat(__dirname, "/../frontend/build/index.html")));
});
app.listen(PORT, function () {
  console.log("Server started at ".concat(PORT));
});