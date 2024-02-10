"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var postSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  hashtags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  }
});
var Post = _mongoose["default"].model("Post", postSchema);
var _default = exports["default"] = Post;