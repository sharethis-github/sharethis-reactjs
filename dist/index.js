"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyShareButtons = exports.InlineShareButtons = exports.InlineReactionButtons = exports.InlineFollowButtons = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// load project wrapper
var load = function load(component, product) {
  // load config
  var config = component.props.config || {
    enabled: true
  };
  config = JSON.parse(JSON.stringify(config)); // load buttons

  var _onShareThisLoaded = window.onShareThisLoaded;

  var onload = function onload() {
    if (!onload.complete) {
      if (!config.id) {
        var id = 'sharethis-' + Date.now();
        config.id = id;
      }

      if (component.buttons.current) {
        component.buttons.current.id = config.id;

        window.__sharethis__.load(product, config);
      }

      if (_onShareThisLoaded) {
        _onShareThisLoaded();
      }

      onload.complete = true;
    }
  };

  window.onShareThisLoaded = onload; // load sharethis.js

  if (document.getElementById('sharethis-js')) {
    if (window.__sharethis__) {
      window.onShareThisLoaded();
    }
  } else {
    var script = document.createElement("script");
    script.setAttribute('id', 'sharethis-js');
    var params = {
      property: config.property || '',
      product: product,
      source: 'reactjs'
    };
    var query = Object.keys(params).map(function (key) {
      return key + '=' + params[key];
    }).join('&');
    script.src = "https://platform-api.sharethis.com/js/sharethis.js?" + query;
    script.async = true;
    document.body.appendChild(script);
  }
}; // inline follow buttons


var InlineFollowButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(InlineFollowButtons, _React$Component);

  var _super = _createSuper(InlineFollowButtons);

  function InlineFollowButtons(props) {
    var _this;

    _classCallCheck(this, InlineFollowButtons);

    _this = _super.call(this, props);
    _this.buttons = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(InlineFollowButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      load(this, 'inline-follow-buttons');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.buttons
      });
    }
  }]);

  return InlineFollowButtons;
}(_react["default"].Component);

exports.InlineFollowButtons = InlineFollowButtons;
;

var InlineShareButtons = /*#__PURE__*/function (_React$Component2) {
  _inherits(InlineShareButtons, _React$Component2);

  var _super2 = _createSuper(InlineShareButtons);

  function InlineShareButtons(props) {
    var _this2;

    _classCallCheck(this, InlineShareButtons);

    _this2 = _super2.call(this, props);
    _this2.buttons = /*#__PURE__*/_react["default"].createRef();
    return _this2;
  }

  _createClass(InlineShareButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      load(this, 'inline-share-buttons');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.buttons
      });
    }
  }]);

  return InlineShareButtons;
}(_react["default"].Component);

exports.InlineShareButtons = InlineShareButtons;
;

var InlineReactionButtons = /*#__PURE__*/function (_React$Component3) {
  _inherits(InlineReactionButtons, _React$Component3);

  var _super3 = _createSuper(InlineReactionButtons);

  function InlineReactionButtons(props) {
    var _this3;

    _classCallCheck(this, InlineReactionButtons);

    _this3 = _super3.call(this, props);
    _this3.buttons = /*#__PURE__*/_react["default"].createRef();
    return _this3;
  }

  _createClass(InlineReactionButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      load(this, 'inline-reaction-buttons');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.buttons
      });
    }
  }]);

  return InlineReactionButtons;
}(_react["default"].Component);

exports.InlineReactionButtons = InlineReactionButtons;
;

var StickyShareButtons = /*#__PURE__*/function (_React$Component4) {
  _inherits(StickyShareButtons, _React$Component4);

  var _super4 = _createSuper(StickyShareButtons);

  function StickyShareButtons(props) {
    var _this4;

    _classCallCheck(this, StickyShareButtons);

    _this4 = _super4.call(this, props);
    _this4.buttons = /*#__PURE__*/_react["default"].createRef();
    return _this4;
  }

  _createClass(StickyShareButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      load(this, 'sticky-share-buttons');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.buttons
      });
    }
  }]);

  return StickyShareButtons;
}(_react["default"].Component);

exports.StickyShareButtons = StickyShareButtons;
; // export

