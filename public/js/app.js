(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    this.propertiesPage = new _properties["default"](container);
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.signin.render();
      this.addEventListener();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      this.signinEvents();
      this.signupEvents();
      this.propertiesTemplateEvent();
      this.propertyDetailDialogEvent();
      this.postPropertyDialogEvent();
    }
  }, {
    key: "signinEvents",
    value: function signinEvents() {
      var _this = this;

      this.signin.on("signin", function (data) {
        alert("".concat(data.first_name, " signed in."));

        _this.propertiesPage.render();
      });
      this.signin.on("error", function (error) {
        alert(error);
      });
      this.signin.on("signup", function () {
        return _this.signup.render();
      });
    }
  }, {
    key: "signupEvents",
    value: function signupEvents() {
      var _this2 = this;

      this.signup.on("signin_click", function () {
        return _this2.signin.render();
      });
      this.signup.on("signup", function (data) {
        console.log(data);

        _this2.signin.render();
      });
      this.signup.on("error", function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "propertiesTemplateEvent",
    value: function propertiesTemplateEvent() {
      var _this3 = this;

      this.propertiesPage.on("add_button_click", function () {
        _this3.postPropertyDialog.show();
      });
      this.propertiesPage.on("property_item_click", function (data) {
        console.log("property id:", data);

        _this3.propertyDetailDialog.setContent(data);

        _this3.propertyDetailDialog.show();
      });
      this.propertiesPage.on("type_change", function (selectedType) {
        _this3.propertiesPage.renderByType(selectedType);
      });
      this.propertiesPage.on("property_type_error", function (error) {
        _this3.propertiesPage.render();

        alert(error);
      });
    }
  }, {
    key: "propertyDetailDialogEvent",
    value: function propertyDetailDialogEvent() {
      var _this4 = this;

      this.propertyDetailDialog.on("edit_property", function () {
        _this4.updatePropertyDialog.show();

        _this4.propertyDetailDialog.dismiss();
      });
      this.propertyDetailDialog.on("delete_property", function () {
        alert("Property deleted!");

        _this4.propertyDetailDialog.dismiss();

        _this4.propertiesPage.render();
      });
      this.propertyDetailDialog.on("deletion_error", function (error) {
        alert(error);
      });
    }
  }, {
    key: "postPropertyDialogEvent",
    value: function postPropertyDialogEvent() {
      var _this5 = this;

      this.postPropertyDialog.on("add_property", function (data) {
        console.log(data);
        alert("Property added!");

        _this5.postPropertyDialog.clear();

        _this5.postPropertyDialog.dismiss();

        _this5.propertiesPage.render();
      });
      this.postPropertyDialog.on("error", function (error) {
        console.log(error);
        alert(error);
      });
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;

},{"./components/postPropertyDialog.js":5,"./components/properties.js":6,"./components/propertyDetailDialog.js":7,"./components/signin.js":9,"./components/signup.js":10,"./components/updatePropertyDialog.js":11}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));

var _overlay = require("./overlay.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dialog =
/*#__PURE__*/
function (_TinyEmitter) {
  _inherits(Dialog, _TinyEmitter);

  function Dialog(container) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this));
    _this.container = container;
    _this.overlay = (0, _overlay.createOverlay)();
    _this.dialog = _this.createDialog();
    return _this;
  }

  _createClass(Dialog, [{
    key: "createDialog",
    value: function createDialog() {
      var dialogContainer = document.createElement("div");
      dialogContainer.setAttribute("class", "dialog-container");
      return dialogContainer;
    }
  }, {
    key: "show",
    value: function show() {
      this.container.appendChild(this.overlay);
      this.container.appendChild(this.dialog);
    }
  }, {
    key: "dismiss",
    value: function dismiss() {
      this.container.removeChild(this.overlay);
      this.container.removeChild(this.dialog);
    }
  }]);

  return Dialog;
}(_tinyEmitter["default"]);

var _default = Dialog;
exports["default"] = _default;

},{"./overlay.js":4,"tiny-emitter":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOverlay = createOverlay;

function createOverlay() {
  var overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  overlay.setAttribute("class", "dialog-overlay");
  return overlay;
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _postPropertyDialog = _interopRequireDefault(require("../templates/postPropertyDialog.js"));

var _dialog = _interopRequireDefault(require("./dialog.js"));

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PostPropertyDialog =
/*#__PURE__*/
function (_Dialog) {
  _inherits(PostPropertyDialog, _Dialog);

  function PostPropertyDialog(container) {
    _classCallCheck(this, PostPropertyDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostPropertyDialog).call(this, container));
  }

  _createClass(PostPropertyDialog, [{
    key: "createDialog",
    value: function createDialog() {
      var _this = this;

      var dialogContainer = _get(_getPrototypeOf(PostPropertyDialog.prototype), "createDialog", this).call(this);

      dialogContainer.innerHTML = _postPropertyDialog["default"];
      var form = dialogContainer.querySelector("form");
      var closebtn = dialogContainer.querySelector(".close-rect");
      closebtn.addEventListener("click", function (event) {
        event.preventDefault();

        _this.dismiss();
      });
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append("address", event.target.querySelector("[data-address]").value);
        formData.append("price", event.target.querySelector("[data-price]").value);
        formData.append("state", event.target.querySelector("[data-state]").value);
        formData.append("city", event.target.querySelector("[data-city]").value);
        formData.append("type", event.target.querySelector("[data-type]").value);
        formData.append("image_url", event.target.querySelector("[data-image-url]").files[0]);

        _this.addProperty(formData);
      });
      return dialogContainer;
    }
  }, {
    key: "addProperty",
    value: function addProperty(data) {
      var _this2 = this;

      fetch("".concat(_config["default"].baseUrl, "/api/v1/property"), {
        mode: "cors",
        method: "POST",
        body: data
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.error) {
          return Promise.reject(res.error);
        }

        _this2.emit("add_property", res.data);
      })["catch"](function (err) {
        return _this2.emit("error", err);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.container.querySelector(".property-form").reset();
    }
  }]);

  return PostPropertyDialog;
}(_dialog["default"]);

var _default = PostPropertyDialog;
exports["default"] = _default;

},{"../config.js":12,"../templates/postPropertyDialog.js":13,"./dialog.js":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _properties = require("../templates/properties");

var _propertyViewer = _interopRequireDefault(require("../components/propertyViewer.js"));

var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Properties =
/*#__PURE__*/
function (_TinyEmitter) {
  _inherits(Properties, _TinyEmitter);

  function Properties(container) {
    var _this;

    _classCallCheck(this, Properties);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Properties).call(this));
    _this.container = container;
    _this.propertyViewer = null;
    return _this;
  }

  _createClass(Properties, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = (0, _properties.render)();
      var nestedContainer = document.querySelector("#properties-grid");
      this.propertyViewer = new _propertyViewer["default"](nestedContainer);
      this.propertyViewer.render();
      this.addEventListeners();
    }
  }, {
    key: "renderByType",
    value: function renderByType(type) {
      var _this2 = this;

      this.container.innerHTML = (0, _properties.render)();
      var nestedContainer = document.querySelector("#properties-grid");
      this.propertyViewer = new _propertyViewer["default"](nestedContainer);
      this.propertyViewer.renderByType(type)["catch"](function (err) {
        _this2.emit("property_type_error", err);
      });
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.addClick();
      this.propertyItemClick();
      this.propertyTypeChange();
    }
  }, {
    key: "addClick",
    value: function addClick() {
      var _this3 = this;

      var addButton = this.container.querySelector("#add-property-button");
      addButton.addEventListener("click", function (event) {
        event.preventDefault();

        _this3.emit("add_button_click");
      });
    }
  }, {
    key: "propertyItemClick",
    value: function propertyItemClick() {
      var _this4 = this;

      this.propertyViewer.on("property_item_click", function (data) {
        _this4.emit("property_item_click", data);
      });
    }
  }, {
    key: "propertyTypeChange",
    value: function propertyTypeChange() {
      var _this5 = this;

      var propertyTypes = document.querySelector(".property-type-options");
      propertyTypes.addEventListener("change", function (event) {
        var selectedType = event.target.value;
        console.log("select type:", selectedType);

        _this5.emit("type_change", selectedType);
      });
    }
  }]);

  return Properties;
}(_tinyEmitter["default"]);

var _default = Properties;
exports["default"] = _default;

},{"../components/propertyViewer.js":8,"../templates/properties":14,"tiny-emitter":1}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propertyDetailDialog = _interopRequireDefault(require("../templates/propertyDetailDialog.js"));

var _dialog = _interopRequireDefault(require("./dialog.js"));

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PropertyDetailDialog =
/*#__PURE__*/
function (_Dialog) {
  _inherits(PropertyDetailDialog, _Dialog);

  function PropertyDetailDialog(container) {
    var _this;

    _classCallCheck(this, PropertyDetailDialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyDetailDialog).call(this, container));
    _this.dialogContainer;
    _this.property;
    return _this;
  }

  _createClass(PropertyDetailDialog, [{
    key: "addEventListener",
    value: function addEventListener() {
      this.onCloseClick();
      this.onEditClick();
      this.onDeleteClick();
    }
  }, {
    key: "createDialog",
    value: function createDialog() {
      this.dialogContainer = _get(_getPrototypeOf(PropertyDetailDialog.prototype), "createDialog", this).call(this);
      this.dialogContainer.innerHTML = (0, _propertyDetailDialog["default"])();
      this.addEventListener();
      return this.dialogContainer;
    }
  }, {
    key: "setContent",
    value: function setContent(property) {
      this.property = property;
      this.dialogContainer.innerHTML = (0, _propertyDetailDialog["default"])(property);
      this.addEventListener();
    }
  }, {
    key: "onCloseClick",
    value: function onCloseClick() {
      var _this2 = this;

      var closeBtn = this.dialogContainer.querySelector(".close-rect");
      closeBtn.addEventListener("click", function (event) {
        event.preventDefault();

        _this2.dismiss();
      });
    }
  }, {
    key: "onEditClick",
    value: function onEditClick() {
      var _this3 = this;

      var editBtn = this.dialogContainer.querySelector("#edit-action");
      editBtn.addEventListener("click", function (event) {
        event.preventDefault();

        _this3.emit("edit_property");
      });
    }
  }, {
    key: "onDeleteClick",
    value: function onDeleteClick() {
      var _this4 = this;

      var delBtn = this.dialogContainer.querySelector("#delete-action");
      delBtn.addEventListener("click", function (event) {
        event.preventDefault();

        _this4.deleteProperty(_this4.property.id);
      });
    }
  }, {
    key: "deleteProperty",
    value: function deleteProperty(id) {
      var _this5 = this;

      fetch("".concat(_config["default"].baseUrl, "/api/v1/property/").concat(id), {
        mode: "cors",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.error) {
          return Promise.reject(res.error);
        }

        _this5.emit("delete_property");
      })["catch"](function (err) {
        return _this5.emit("deletion_error", err);
      });
    }
  }]);

  return PropertyDetailDialog;
}(_dialog["default"]);

var _default = PropertyDetailDialog;
exports["default"] = _default;

},{"../config.js":12,"../templates/propertyDetailDialog.js":15,"./dialog.js":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propertyViewer = require("../templates/propertyViewer.js");

var _config = _interopRequireDefault(require("../config.js"));

var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PropertyViewer =
/*#__PURE__*/
function (_TinyEmitter) {
  _inherits(PropertyViewer, _TinyEmitter);

  function PropertyViewer(container) {
    var _this;

    _classCallCheck(this, PropertyViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyViewer).call(this));
    _this.container = container;
    return _this;
  }

  _createClass(PropertyViewer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      fetch("".concat(_config["default"].baseUrl, "/api/v1/property"), {
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.data.length > 0) {
          console.log(res.data);
          _this2.container.innerHTML = (0, _propertyViewer.render)(res.data);

          _this2.emitIds(res.data, _this2.container.querySelectorAll(".property-item"));
        }
      });
    }
  }, {
    key: "renderByType",
    value: function renderByType(type) {
      var _this3 = this;

      return fetch("".concat(_config["default"].baseUrl, "/api/v1/property/type?type=").concat(type), {
        mode: 'cors',
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.error) {
          return Promise.reject(res.error);
        }

        _this3.container.innerHTML = (0, _propertyViewer.render)(res.data);

        _this3.emitIds(res.data, _this3.container.querySelectorAll(".property-item"));
      });
    }
  }, {
    key: "emitIds",
    value: function emitIds(data, container) {
      var _this4 = this;

      container.forEach(function (item, index) {
        item.addEventListener("click", function () {
          _this4.emit("property_item_click", data[index]);
        });
      });
    }
  }]);

  return PropertyViewer;
}(_tinyEmitter["default"]);

var _default = PropertyViewer;
exports["default"] = _default;

},{"../config.js":12,"../templates/propertyViewer.js":16,"tiny-emitter":1}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _signin = require("../templates/signin.js");

var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Signin =
/*#__PURE__*/
function (_TinyEmitter) {
  _inherits(Signin, _TinyEmitter);

  function Signin(container) {
    var _this;

    _classCallCheck(this, Signin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signin).call(this));
    _this.container = container;
    _this.baseUrl = _config["default"].baseUrl;
    return _this;
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = (0, _signin.render)();
      this.container.querySelector("[data-email]").focus();
      this.addEventListener();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      this.openPropertiesPage();
      this.signInClick();
      this.signupClick();
    }
  }, {
    key: "openPropertiesPage",
    value: function openPropertiesPage() {
      var _this2 = this;

      var form = this.container.querySelector("#signin-form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (event.target.querySelector("button")) _this2.emit("view_properties");
      });
    }
  }, {
    key: "signInClick",
    value: function signInClick() {
      var _this3 = this;

      var form = this.container.querySelector("#signin-form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var email = event.target.querySelector("[data-email]");
        var password = event.target.querySelector("[data-password]");
        var data = {
          email: email.value,
          password: password.value
        };

        _this3.signInUser(data);
      });
    }
  }, {
    key: "signupClick",
    value: function signupClick() {
      var _this4 = this;

      var signupText = this.container.querySelector("#signup-text");
      signupText.addEventListener("click", function (event) {
        event.preventDefault();

        _this4.emit("signup");
      });
    }
  }, {
    key: "signInUser",
    value: function signInUser(data) {
      var _this5 = this;

      fetch("".concat(this.baseUrl, "/api/v1/auth/signin"), {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.error) {
          return Promise.reject(res.error);
        }

        _this5.emit("signin", res.data);
      })["catch"](function (err) {
        return _this5.emit("error", err);
      });
    }
  }]);

  return Signin;
}(_tinyEmitter["default"]);

var _default = Signin;
exports["default"] = _default;

},{"../config.js":12,"../templates/signin.js":17,"tiny-emitter":1}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _signup = require("../templates/signup");

var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Signup =
/*#__PURE__*/
function (_TinyEmitter) {
  _inherits(Signup, _TinyEmitter);

  function Signup(container) {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this));
    _this.container = container;
    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = (0, _signup.render)();
      this.container.querySelector("[data-first-name]").focus();
      this.addEventListener();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      this.openSigninPage();
      this.signupClick();
    }
  }, {
    key: "openSigninPage",
    value: function openSigninPage() {
      var _this2 = this;

      var signinText = this.container.querySelector("#signin-text");
      signinText.addEventListener("click", function (event) {
        event.preventDefault();

        _this2.emit("signin_click");
      });
    }
  }, {
    key: "signupClick",
    value: function signupClick() {
      var _this3 = this;

      var form = this.container.querySelector("#signup-form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var firstName = event.target.querySelector("[data-first-name]");
        var lastName = event.target.querySelector("[data-last-name]");
        var email = event.target.querySelector("[data-email]");
        var password = event.target.querySelector("[data-password]");
        var phone = event.target.querySelector("[data-phone]");
        var address = event.target.querySelector("[data-address]");

        _this3.signupUser({
          email: email.value,
          first_name: firstName.value,
          last_name: lastName.value,
          password: password.value,
          address: address.value,
          phone_number: phone.value
        });
      });
    }
  }, {
    key: "signupUser",
    value: function signupUser(data) {
      var _this4 = this;

      fetch("".concat(_config["default"].baseUrl, "/api/v1/auth/signup"), {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.error) {
          return Promise.reject(res.error);
        }

        _this4.emit("signup", res.data);
      })["catch"](function (err) {
        return _this4.emit("error", err);
      });
    }
  }]);

  return Signup;
}(_tinyEmitter["default"]);

var _default = Signup;
exports["default"] = _default;

},{"../config.js":12,"../templates/signup":18,"tiny-emitter":1}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _updatePropertyDialog = _interopRequireDefault(require("../templates/updatePropertyDialog.js"));

var _dialog = _interopRequireDefault(require("./dialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UpdatePropertyDialog =
/*#__PURE__*/
function (_Dialog) {
  _inherits(UpdatePropertyDialog, _Dialog);

  function UpdatePropertyDialog(container) {
    _classCallCheck(this, UpdatePropertyDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(UpdatePropertyDialog).call(this, container));
  }

  _createClass(UpdatePropertyDialog, [{
    key: "createDialog",
    value: function createDialog() {
      var _this = this;

      var dialogContainer = _get(_getPrototypeOf(UpdatePropertyDialog.prototype), "createDialog", this).call(this);

      dialogContainer.innerHTML = _updatePropertyDialog["default"];
      var form = dialogContainer.querySelector("form");
      var closeBtn = dialogContainer.querySelector(".close-rect");
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (event.target.querySelector("#done")) {
          _this.emit("update_property");
        }
      });
      closeBtn.addEventListener("click", function (event) {
        event.preventDefault();

        _this.dismiss();
      });
      return dialogContainer;
    }
  }]);

  return UpdatePropertyDialog;
}(_dialog["default"]);

var _default = UpdatePropertyDialog;
exports["default"] = _default;

},{"../templates/updatePropertyDialog.js":19,"./dialog.js":3}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  baseUrl: "https://property-pro-lite-api.herokuapp.com"
};
var _default = config;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var template = "\n    <div class = \"dialog-header\">\n        <span class = \"dialog-title\">Post Advert</span>\n        <button class = \"close-rect smaller-text\">x</button>\n    </div>\n    <form class = \"property-form\">\n        <input type = \"text\" placeholder = \"Property Address\" title = \"Property Address\" data-address required/>\n        <input type = \"text\" placeholder = \"Property City\" title = \"Property City\" data-city required/>\n        <br>\n        <input type = \"text\" placeholder = \"Property State\" title = \"Property State\" data-state required/>\n        <select class = \"property-type\" data-type>\n            <option value = \"Property type\"> Property type</option>\n            <option value = \"Self-contained\">Self-contained</option>\n            <option value = \"2 Bedroom\">2 Bedroom</option>\n            <option value = \"3 Bedroom\">3 Bedroom</option>\n            <option value = \"Mini flat\">Mini flat</option>\n            <option value = \"Duplex\">Duplex</option>\n            <option value = \"Bungalow\">Bungalow</option>\n        </select>\n        <br>\n        <input type = \"number\" placeholder = \"Property Price\" title = \"Property Price\" data-price required/>\n        <input type = \"file\" data-image-url/>\n        <br><br><br>\n        <button id = \"done\" class = \"fab tooltip\">\n            <img src = \"./vectors/tick.svg\" alt =\"tick\" width = \"25px\" height = \"25px\"/>\n            <span class = \"tooltiptext small-text\">Post</span>\n        </button>\n    </form>";
var _default = template;
exports["default"] = _default;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

function render() {
  return "\n        <div class = \"property-container\">\n            <div id = \"properties-title\">Property Adverts</div>\n            <div class = \"property-type-holder\">\n            <form>\n                    <label>Search by:</label>\n                        <select class = \"property-type-options\">\n                            <option value = \"Property type\"> Property type</option>\n                            <option value = \"Self-contained\">Self-contained</option>\n                            <option value = \"2 Bedroom\">2 Bedroom</option>\n                            <option value = \"3 Bedroom\">3 Bedroom</option>\n                            <option value = \"Mini flat\">Mini flat</option>\n                            <option value = \"Duplex\">Duplex</option>\n                            <option value = \"Bungalow\">Bungalow</option>\n                        </select>\n                </form>\n            </div>\n            <div id = \"properties-grid\"></div>\n            <div id = \"add-property-button\" class = \"fab tooltip\">+\n                <span class = \"tooltiptext small-text\">Add property</span>\n            </div>\n        </div>";
}

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var template = function template() {
  var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var template = "\n        <div class = \"dialog-header\">\n            <span class = \"dialog-title\">Property Detail</span>\n            <button class = \"close-rect smaller-text\">x</button>\n        </div>\n        <div class = \"property-detail-content bit-smaller-text\">\n        <div class = \"property-detail-images\">\n            <img src = ".concat(property.image_url, " alt = \"prop-image\" width = \"300px\"/>\n        </div>\n        <form class = \"property-detail-form\">\n            <div>\n                <label class = \"bold-text\">Type:</label> \n                <span data-property-type>").concat(property.type, "</span>\n                <br>\n                <label class = \"bold-text\">Address:</label> \n                <span data-property-address>").concat(property.address, "</span>\n                <br>\n                <label class = \"bold-text\">Price:</label>\n                <span data-property-price>").concat(property.price, "</span>\n                <br>\n                <label class = \"bold-text\">Status:</label>\n                <span data-property-status>").concat(property.status, "</span>\n                <br>\n                <p class = \"bold-text\">Owner Contact Information</p>\n                <label class = \"bold-text\">Email:</label>\n                <span data-property-owner>").concat(property.owner_email, "</span>\n                <br>\n                <label class = \"bold-text\">Phone:</label>\n                <span data-property-phone>").concat(property.owner_phone_number, "</span>\n                <br>\n                <label class = \"bold-text\">Posted On:</label>\n                <span data-property-post-date>").concat(property.created_on, "</span>\n            </div>   \n            <div class = \"action-section\">\n                <button id = \"edit-action\" class = \"fab tooltip\">\n                    <img src = \"./vectors/edit.svg\" alt = \"edit-icon\" width = \"20px\" height = \"20px\"/>\n                    <span class = \"tooltiptext small-text\">Edit property</span>\n                </button>\n                <br><br>    \n                <button id = \"delete-action\" class = \"fab tooltip\">\n                    <img src = \"./vectors/dustbin.svg\" alt = \"delete-icon\" width = \"20px\" height = \"20px\"/>\n                    <span class = \"tooltiptext small-text\">Delete Property</span>\n                </button>    \n            </div> \n        </form>\n        </div>");
  return template;
};

var _default = template;
exports["default"] = _default;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var renderProperties = function renderProperties(properties) {
  return properties.map(function (property) {
    return "\n            <div class = \"property-item bold-text\">\n                <img src = ".concat(property.image_url, " alt = \"property image\" width= \"250px\" height = \"250px\"/><br>\n                <span>").concat(property.address, "</span><br>\n                <span>").concat(property.price, "</span><br>\n                <span>").concat(property.status, "</span><br>\n            </div>");
  }).join("");
};

function render(properties) {
  if (properties && properties.length) {
    return renderProperties(properties);
  }

  return "<h4 class = \"text-center\">No property found</h4>";
}

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

function render() {
  return "\n        <div class = 'main-content'>\n            <div class = 'home-image-container'>\n                <img src = './images/estate.jpg' alt = 'image'/>\n            </div>\n            <div class = 'form-container'>\n                <div class = 'form-header smaller-text'>Sign In</div>\n                <form id ='signin-form'>\n                    <input type = 'text' placeholder = 'Email' title = 'Provide email' data-email required/> <br>\n                    <input type = 'password' placeholder = 'Password' title = 'Provide Password' data-password required/> <br>\n                    <label class = \"checkbox small-text\"> \n                        <input type = \"checkbox\">\n                        Forget Password?\n                        <span class = \"checkmark\"></span>\n                    <label> <br>\n                    <button class = 'login-button smaller-text'>Sign in</button>\n                </form>\n                <p class= 'form-container-text'>Don't have an account?</p>\n                <p id ='signup-text' class = 'bold-text smaller-text' > \n                    <a href = '#'>\n                    SIGN UP NOW\n                    </a>\n                </p>\n            </div>\n        </div>";
}

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

function render() {
  return "\n        <div class = \"main-content\">\n             <div class = \"form-container\">\n                <div class = \"form-header smaller-text\">Sign up</div>\n                <form id = \"signup-form\">\n                    <input type = \"text\" placeholder = \"First Name\" title = \"Username\" data-first-name required/>\n                    <input type = \"text\" placeholder = \"Last Name\" title = \"Last Name\" data-last-name required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Email\" title = \"Email\" data-email required/>\n                    <input type = \"text\" placeholder = \"Phone\" title = \"Phone\" data-phone required/>\n                    <br>\n                    <input type = \"text\" placeholder = \"Address\" title = \"Address\" data-address required/>\n                    <input type = \"password\" placeholder = \"Password\" title = \"Password\" data-password required/>\n                    <br>\n                    <label class = \"checkbox small-text\">\n                        <input type = \"checkbox\" data-admin />\n                        Sign up as an Admin\n                        <span class = \"checkmark\"></span>\n                    </label>\n                    <br>\n                    <button class = 'login-button smaller-text'>Sign up</button>    \n                </form>\n                <p class = \"form-container-text small-text\">Already have an account?</p>\n                <p id = \"signin-text\" class = 'bold-text smaller-text'>\n                    <a href = \"#\">SIGN IN</a>\n                </p>    \n             </div>\n             <div class = \"home-image-container\">\n                <img src = \"./images/estate.jpg\" alt ='estate img'/>\n             </div>\n        </div>\n    ";
}

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var template = "\n    <div class = \"dialog-container\">\n        <div class = \"dialog-header\">\n            <span class = \"dialog-title\">Edit Advert</span>\n            <button class = \"close-rect smaller-text\">x</button>\n        </div>\n        <form class = \"property-form\">\n            <input type = \"text\" placeholder = \"Property Address\" title = \"Property Address\" required/>\n            <input type = \"text\" placeholder = \"Property City\" title = \"Property City\" required/>\n            <br>\n            <input type = \"text\" placeholder = \"Property State\" title = \"Property State\" required/>\n            <select class = \"property-type\">\n                <option value = \"Property type\"> Property type</option>\n                <option value = \"Self-contained\">Self-contained</option>\n                <option value = \"2 Bedroom\">2 Bedroom</option>\n                <option value = \"3 Bedroom\">3 Bedroom</option>\n                <option value = \"Mini flat\">Mini flat</option>\n                <option value = \"Duplex\">Duplex</option>\n                <option value = \"Bungalow\">Bungalow</option>\n            </select>\n            <br>\n            <input type = \"number\" placeholder = \"Property Price\" title = \"Property Price\" required/>\n            <input type = \"file\"/>\n            <br>\n            <label class = \"checkbox bit-smaller-text\">\n                <input type = \"checkbox\" />\n                Sold\n                <span class = \"checkmark\"></span>\n            </label>\n            <br><br>\n            <button id = \"done\" class = \"fab tooltip\">\n                <img src = \"./vectors/tick.svg\" alt =\"tick\" width = \"25px\" height = \"25px\"/>\n                <span class = \"tooltiptext small-text\">Edit</span>\n            </button>\n        </form>\n    <div>";
var _default = template;
exports["default"] = _default;

},{}],20:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  var main = document.querySelector("main");
  new _app["default"](main).init();
};

},{"./app.js":2}]},{},[20]);
