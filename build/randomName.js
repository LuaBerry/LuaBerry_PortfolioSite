"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prefix = ["오후의", "환상의", "작은", "별의", "아름다운", "아마빛의", "가라앉은", "꽃의", "물에 비친", "잎새를 스치는", "밤의", "화려한", "숲의", "악흥의", "사랑에 빠진", "포근한", "부드러운"];
var noun = ["목신", "인형", "소녀", "왕녀", "거위", "요정", "왕", "백작", "불새", "여우", "고양이", "올빼미", "산들바람", "나무", "나비"];
var makeName = function makeName(seed) {
  var p = Math.floor(Math.random() * prefix.length);
  var n = Math.floor(Math.random() * noun.length);
  return prefix[p] + " " + noun[n];
};
var _default = exports["default"] = makeName;