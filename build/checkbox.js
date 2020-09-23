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

const CheckBox = ({
  isSelected
}) => /*#__PURE__*/_react.default.createElement(_ink.Box, {
  marginRight: 1
}, /*#__PURE__*/_react.default.createElement(_ink.Text, {
  color: "green"
}, isSelected ? _figures.default.circleFilled : _figures.default.circle));

CheckBox.propTypes = {
  isSelected: _propTypes.default.bool
};
CheckBox.defaultProps = {
  isSelected: false
};
var _default = CheckBox;
exports.default = _default;