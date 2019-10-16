/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/page-load */ \"./src/partials/page-load.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/logo-tacos.png */ \"./src/static/logo-tacos.png\");\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst content = document.getElementById('content');\ncontent.appendChild(Object(_partials_page_load__WEBPACK_IMPORTED_MODULE_0__[\"pageLoad\"])());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFydGlhbHMvcGFnZS1sb2FkJztcblxuaW1wb3J0ICcuL3N0eWxlL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vc3RhdGljL2xvZ28tdGFjb3MucG5nJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKHBhZ2VMb2FkKCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/page-load.js":
/*!***********************************!*\
  !*** ./src/partials/page-load.js ***!
  \***********************************/
/*! exports provided: pageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoad\", function() { return pageLoad; });\nfunction pageLoad (){\n\n    const containerDiv = document.createElement('div');\n    containerDiv.classList.add('container');\n\n    const headerDiv = document.createElement('div');\n    headerDiv.classList.add('header');\n\n    const phoneDiv = document.createElement('div');\n    phoneDiv.innerHTML = `<h4 class=\"headerInfo\">PHONE:<br>83765495</h4>`;\n\n    const image = document.createElement('div');\n    image.innerHTML = `<img src=\"../static/logo-tacos.png\" class=\"logo\">`;\n\n\n    const scheduleDiv = document.createElement('div');\n    scheduleDiv.innerHTML = `<h4 class=\"headerInfo\">OPEN EVERYDAY<br>8AM - 3PM<br>6:30PM - 4AM</h3>`;\n\n\n    headerDiv.appendChild(phoneDiv);\n    headerDiv.appendChild(image);\n    headerDiv.appendChild(scheduleDiv);\n\n    const nav = document.createElement('nav');\n    const ul = document.createElement('ul');\n\n    const menu = document.createElement('li');\n    menu.innerText = 'Menu';\n\n    const about = document.createElement('li');\n    about.innerText = 'About';\n    \n    const contact = document.createElement('li');\n    contact.innerText = 'Contact';\n\n    ul.appendChild(menu);\n    ul.appendChild(about);\n    ul.appendChild(contact);\n    \n    const main = document.createElement('div');\n    main.classList.add('main');\n\n    nav.appendChild(ul);\n\n    containerDiv.appendChild(headerDiv);\n    containerDiv.appendChild(nav);\n    \n\n    return containerDiv;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcGFnZS1sb2FkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3BhZ2UtbG9hZC5qcz85OGJhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBhZ2VMb2FkICgpe1xuXG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgcGhvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZURpdi5pbm5lckhUTUwgPSBgPGg0IGNsYXNzPVwiaGVhZGVySW5mb1wiPlBIT05FOjxicj44Mzc2NTQ5NTwvaDQ+YDtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2UuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiLi4vc3RhdGljL2xvZ28tdGFjb3MucG5nXCIgY2xhc3M9XCJsb2dvXCI+YDtcblxuXG4gICAgY29uc3Qgc2NoZWR1bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZHVsZURpdi5pbm5lckhUTUwgPSBgPGg0IGNsYXNzPVwiaGVhZGVySW5mb1wiPk9QRU4gRVZFUllEQVk8YnI+OEFNIC0gM1BNPGJyPjY6MzBQTSAtIDRBTTwvaDM+YDtcblxuXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHBob25lRGl2KTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChzY2hlZHVsZURpdik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51LmlubmVyVGV4dCA9ICdNZW51JztcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhYm91dC5pbm5lclRleHQgPSAnQWJvdXQnO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBcblxuICAgIHJldHVybiBjb250YWluZXJEaXY7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/page-load.js\n");

/***/ }),

/***/ "./src/static/logo-tacos.png":
/*!***********************************!*\
  !*** ./src/static/logo-tacos.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/logo-tacos.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2xvZ28tdGFjb3MucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2dvLXRhY29zLnBuZz8xZGJjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9sb2dvLXRhY29zLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/logo-tacos.png\n");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL21haW4uc2Nzcz83NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style/main.scss\n");

/***/ })

/******/ });