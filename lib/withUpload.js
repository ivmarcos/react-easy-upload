'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactEasyUpload = require('./ReactEasyUpload');

var _ReactEasyUpload2 = _interopRequireDefault(_ReactEasyUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withUpload = function withUpload(WrappedComponent) {
  return function (props) {
    return _react2.default.createElement(
      _ReactEasyUpload2.default,
      props,
      function (innerProps) {
        return _react2.default.createElement(WrappedComponent, _extends({}, innerProps, props));
      }
    );
  };
};

exports.default = withUpload;