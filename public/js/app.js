(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _signin = _interopRequireDefault(require("./components/signin.js"));

var _signup = _interopRequireDefault(require("./components/signup.js"));

var _postPropertyDialog = _interopRequireDefault(require("./components/postPropertyDialog.js"));

var _updatePropertyDialog = _interopRequireDefault(require("./components/updatePropertyDialog.js"));

var _propertyDetailDialog = _interopRequireDefault(require("./components/propertyDetailDialog.js"));

var _properties = _interopRequireDefault(require("./components/properties.js"));

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
    this.postPropertyDialog = new _postPropertyDialog["default"](container);
    this.updatePropertyDialog = new _updatePropertyDialog["default"](container);
    this.propertyDetailDialog = new _propertyDetailDialog["default"](container);
    this.PropertiesPage = new _properties["default"](container);
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      //this.signin.render();
      //this.signup.render();
      //this.postPropertyDialog.show();
      //this.updatePropertyDialog.show();
      //this.propertyDetailDialog.show();
      this.PropertiesPage.render();
    }
  }]);

  return App;
}();

module.exports = App;

},{"./components/postPropertyDialog.js":2,"./components/properties.js":3,"./components/propertyDetailDialog.js":4,"./components/signin.js":6,"./components/signup.js":7,"./components/updatePropertyDialog.js":8}],2:[function(require,module,exports){
"use strict";

var _postPropertyDialog = _interopRequireDefault(require("../templates/postPropertyDialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PostPropertyDialog =
/*#__PURE__*/
function () {
  function PostPropertyDialog(container) {
    _classCallCheck(this, PostPropertyDialog);

    this.container = container;
  }

  _createClass(PostPropertyDialog, [{
    key: "show",
    value: function show() {
      //temporary operation
      this.container.innerHTML = _postPropertyDialog["default"].show();
    }
  }]);

  return PostPropertyDialog;
}();

module.exports = PostPropertyDialog;

},{"../templates/postPropertyDialog.js":10}],3:[function(require,module,exports){
"use strict";

var _properties = _interopRequireDefault(require("../templates/properties"));

var _propertyViewer = _interopRequireDefault(require("../components/propertyViewer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Properties =
/*#__PURE__*/
function () {
  function Properties(container) {
    _classCallCheck(this, Properties);

    this.container = container;
    this.propertyViewer = null;
  }

  _createClass(Properties, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = _properties["default"].render();
      var nestedContainer = document.querySelector("#properties-grid");
      this.propertyViewer = new _propertyViewer["default"](nestedContainer);
      this.propertyViewer.render();
    }
  }]);

  return Properties;
}();

module.exports = Properties;

},{"../components/propertyViewer.js":5,"../templates/properties":11}],4:[function(require,module,exports){
"use strict";

var _propertyDetailDialog = _interopRequireDefault(require("../templates/propertyDetailDialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PropertyDetailDialog =
/*#__PURE__*/
function () {
  function PropertyDetailDialog(container) {
    _classCallCheck(this, PropertyDetailDialog);

    this.container = container;
  }

  _createClass(PropertyDetailDialog, [{
    key: "show",
    value: function show() {
      this.container.innerHTML = _propertyDetailDialog["default"].show();
    }
  }]);

  return PropertyDetailDialog;
}();

module.exports = PropertyDetailDialog;

},{"../templates/propertyDetailDialog.js":12}],5:[function(require,module,exports){
"use strict";

var _propertyViewer = _interopRequireDefault(require("../templates/propertyViewer.js"));

var _temporaryProperties = _interopRequireDefault(require("../temp/temporaryProperties.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PropertyViewer =
/*#__PURE__*/
function () {
  function PropertyViewer(container) {
    _classCallCheck(this, PropertyViewer);

    this.container = container;
  }

  _createClass(PropertyViewer, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = _propertyViewer["default"].render(_temporaryProperties["default"]);
    }
  }]);

  return PropertyViewer;
}();

module.exports = PropertyViewer;

},{"../temp/temporaryProperties.js":9,"../templates/propertyViewer.js":13}],6:[function(require,module,exports){
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

},{"../templates/signin.js":14}],7:[function(require,module,exports){
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

},{"../templates/signup":15}],8:[function(require,module,exports){
"use strict";

var _updatePropertyDialog = _interopRequireDefault(require("../templates/updatePropertyDialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UpdatePropertyDialog =
/*#__PURE__*/
function () {
  function UpdatePropertyDialog(container) {
    _classCallCheck(this, UpdatePropertyDialog);

    this.container = container;
  }

  _createClass(UpdatePropertyDialog, [{
    key: "show",
    value: function show() {
      this.container.innerHTML = _updatePropertyDialog["default"].show();
    }
  }]);

  return UpdatePropertyDialog;
}();

module.exports = UpdatePropertyDialog;

},{"../templates/updatePropertyDialog.js":16}],9:[function(require,module,exports){
"use strict";

var properties = [{
  id: 1,
  owner: 1,
  status: "available",
  price: "300$",
  state: "Kano",
  city: "Kano",
  address: "Da Vilas",
  type: "Duplex",
  image_url: "../public/images/estate.jpg"
}, {
  id: 1,
  owner: 1,
  status: "available",
  price: "400$",
  state: "Abuja",
  city: "Jabi",
  address: "Jabi Estate",
  type: "Self Contained",
  image_url: "../public/images/estate.jpg"
}, {
  id: 1,
  owner: 1,
  status: "available",
  price: "700$",
  state: "Abuja",
  city: "Garki 11",
  address: "No.10 British America",
  type: "Duplex",
  image_url: "../public/images/estate.jpg"
}, {
  id: 1,
  owner: 1,
  status: "available",
  price: "400$",
  state: "Enugu",
  city: "Enugu",
  address: "No.10 Brown Estate",
  type: "Bungalow",
  image_url: "../public/images/estate.jpg"
}, {
  id: 1,
  owner: 1,
  status: "available",
  price: "400$",
  state: "Enugu",
  city: "Enugu",
  address: "No.18 Brown Estate",
  type: "Mini Flat",
  image_url: "../public/images/estate.jpg"
}, {
  id: 1,
  owner: 1,
  status: "available",
  price: "400$",
  state: "Enugu",
  city: "Enugu",
  address: "No.12 Brown Estate",
  type: "3 Bedroom Flat",
  image_url: "../public/images/estate.jpg"
}];
module.exports = properties;

},{}],10:[function(require,module,exports){
"use strict";

exports.show = function () {
  return "\n            <div class = \"dialog-container\">\n                <div class = \"dialog-header\">\n                    <span class = \"dialog-title\">Post Advert</span>\n                    <button class = \"close-rect smaller-text\">x</button>\n                </div>\n                <form class = \"property-form\">\n                    <input type = \"text\" placeholder = \"Property Address\" title = \"Property Address\" required/>\n                    <input type = \"text\" placeholder = \"Property City\" title = \"Property City\" required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Property State\" title = \"Property State\" required/>\n                    <select class = \"property-type\">\n                        <option value = \"Property type\"> Property type</option>\n                        <option value = \"Self-contained\">Self-contained</option>\n                        <option value = \"2 Bedroom\">2 Bedroom</option>\n                        <option value = \"3 Bedroom\">3 Bedroom</option>\n                        <option value = \"Mini flat\">Mini flat</option>\n                        <option value = \"Duplex\">Duplex</option>\n                        <option value = \"Bungalow\">Bungalow</option>\n                    </select>\n                    <br>\n                    <input type = \"number\" placeholder = \"Property Price\" title = \"Property Price\" required/>\n                    <input type = \"file\"/>\n                    <br><br><br>\n                    <button  class = \"fab tooltip\">\n                        <img src = \"../public/vectors/tick.svg\" alt =\"tick\" width = \"25px\" height = \"25px\"/>\n                        <span class = \"tooltiptext small-text\">Post</span>\n                    </button>\n                </form>\n            <div>\n    ";
};

},{}],11:[function(require,module,exports){
"use strict";

exports.render = function () {
  return "\n        <div class = \"property-container\">\n            <div id = \"properties-title\">Property Adverts</div>\n            <div class = \"property-type-holder\">\n            <form>\n                    <label>Search by:</label>\n                        <select class = \"property-type-options\">\n                            <option value = \"Property type\"> Property type</option>\n                            <option value = \"Self-contained\">Self-contained</option>\n                            <option value = \"2 Bedroom\">2 Bedroom</option>\n                            <option value = \"3 Bedroom\">3 Bedroom</option>\n                            <option value = \"Mini flat\">Mini flat</option>\n                            <option value = \"Duplex\">Duplex</option>\n                            <option value = \"Bungalow\">Bungalow</option>\n                        </select>\n                </form>\n            </div>\n            <div id = \"properties-grid\"></div>\n            <div id = \"add-property-button\" class = \"fab tooltip\">+\n                <span class = \"tooltiptext small-text\">Add property</span>\n            </div>\n        </div>";
};

},{}],12:[function(require,module,exports){
"use strict";

exports.show = function () {
  return "\n        <div class = \"dialog-container\">\n            <div class = \"dialog-header\">\n                <span class = \"dialog-title\">Property Detail</span>\n                <button class = \"close-rect smaller-text\">x</button>\n            </div>\n            <div class = \"property-detail-content bit-smaller-text\">\n                <div class = \"property-detail-images\"></div>\n                <form class = \"property-detail-form\">\n                    <div>\n                        <label class = \"bold-text\">Type:</label> \n                        <span data-property-type>Sample Text</span>\n                        <br>\n                        <label class = \"bold-text\">Address:</label> \n                        <span data-property-address>Sample Text</span>\n                        <br>\n                        <label class = \"bold-text\">Price:</label>\n                        <span data-property-price>Sample Text</span>\n                        <br>\n                        <label class = \"bold-text\">Status:</label>\n                        <span data-property-status>Sample Text</span>\n                        <br>\n                        <p class = \"bold-text\">Owner Contact Information</p>\n                        <label class = \"bold-text\">Owner:</label>\n                        <span data-property-owner>Sample Text</span>\n                        <br>\n                        <label class = \"bold-text\">Phone:</label>\n                        <span data-property-phone>Sample Text</span>\n                        <br>\n                        <label class = \"bold-text\">Posted On:</label>\n                        <span data-property-post-date>Sample Text</span>\n                    </div>   \n                    <div class = \"action-section\">\n                        <button class = \"fab tooltip\">\n                            <img src = \"../public/vectors/edit.svg\" alt = \"edit-icon\" width = \"20px\" height = \"20px\"/>\n                            <span class = \"tooltiptext small-text\">Edit property</span>\n                        </button>\n                        <br><br>    \n                        <button id = \"delete-action\" class = \"fab tooltip\">\n                            <img src = \"../public/vectors/dustbin.svg\" alt = \"delete-icon\" width = \"20px\" height = \"20px\"/>\n                            <span class = \"tooltiptext small-text\">Delete Property</span>\n                        </button>    \n                    </div> \n                </form>\n            </div>\n        </div>";
};

},{}],13:[function(require,module,exports){
"use strict";

var renderProperties = function renderProperties(properties) {
  return properties.map(function (property) {
    return "\n            <div class = \"property-item bold-text\">\n                <img src = \"../public/images/estate.jpg\" alt = \"property image\" width= \"250px\" height = \"250px\"/><br>\n                <span>".concat(property.address, "</span><br>\n                <span>").concat(property.price, "</span><br>\n                <span>").concat(property.status, "</span><br>\n            </div>\n            ");
  }).join("");
};

exports.render = function (properties) {
  if (properties && properties.length) {
    return renderProperties(properties);
  }

  return "<h4 class = \"text-center\">No property found</h4>";
};

},{}],14:[function(require,module,exports){
"use strict";

exports.render = function () {
  return "\n        <div class = 'main-content'>\n            <div class = 'home-image-container'>\n                <img src = '../public/images/estate.jpg' alt = 'image'/>\n            </div>\n            <div class = 'form-container'>\n                <div class = 'form-header smaller-text'>Sign In</div>\n                <form id ='signin-form'>\n                    <input type = 'text' placeholder = 'Username' title = 'Provide username' required/> <br>\n                    <input type = 'password' placeholder = 'Password' title = 'Provide Password' required/> <br>\n                    <label class = \"checkbox small-text\"> \n                        <input type = \"checkbox\">\n                        Forget Password?\n                        <span class = \"checkmark\"></span>\n                    <label> <br>\n                    <button class = 'login-button smaller-text'>Sign in</button>\n                </form>\n                <p class= 'form-container-text'>Don't have an account?</p>\n                <p id ='signup-text' class = 'bold-text smaller-text' > \n                    <a href = '#'>\n                    SIGN UP NOW\n                    </a>\n                </p>\n            </div>\n        </div>";
};

},{}],15:[function(require,module,exports){
"use strict";

exports.render = function () {
  return "\n        <div class = \"main-content\">\n             <div class = \"form-container\">\n                <div class = \"form-header smaller-text\">Sign up</div>\n                <form id = \"signup-form\">\n                    <input type = \"text\" placeholder = \"First Name\" title = \"Username\" required/>\n                    <input type = \"text\" placeholder = \"Last Name\" title = \"Last Name\" required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Email\" title = \"Email\" required/>\n                    <input type = \"text\" placeholder = \"Phone\" title = \"Phone\" required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Address\" title = \"Address\" required/>\n                    <input type = \"password\" placeholder = \"Password\" title = \"Password\" required/>\n                    <br>\n                    <label class = \"checkbox small-text\">\n                        <input type = \"checkbox\" />\n                        Sign up as an Agent\n                        <span class = \"checkmark\"></span>\n                    </label>\n                    <br>\n                    <button class = 'login-button smaller-text'>Sign up</button>    \n                </form>\n                <p class = \"form-container-text small-text\">Already have an account?</p>\n                <p id = \"signin-text\" class = 'bold-text smaller-text'>\n                    <a href = \"#\">SIGN IN</a>\n                </p>    \n             </div>\n             <div class = \"home-image-container\">\n                <img src = \"../public/images/estate.jpg\" alt ='estate img'/>\n             </div>\n        </div>\n    ";
};

},{}],16:[function(require,module,exports){
"use strict";

exports.show = function () {
  return "\n    <div class = \"dialog-container\">\n        <div class = \"dialog-header\">\n            <span class = \"dialog-title\">Edit Advert</span>\n            <button class = \"close-rect smaller-text\">x</button>\n        </div>\n        <form class = \"property-form\">\n            <input type = \"text\" placeholder = \"Property Address\" title = \"Property Address\" required/>\n            <input type = \"text\" placeholder = \"Property City\" title = \"Property City\" required/>\n            <br>\n            <input type = \"text\" placeholder = \"Property State\" title = \"Property State\" required/>\n            <select class = \"property-type\">\n                <option value = \"Property type\"> Property type</option>\n                <option value = \"Self-contained\">Self-contained</option>\n                <option value = \"2 Bedroom\">2 Bedroom</option>\n                <option value = \"3 Bedroom\">3 Bedroom</option>\n                <option value = \"Mini flat\">Mini flat</option>\n                <option value = \"Duplex\">Duplex</option>\n                <option value = \"Bungalow\">Bungalow</option>\n            </select>\n            <br>\n            <input type = \"number\" placeholder = \"Property Price\" title = \"Property Price\" required/>\n            <input type = \"file\"/>\n            <br>\n            <label class = \"checkbox bit-smaller-text\">\n                <input type = \"checkbox\" />\n                Sold\n                <span class = \"checkmark\"></span>\n            </label>\n            <br><br>\n            <button  class = \"fab tooltip\">\n                <img src = \"../public/vectors/tick.svg\" alt =\"tick\" width = \"25px\" height = \"25px\"/>\n                <span class = \"tooltiptext small-text\">Edit</span>\n            </button>\n        </form>\n    <div>\n    ";
};

},{}],17:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  var main = document.querySelector("main");
  new _app["default"](main).init();
};

},{"./app.js":1}]},{},[17]);
