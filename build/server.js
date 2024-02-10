"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _router = _interopRequireDefault(require("./router"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _middleware = require("./middleware");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  resave: false,
  saveUninitialized: false,
  store: _connectMongo["default"].create({
    mongoUrl: process.env.DB_LINK
  })
}));
app.use(_middleware.localsMiddleware);
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../build')));
app.use("/assets", _middleware.cacheMiddleware, _express["default"]["static"]("assets"));
app.use("/", _router["default"]);
app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../build/index.html'));
});
var _default = exports["default"] = app;