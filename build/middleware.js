"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privatePageMiddleware = exports.localsMiddleware = exports.cacheMiddleware = void 0;
var privatePageMiddleware = exports.privatePageMiddleware = function privatePageMiddleware(req, res, next) {
  if (req.session.loggedIn) {
    return next();
  }
  return res.redirect("/blog");
};
var localsMiddleware = exports.localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  next();
};
var cacheMiddleware = exports.cacheMiddleware = function cacheMiddleware(req, res, next) {
  var cacheDuration = 60 * 60 * 24 * 7;
  if (req.method == 'GET') {
    res.set('Cache-control', "public, max-age=".concat(cacheDuration));
  } else {
    res.set("Cache-control", "no-store");
  }
  next();
};