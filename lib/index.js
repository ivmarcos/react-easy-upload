'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withUpload = undefined;

var _withUpload = require('./withUpload');

Object.defineProperty(exports, 'withUpload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withUpload).default;
  }
});

var _ReactEasyUpload = require('./ReactEasyUpload');

var _ReactEasyUpload2 = _interopRequireDefault(_ReactEasyUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ReactEasyUpload2.default;