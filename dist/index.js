"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Rating = function Rating(_ref) {
  var _ref$maxRating = _ref.maxRating,
    maxRating = _ref$maxRating === void 0 ? 5 : _ref$maxRating,
    onRate = _ref.onRate,
    value = _ref.value,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$defaultColor = _ref.defaultColor,
    defaultColor = _ref$defaultColor === void 0 ? "#ffc107" : _ref$defaultColor,
    activeColor = _ref.activeColor,
    _ref$showNoRatingGive = _ref.showNoRatingGiven,
    showNoRatingGiven = _ref$showNoRatingGive === void 0 ? false : _ref$showNoRatingGive,
    _ref$disabledOpacity = _ref.disabledOpacity,
    disabledOpacity = _ref$disabledOpacity === void 0 ? 0.5 : _ref$disabledOpacity,
    _ref$resettable = _ref.resettable,
    resettable = _ref$resettable === void 0 ? false : _ref$resettable,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? [] : _ref$tooltip,
    _ref$iconType = _ref.iconType,
    iconType = _ref$iconType === void 0 ? "stars" : _ref$iconType,
    _ref$ariaLabel = _ref.ariaLabel,
    ariaLabel = _ref$ariaLabel === void 0 ? "rating" : _ref$ariaLabel,
    _ref$showValue = _ref.showValue,
    showValue = _ref$showValue === void 0 ? false : _ref$showValue;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    internalRating = _useState2[0],
    setInternalRating = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    hoverRating = _useState4[0],
    setHoverRating = _useState4[1];
  var rating = value !== undefined ? value : internalRating;
  var handleClick = function handleClick(newValue) {
    if (!readOnly && !disabled) {
      var updatedRating = resettable && newValue === rating ? 0 : newValue;
      setInternalRating(updatedRating);
      onRate === null || onRate === void 0 || onRate(updatedRating);
    }
  };
  var handleKeyDown = function handleKeyDown(event, index) {
    if (!readOnly && !disabled) {
      var _keyMap$event$key;
      var keyMap = {
        ArrowRight: function ArrowRight() {
          return index < maxRating && handleClick(index + 1);
        },
        ArrowLeft: function ArrowLeft() {
          return index > 1 && handleClick(index - 1);
        },
        Enter: function Enter() {
          return handleClick(index);
        },
        " ": function _() {
          return handleClick(index);
        }
      };
      (_keyMap$event$key = keyMap[event.key]) === null || _keyMap$event$key === void 0 || _keyMap$event$key.call(keyMap);
    }
  };
  var getSizeStyle = function getSizeStyle() {
    var sizes = {
      sm: "1.5rem",
      md: "2rem",
      lg: "3rem"
    };
    return sizes[size] || sizes.md;
  };
  var getFaceColor = function getFaceColor(i) {
    var colors = ["#e57373", "#ffb74d", "#fff176", "#aed581", "#4caf50"];
    return i <= Math.ceil(hoverRating || rating) ? colors[i - 1] : "#bdbdbd";
  };
  var getIcon = function getIcon(i) {
    var filled = i <= Math.floor(hoverRating || rating);
    if (iconType === "hearts") return filled ? /*#__PURE__*/_react["default"].createElement(_fa.FaHeart, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaRegHeart, null);
    if (iconType === "thumbs") return filled ? /*#__PURE__*/_react["default"].createElement(_fa.FaThumbsUp, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaRegThumbsUp, null);
    if (iconType === "faces") {
      var faces = [/*#__PURE__*/_react["default"].createElement(_fa.FaRegSadTear, null), /*#__PURE__*/_react["default"].createElement(_fa.FaRegMeh, null), /*#__PURE__*/_react["default"].createElement(_fa.FaRegSmile, null), /*#__PURE__*/_react["default"].createElement(_fa.FaRegSmile, null), /*#__PURE__*/_react["default"].createElement(_fa.FaRegLaugh, null)];
      return faces[i - 1] || /*#__PURE__*/_react["default"].createElement(_fa.FaRegMeh, null);
    }
    return filled ? /*#__PURE__*/_react["default"].createElement(_fa.FaStar, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaRegStar, null);
  };
  var getIconStyle = function getIconStyle(i) {
    return {
      cursor: readOnly || disabled ? "not-allowed" : "pointer",
      fontSize: getSizeStyle(),
      color: iconType === "faces" ? getFaceColor(i) : i <= Math.floor(hoverRating || rating) ? activeColor || defaultColor : "#e4e5e9",
      opacity: disabled ? disabledOpacity : 1,
      marginRight: "0.5rem",
      display: "inline-block",
      transition: "transform 0.2s, color 0.2s",
      transform: i <= hoverRating ? "scale(1.2)" : "scale(1)"
    };
  };
  var handleMouseMove = function handleMouseMove(index) {
    if (!disabled) {
      setHoverRating(index);
    }
  };
  var renderStars = function renderStars() {
    if (showNoRatingGiven && rating === 0) return /*#__PURE__*/_react["default"].createElement("span", null, "No rating given");
    return Array.from({
      length: maxRating
    }, function (_, i) {
      var index = i + 1;
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: index,
        style: getIconStyle(index),
        onClick: function onClick() {
          return !disabled && handleClick(index);
        },
        onMouseEnter: function onMouseEnter() {
          return !disabled && handleMouseMove(index);
        },
        onMouseLeave: function onMouseLeave() {
          return !disabled && setHoverRating(0);
        },
        onKeyDown: function onKeyDown(e) {
          return !disabled && handleKeyDown(e, index);
        },
        tabIndex: readOnly || disabled ? -1 : 0,
        "aria-label": "".concat(index, " of ").concat(maxRating, " ").concat(ariaLabel),
        role: "button"
      }, getIcon(index), tooltip[index - 1] && hoverRating === index && /*#__PURE__*/_react["default"].createElement("span", {
        className: "tooltip",
        style: {
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: activeColor || defaultColor,
          color: "#fff",
          padding: "0.25rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.75rem",
          whiteSpace: "nowrap",
          marginTop: "0.25rem"
        }
      }, tooltip[index - 1]));
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-live": "polite",
    "aria-label": "".concat(rating, " of ").concat(maxRating, " ").concat(ariaLabel),
    style: {
      display: "inline-flex"
    }
  }, renderStars()), resettable && !readOnly && !disabled && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handleClick(0);
    },
    style: {
      marginLeft: "1rem",
      cursor: "pointer",
      opacity: 0.8
    }
  }, "Reset"), showValue && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginLeft: "1rem",
      fontSize: "1rem",
      color: activeColor || defaultColor
    }
  }, rating, " / ", maxRating));
};
Rating.propTypes = {
  maxRating: _propTypes["default"].number,
  onRate: _propTypes["default"].func,
  value: _propTypes["default"].number,
  readOnly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "lg"]),
  defaultColor: _propTypes["default"].string,
  activeColor: _propTypes["default"].string,
  showNoRatingGiven: _propTypes["default"].bool,
  disabledOpacity: _propTypes["default"].number,
  resettable: _propTypes["default"].bool,
  tooltip: _propTypes["default"].arrayOf(_propTypes["default"].string),
  iconType: _propTypes["default"].oneOf(["stars", "hearts", "thumbs", "faces"]),
  ariaLabel: _propTypes["default"].string,
  showValue: _propTypes["default"].bool
};
var _default = exports["default"] = Rating;