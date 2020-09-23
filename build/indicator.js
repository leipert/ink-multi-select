"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ink = require("ink");

var _figures = _interopRequireDefault(require("figures"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Indicator = ({
  isHighlighted
}) => /*#__PURE__*/_react.default.createElement(_ink.Box, {
  marginRight: 1
}, /*#__PURE__*/_react.default.createElement(_ink.Text, {
  color: isHighlighted ? 'blue' : undefined
}, isHighlighted ? _figures.default.pointer : ' '));

Indicator.propTypes = {
  isHighlighted: _propTypes.default.bool
};
Indicator.defaultProps = {
  isHighlighted: false
};
var _default = Indicator;
exports.default = _default;