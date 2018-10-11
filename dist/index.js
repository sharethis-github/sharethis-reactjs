"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyShareButtons = exports.InlineShareButtons = exports.InlineReactionButtons = exports.InlineFollowButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// dependencies


var InlineFollowButtons = function (_React$Component) {
  _inherits(InlineFollowButtons, _React$Component);

  function InlineFollowButtons(props) {
    _classCallCheck(this, InlineFollowButtons);

    var _this = _possibleConstructorReturn(this, (InlineFollowButtons.__proto__ || Object.getPrototypeOf(InlineFollowButtons)).call(this, props));

    _this.buttons = _react2.default.createRef();
    return _this;
  }

  _createClass(InlineFollowButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // load config
      var config = JSON.parse(JSON.stringify(this.props.config));

      // load sharethis.js
      if (!document.getElementById('sharethis-js')) {
        var script = document.createElement("script");
        script.setAttribute('id', 'sharethis-js');
        script.src = "https://platform-api.sharethis.com/js/sharethis.js" + "?product=inline-follow-buttons&source=reactjs";
        script.async = true;
        document.body.appendChild(script);
      }

      // load buttons
      var _onShareThisLoaded = window.onShareThisLoaded;
      window.onShareThisLoaded = function () {
        if (!config.id) {
          var id = 'sharethis-' + Date.now();
          config.id = id;
        }
        _this2.buttons.current.id = config.id;
        window.__sharethis__.load('inline-follow-buttons', config);
        if (_onShareThisLoaded) {
          _onShareThisLoaded();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { ref: this.buttons });
    }
  }]);

  return InlineFollowButtons;
}(_react2.default.Component);

;

var InlineShareButtons = function (_React$Component2) {
  _inherits(InlineShareButtons, _React$Component2);

  function InlineShareButtons(props) {
    _classCallCheck(this, InlineShareButtons);

    var _this3 = _possibleConstructorReturn(this, (InlineShareButtons.__proto__ || Object.getPrototypeOf(InlineShareButtons)).call(this, props));

    _this3.buttons = _react2.default.createRef();
    return _this3;
  }

  _createClass(InlineShareButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      // load config
      var config = JSON.parse(JSON.stringify(this.props.config));

      // load sharethis.js
      if (!document.getElementById('sharethis-js')) {
        var script = document.createElement("script");
        script.setAttribute('id', 'sharethis-js');
        script.src = "https://platform-api.sharethis.com/js/sharethis.js" + "?product=inline-share-buttons&source=reactjs";
        script.async = true;
        document.body.appendChild(script);
      }

      // load buttons
      var _onShareThisLoaded = window.onShareThisLoaded;
      window.onShareThisLoaded = function () {
        if (!config.id) {
          var id = 'sharethis-' + Date.now();
          config.id = id;
        }
        _this4.buttons.current.id = config.id;
        window.__sharethis__.load('inline-share-buttons', config);
        if (_onShareThisLoaded) {
          _onShareThisLoaded();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { ref: this.buttons });
    }
  }]);

  return InlineShareButtons;
}(_react2.default.Component);

;

var InlineReactionButtons = function (_React$Component3) {
  _inherits(InlineReactionButtons, _React$Component3);

  function InlineReactionButtons(props) {
    _classCallCheck(this, InlineReactionButtons);

    var _this5 = _possibleConstructorReturn(this, (InlineReactionButtons.__proto__ || Object.getPrototypeOf(InlineReactionButtons)).call(this, props));

    _this5.buttons = _react2.default.createRef();
    return _this5;
  }

  _createClass(InlineReactionButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      // load config
      var config = JSON.parse(JSON.stringify(this.props.config));

      // load sharethis.js
      if (!document.getElementById('sharethis-js')) {
        var script = document.createElement("script");
        script.setAttribute('id', 'sharethis-js');
        script.src = "https://platform-api.sharethis.com/js/sharethis.js" + "?product=inline-reaction-buttons&source=reactjs";
        script.async = true;
        document.body.appendChild(script);
      }

      // load buttons
      var _onShareThisLoaded = window.onShareThisLoaded;
      window.onShareThisLoaded = function () {
        if (!config.id) {
          var id = 'sharethis-' + Date.now();
          config.id = id;
        }
        _this6.buttons.current.id = config.id;
        window.__sharethis__.load('inline-reaction-buttons', config);
        if (_onShareThisLoaded) {
          _onShareThisLoaded();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { ref: this.buttons });
    }
  }]);

  return InlineReactionButtons;
}(_react2.default.Component);

;

var StickyShareButtons = function (_React$Component4) {
  _inherits(StickyShareButtons, _React$Component4);

  function StickyShareButtons(props) {
    _classCallCheck(this, StickyShareButtons);

    var _this7 = _possibleConstructorReturn(this, (StickyShareButtons.__proto__ || Object.getPrototypeOf(StickyShareButtons)).call(this, props));

    _this7.buttons = _react2.default.createRef();
    return _this7;
  }

  _createClass(StickyShareButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this8 = this;

      // load config
      var config = JSON.parse(JSON.stringify(this.props.config));

      // load sharethis.js
      if (!document.getElementById('sharethis-js')) {
        var script = document.createElement("script");
        script.setAttribute('id', 'sharethis-js');
        script.src = "https://platform-api.sharethis.com/js/sharethis.js" + "?product=sticky-share-buttons&source=reactjs";
        script.async = true;
        document.body.appendChild(script);
      }

      // load buttons
      var _onShareThisLoaded = window.onShareThisLoaded;
      window.onShareThisLoaded = function () {
        if (!config.id) {
          var id = 'sharethis-' + Date.now();
          config.id = id;
        }
        _this8.buttons.current.id = config.id;
        window.__sharethis__.load('sticky-share-buttons', config);
        if (_onShareThisLoaded) {
          _onShareThisLoaded();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { ref: this.buttons });
    }
  }]);

  return StickyShareButtons;
}(_react2.default.Component);

;

// export
exports.InlineFollowButtons = InlineFollowButtons;
exports.InlineReactionButtons = InlineReactionButtons;
exports.InlineShareButtons = InlineShareButtons;
exports.StickyShareButtons = StickyShareButtons;

