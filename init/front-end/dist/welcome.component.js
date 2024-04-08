"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomeComponent = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.set-prototype-of.js");
var _component = require("../../scripts/component");
var _welcomeComponent = _interopRequireDefault(require("../welcome/welcome.component.html"));
require("./welcome.component.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } // TODO #import-html: use ES default imports to import welcome.html as template
// TODO #export-functions: remove the IIFE
//(function () {
// TODO #export-functions: export function WelcomeComponent
// TODO #class: use the ES6 class keyword
/* class WelcomeComponent constructor  */
var WelcomeComponent = exports.WelcomeComponent = /*#__PURE__*/function (_Component) {
  function WelcomeComponent() {
    var _this;
    _classCallCheck(this, WelcomeComponent);
    // TODO #extends: call super(template)
    _this = _callSuper(this, WelcomeComponent, [_welcomeComponent.default]);
    // TODO #import-html: assign template to this.template
    _this.template = _welcomeComponent.default;
    return _this;
  }

  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  //window.WelcomeComponent = WelcomeComponent;
  // TODO #class: turn function into a method of WelcomeComponent
  /* method WelcomeComponent.init */
  _inherits(WelcomeComponent, _Component);
  return _createClass(WelcomeComponent, [{
    key: "init",
    value: function init() {
      var form = document.querySelector("form.form-signin");
      form.addEventListener("submit",
      // TODONE #arrow-function: use arrow function instead.
      function (event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          var name = event.srcElement.querySelector("#nickname").value;
          var size = parseInt(event.srcElement.querySelector("#size").value);
          new _startGame(name, size);
          //this.
        }
      }, false);
      return this;
    }
  }]);
}(_component.Component); // TODO #class: turn function into a method of WelcomeComponent
var _startGame = /*#__PURE__*/_createClass(function _startGame(name, size) {
  _classCallCheck(this, _startGame);
  // TODO #spa: replace with './#game'
  var gamePage = "./#game";
  // TODONE #template-literals:  use template literals (backquotes)
  window.location = "".concat(gamePage, "?name=").concat(name, "&size=").concat(size);
}); //})();