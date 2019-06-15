(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _signin = _interopRequireDefault(require("./components/signin.js"));

var _signup = _interopRequireDefault(require("./components/signup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App(container) {
    _classCallCheck(this, App);

    this.signin = new _signin["default"](container);
    this.signup = new _signup["default"](container);
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      //this.signin.render();
      this.signup.render();
    }
  }]);

  return App;
}();

module.exports = App;

},{"./components/signin.js":2,"./components/signup.js":3}],2:[function(require,module,exports){
"use strict";

var _signin = _interopRequireDefault(require("../templates/signin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Signin =
/*#__PURE__*/
function () {
  function Signin(container) {
    _classCallCheck(this, Signin);

    this.container = container;
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = _signin["default"].render();
    }
  }]);

  return Signin;
}();

module.exports = Signin;

},{"../templates/signin.js":4}],3:[function(require,module,exports){
"use strict";

var _signup = _interopRequireDefault(require("../templates/signup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Signup =
/*#__PURE__*/
function () {
  function Signup(container) {
    _classCallCheck(this, Signup);

    this.container = container;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = _signup["default"].render();
    }
  }]);

  return Signup;
}();

module.exports = Signup;

},{"../templates/signup":5}],4:[function(require,module,exports){
"use strict";

exports.render = function () {
  return "\n        <div class = 'main-content'>\n            <div class = 'home-image-container'>\n                <img src = '../public/images/estate.jpg' alt = 'image'/>\n            </div>\n            <div class = 'form-container'>\n                <div class = 'form-header smaller-text'>Sign In</div>\n                <form id ='signin-form'>\n                    <input type = 'text' placeholder = 'Username' title = 'Provide username' required/> <br>\n                    <input type = 'password' placeholder = 'Password' title = 'Provide Password' required/> <br>\n                    <label class = \"checkbox small-text\"> \n                        <input type = \"checkbox\">\n                        Forget Password?\n                        <span class = \"checkmark\"></span>\n                    <label> <br>\n                    <button class = 'login-button smaller-text'>Sign in</button>\n                </form>\n                <p class= 'form-container-text'>Don't have an account?</p>\n                <p id ='signup-text' class = 'bold-text smaller-text' > \n                    <a href = '#'>\n                    SIGN UP NOW\n                    </a>\n                </p>\n            </div>\n        </div>";
};

},{}],5:[function(require,module,exports){
"use strict";

exports.render = function () {
  return "\n        <div class = \"main-content\">\n             <div class = \"form-container\">\n                <div class = \"form-header smaller-text\">Sign up</div>\n                <form id = \"signup-form\">\n                    <input type = \"text\" placeholder = \"First Name\" title = \"Username\" required/>\n                    <input type = \"text\" placeholder = \"Last Name\" title = \"Last Name\" required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Email\" title = \"Email\" required/>\n                    <input type = \"text\" placeholder = \"Phone\" title = \"Phone\" required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Address\" title = \"Address\" required/>\n                    <input type = \"password\" placeholder = \"Password\" title = \"Password\" required/>\n                    <br>\n                    <label class = \"checkbox small-text\">\n                        <input type = \"checkbox\" />\n                        Sign up as an Agent\n                        <span class = \"checkmark\"></span>\n                    </label>\n                    <br>\n                    <button class = 'login-button smaller-text'>Sign up</button>    \n                </form>\n                <p class = \"form-container-text small-text\">Already have an account?</p>\n                <p id = \"signin-text\" class = 'bold-text smaller-text'>\n                    <a href = \"#\">SIGN IN</a>\n                </p>    \n             </div>\n             <div class = \"home-image-container\">\n                <img src = \"../public/images/estate.jpg\" alt ='estate img'/>\n             </div>\n        </div>\n    ";
};

},{}],6:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  var main = document.querySelector("main");
  new _app["default"](main).init();
};

},{"./app.js":1}]},{},[6]);
