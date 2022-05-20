"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BaseResponse {
  constructor(message, description, data) {
    this.success = true;
    this.message = message;
    this.description = description;
    this.data = data;
  }

}

exports.default = BaseResponse;