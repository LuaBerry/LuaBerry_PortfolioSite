"use strict";

require("dotenv/config");
require("./Chat");
require("./db");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 8000;
var handleListening = function handleListening() {
  return console.log("Server listening on port http://localhost:".concat(PORT));
};
_server["default"].listen(process.env.PORT || PORT, handleListening);