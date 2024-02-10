"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var chatSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  sentAt: {
    type: Date,
    required: true,
    "default": Date.now
  }
});
var Chat = _mongoose["default"].model("Chat", chatSchema);
var _default = exports["default"] = Chat;