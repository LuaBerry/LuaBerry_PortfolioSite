"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controller = require("./controller");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/", _controller.home);
router.post("/chat", _controller.postChat);
router.get("/chat/:id/remove", _controller.removeChat);
router.get("/chat/json", _controller.jsonChat);
router.get("/blog", _controller.blog);
var _default = exports["default"] = router;