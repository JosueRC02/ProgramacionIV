"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ResponseError {
  constructor(message, description) {
    this.success = false;
    this.message = message;
    this.description = description;
  }

}

exports.default = ResponseError;