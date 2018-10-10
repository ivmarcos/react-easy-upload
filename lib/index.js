'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  input: {
    visibility: 'hidden',
    height: 0,
    width: 0,
    position: 'fixed'
  }
};

var ReactEasyUpload = function (_PureComponent) {
  _inherits(ReactEasyUpload, _PureComponent);

  function ReactEasyUpload(props) {
    _classCallCheck(this, ReactEasyUpload);

    var _this = _possibleConstructorReturn(this, (ReactEasyUpload.__proto__ || Object.getPrototypeOf(ReactEasyUpload)).call(this, props));

    _this.requestUpload = _this.requestUpload.bind(_this);
    _this.handleUpload = _this.handleUpload.bind(_this);
    _this.isValid = _this.isValid.bind(_this);
    _this.inputRef = _react2.default.createRef();
    _this.state = {
      files: [],
      valid: true
    };
    return _this;
  }

  _createClass(ReactEasyUpload, [{
    key: 'requestUpload',
    value: function requestUpload() {
      this.inputRef.current.click();
    }
  }, {
    key: 'isValid',
    value: function isValid(files) {
      var maxSize = this.props.maxSize;

      if (maxSize === undefined) return true;
      for (var i in files) {
        if (files[i].size > maxSize) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'handleUpload',
    value: function handleUpload(e) {
      var files = e.target.files;
      var onUpload = this.props.onUpload;

      var valid = this.isValid(files);
      this.setState({
        files: files,
        valid: valid
      });
      if (onUpload && valid) {
        onUpload(files, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onUpload = _props.onUpload,
          maxSize = _props.maxSize,
          rest = _objectWithoutProperties(_props, ['children', 'onUpload', 'maxSize']);

      var _state = this.state,
          files = _state.files,
          valid = _state.valid;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement('input', _extends({
          ref: this.inputRef,
          style: styles.input,
          type: 'file',
          onChange: this.handleUpload
        }, rest)),
        children({ requestUpload: this.requestUpload, files: files, valid: valid })
      );
    }
  }]);

  return ReactEasyUpload;
}(_react.PureComponent);

ReactEasyUpload.propTypes = {
  maxSize: _propTypes2.default.number
};

ReactEasyUpload.defaultProps = {};

exports.default = ReactEasyUpload;
