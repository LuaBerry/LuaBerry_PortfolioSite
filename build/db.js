"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect(process.env.DB_LINK);
var db = _mongoose["default"].connection;
db.on("error", function (error) {
  return console.log("DB error: ", error);
});
db.once("open", function () {
  return console.log("Connected to DB");
});