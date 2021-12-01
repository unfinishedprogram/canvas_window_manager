/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context)\n/* harmony export */ });\n/* harmony import */ var _events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/mouseEvent */ \"./src/events/mouseEvent.ts\");\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame */ \"./src/frame.ts\");\n/* harmony import */ var _types_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/bounds */ \"./src/types/bounds.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar Context = /** @class */ (function (_super) {\n    __extends(Context, _super);\n    function Context() {\n        var _this = _super.call(this, new _types_bounds__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, 0, window.innerWidth, window.innerHeight)) || this;\n        document.body.appendChild(_this.canvas);\n        window.addEventListener(\"resize\", function () {\n            _this.setBounds(new _types_bounds__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, 0, window.innerWidth, window.innerHeight));\n        });\n        _this.canvas.addEventListener(\"mousedown\", function (e) {\n            _this.fireMouseEvent(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseDown, e, e.clientX, e.clientY);\n        });\n        _this.canvas.addEventListener(\"mouseup\", function (e) {\n            _this.fireMouseEvent(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseUp, e, e.clientX, e.clientY);\n        });\n        _this.canvas.addEventListener(\"mousemove\", function (e) {\n            _this.fireMouseEvent(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseMove, e, e.clientX, e.clientY);\n        });\n        return _this;\n    }\n    return Context;\n}(_frame__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n\n\n//# sourceURL=webpack://window_manager/./src/context.ts?");

/***/ }),

/***/ "./src/events/mouseEvent.ts":
/*!**********************************!*\
  !*** ./src/events/mouseEvent.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MouseEventType\": () => (/* binding */ MouseEventType)\n/* harmony export */ });\nvar MouseEventType;\n(function (MouseEventType) {\n    MouseEventType[MouseEventType[\"mouseDown\"] = 0] = \"mouseDown\";\n    MouseEventType[MouseEventType[\"mouseUp\"] = 1] = \"mouseUp\";\n    MouseEventType[MouseEventType[\"mouseMove\"] = 2] = \"mouseMove\";\n    MouseEventType[MouseEventType[\"mouseEnter\"] = 3] = \"mouseEnter\";\n    MouseEventType[MouseEventType[\"mouseLeave\"] = 4] = \"mouseLeave\";\n})(MouseEventType || (MouseEventType = {}));\n\n\n//# sourceURL=webpack://window_manager/./src/events/mouseEvent.ts?");

/***/ }),

/***/ "./src/frame.ts":
/*!**********************!*\
  !*** ./src/frame.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Frame = /** @class */ (function () {\n    function Frame(bounds) {\n        this.canvas = document.createElement(\"canvas\");\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.color = \"#ccc\";\n        this.parent = null;\n        this.children = [];\n        this.listeners = {};\n        this.removed = false;\n        this.bounds = bounds;\n        this.setBounds(bounds);\n    }\n    Frame.prototype.onAppended = function (parent) { };\n    ;\n    Frame.prototype.addEventListner = function (event, callback) {\n        if (!this.listeners[event]) {\n            this.listeners[event] = [];\n        }\n        this.listeners[event].push(callback.bind(this));\n    };\n    Frame.prototype.setColor = function (color) {\n        this.color = color;\n    };\n    Frame.prototype.append = function (frame) {\n        frame.parent = this;\n        this.children.push(frame);\n        frame.onAppended(this);\n    };\n    Frame.prototype.update = function () {\n        this.purgeChildren();\n        this.children.forEach(function (child) { return child.update(); });\n    };\n    Frame.prototype.remove = function () {\n        if (this.parent) {\n            this.parent.removeChild(this);\n        }\n        this.removed = true;\n    };\n    Frame.prototype.removeChild = function (child) {\n        this.children = this.children.filter(function (_child) { return _child != child; });\n    };\n    Frame.prototype.setBounds = function (bounds) {\n        this.bounds = bounds;\n        this.canvas.width = this.bounds.width;\n        this.canvas.height = this.bounds.height;\n    };\n    Frame.prototype.updateBounds = function (bounds) {\n        this.bounds.width = bounds.width;\n        this.bounds.height = bounds.height;\n        this.bounds.top = bounds.top;\n        this.bounds.left = bounds.left;\n        this.canvas.width = this.bounds.width;\n        this.canvas.height = this.bounds.height;\n    };\n    Frame.prototype.setLeft = function (left) {\n        this.bounds.left = left;\n    };\n    Frame.prototype.setTop = function (top) {\n        this.bounds.top = top;\n    };\n    Frame.prototype.setWidth = function (width) {\n        this.bounds.width = width;\n        this.canvas.width = width;\n    };\n    Frame.prototype.setHeight = function (height) {\n        this.bounds.height = height;\n        this.canvas.height = height;\n    };\n    Frame.prototype.purgeChildren = function () {\n        this.children = this.children.filter(function (child) {\n            var removed = child.removed;\n            return !removed;\n        });\n    };\n    Frame.prototype.draw = function () {\n        var _this = this;\n        this.ctx.fillStyle = this.color;\n        this.ctx.strokeStyle = this.color;\n        this.ctx.clearRect(0, 0, this.bounds.width, this.bounds.height);\n        this.ctx.fillRect(0, 0, this.bounds.width, this.bounds.height);\n        this.children.forEach(function (child) {\n            _this.ctx.shadowColor = '#0005';\n            _this.ctx.shadowBlur = 5;\n            _this.ctx.shadowOffsetY = 5;\n            _this.ctx.fillRect(child.bounds.left, child.bounds.top, child.bounds.width, child.bounds.height);\n            _this.ctx.putImageData(child.draw(), child.bounds.left, child.bounds.top);\n        });\n        // this.ctx.strokeRect(0,0, this.bounds.width, this.bounds.height);\n        return this.ctx.getImageData(0, 0, this.bounds.width, this.bounds.height);\n    };\n    Frame.prototype.fireMouseEvent = function (event, data, x, y) {\n        var _a;\n        this.children.forEach(function (child) {\n            if (child.bounds.top > y)\n                return;\n            if (child.bounds.top + child.bounds.height < y)\n                return;\n            if (child.bounds.left > x)\n                return;\n            if (child.bounds.left + child.bounds.width < x)\n                return;\n            console.log(\"Propigating to child\");\n            child.fireMouseEvent(event, data, x - child.bounds.left, y - child.bounds.top);\n        });\n        if (this.listeners[event]) {\n            (_a = this.listeners[event]) === null || _a === void 0 ? void 0 : _a.forEach(function (callback) { return callback(data); });\n        }\n    };\n    return Frame;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frame);\n\n\n//# sourceURL=webpack://window_manager/./src/frame.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_titleBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/titleBar */ \"./src/objects/titleBar.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ \"./src/context.ts\");\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame */ \"./src/frame.ts\");\n/* harmony import */ var _types_bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/bounds */ \"./src/types/bounds.ts\");\n/* harmony import */ var _events_mouseEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/mouseEvent */ \"./src/events/mouseEvent.ts\");\n\n\n\n\n\nvar myContext = new _context__WEBPACK_IMPORTED_MODULE_1__.Context();\nvar myFrame = new _frame__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new _types_bounds__WEBPACK_IMPORTED_MODULE_3__[\"default\"](20, 20, 500, 500));\nmyFrame.setColor(\"#0099aa\");\nmyFrame.append(new _objects_titleBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"This is a title\"));\nmyFrame.children[0].setColor(\"#ff99aa\");\nmyContext.append(myFrame);\nmyFrame.addEventListner(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_4__.MouseEventType.mouseDown, function () {\n    myFrame.setColor(\"#ff99aa\");\n});\nmyContext.draw();\nsetInterval(function () { return myContext.draw(); });\n\n\n//# sourceURL=webpack://window_manager/./src/index.ts?");

/***/ }),

/***/ "./src/objects/textElement.ts":
/*!************************************!*\
  !*** ./src/objects/textElement.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame */ \"./src/frame.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar HorizontalAlignment;\n(function (HorizontalAlignment) {\n    HorizontalAlignment[HorizontalAlignment[\"left\"] = 0] = \"left\";\n    HorizontalAlignment[HorizontalAlignment[\"middle\"] = 1] = \"middle\";\n    HorizontalAlignment[HorizontalAlignment[\"right\"] = 2] = \"right\";\n})(HorizontalAlignment || (HorizontalAlignment = {}));\nvar TextElement = /** @class */ (function (_super) {\n    __extends(TextElement, _super);\n    function TextElement(bounds, content, fontSize) {\n        var _this = _super.call(this, bounds) || this;\n        _this.properties = {\n            textContent: content,\n            fontSize: fontSize ? fontSize : 20,\n            horizontalAlign: HorizontalAlignment.left\n        };\n        _this.setColor(\"#000000\");\n        return _this;\n    }\n    TextElement.prototype.draw = function () {\n        var _this = this;\n        this.ctx.clearRect(0, 0, this.bounds.width, this.bounds.height);\n        this.ctx.fillStyle = this.color;\n        this.ctx.font = this.properties.fontSize + \"px sans-serif\";\n        this.ctx.fillText(this.properties.textContent, 0, this.properties.fontSize);\n        this.children.forEach(function (child) {\n            var childData = child.draw();\n            _this.ctx.putImageData(childData, child.bounds.left, child.bounds.top);\n        });\n        return this.ctx.getImageData(0, 0, this.bounds.width, this.bounds.height);\n    };\n    return TextElement;\n}(_frame__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextElement);\n\n\n//# sourceURL=webpack://window_manager/./src/objects/textElement.ts?");

/***/ }),

/***/ "./src/objects/titleBar.ts":
/*!*********************************!*\
  !*** ./src/objects/titleBar.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/mouseEvent */ \"./src/events/mouseEvent.ts\");\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame */ \"./src/frame.ts\");\n/* harmony import */ var _types_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/bounds */ \"./src/types/bounds.ts\");\n/* harmony import */ var _textElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textElement */ \"./src/objects/textElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar TitleBar = /** @class */ (function (_super) {\n    __extends(TitleBar, _super);\n    function TitleBar(title) {\n        var _this = _super.call(this, new _types_bounds__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, 0, 1, 26)) || this;\n        _this.mouseDown = false;\n        _this.title = title;\n        _this.titleElm = new _textElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_this.bounds, title);\n        _this.append(_this.titleElm);\n        _this.addEventListner(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseLeave, function () { return _this.mouseDown = false; });\n        _this.addEventListner(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseDown, function () { return _this.mouseDown = true; });\n        _this.addEventListner(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseUp, function () { return _this.mouseDown = false; });\n        _this.addEventListner(_events_mouseEvent__WEBPACK_IMPORTED_MODULE_0__.MouseEventType.mouseMove, function (e) {\n            var _a, _b;\n            if (_this.mouseDown) {\n                (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.setLeft(_this.parent.bounds.left + e.movementX);\n                (_b = _this.parent) === null || _b === void 0 ? void 0 : _b.setTop(_this.parent.bounds.top + e.movementY);\n            }\n        });\n        return _this;\n    }\n    TitleBar.prototype.onAppended = function (parent) {\n        this.setWidth(parent.bounds.width);\n        this.titleElm.setBounds(this.bounds);\n    };\n    return TitleBar;\n}(_frame__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleBar);\n\n\n//# sourceURL=webpack://window_manager/./src/objects/titleBar.ts?");

/***/ }),

/***/ "./src/types/bounds.ts":
/*!*****************************!*\
  !*** ./src/types/bounds.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Bounds = /** @class */ (function () {\n    function Bounds(top, left, width, height) {\n        this.top = top;\n        this.left = left;\n        this.width = width;\n        this.height = height;\n    }\n    return Bounds;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bounds);\n\n\n//# sourceURL=webpack://window_manager/./src/types/bounds.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;