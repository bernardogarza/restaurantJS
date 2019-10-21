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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/page-load */ \"./src/partials/page-load.js\");\n/* harmony import */ var _partials_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/about */ \"./src/partials/about.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/logo-tacos.png */ \"./src/static/logo-tacos.png\");\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst content = document.getElementById('content');\ncontent.appendChild(Object(_partials_page_load__WEBPACK_IMPORTED_MODULE_0__[\"pageLoad\"])());\n\nconst mainDiv = document.querySelector('.main');\nmainDiv.appendChild(aboutTab());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFydGlhbHMvcGFnZS1sb2FkJ1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL3BhcnRpYWxzL2Fib3V0J1xuaW1wb3J0ICcuL3N0eWxlL21haW4uc2NzcydcbmltcG9ydCAnLi9zdGF0aWMvbG9nby10YWNvcy5wbmcnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUxvYWQoKSk7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChhYm91dFRhYigpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/about.js":
/*!*******************************!*\
  !*** ./src/partials/about.js ***!
  \*******************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\nfunction about() {\n\n  const aboutDiv = document.createElement('div');\n  aboutDiv.classList.add('about');\n  aboutDiv.innerHTML = `<h1>Who we are?</h1>`\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYWJvdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvYWJvdXQuanM/Nzk0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dCgpIHtcblxuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICBhYm91dERpdi5pbm5lckhUTUwgPSBgPGgxPldobyB3ZSBhcmU/PC9oMT5gXG5cbn1cblxuZXhwb3J0IHsgYWJvdXQgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/about.js\n");

/***/ }),

/***/ "./src/partials/page-load.js":
/*!***********************************!*\
  !*** ./src/partials/page-load.js ***!
  \***********************************/
/*! exports provided: pageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoad\", function() { return pageLoad; });\nfunction pageLoad (){\n\n\tconst containerDiv = document.createElement('div');\n  containerDiv.classList.add('container');\n\n\tconst headerDiv = document.createElement('div');\n\theaderDiv.classList.add('header');\n\n\tconst phoneDiv = document.createElement('div');\n\tphoneDiv.innerHTML = `<h4 class=\"headerInfo\">PHONE:<br>83765495</h4>`;\n\n\tconst image = document.createElement('div');\n\timage.innerHTML = `<img src=\"./static/logo-tacos.png\" class=\"logo\">`;\n\n\n\tconst scheduleDiv = document.createElement('div');\n\tscheduleDiv.innerHTML = `<h4 class=\"headerInfo\">OPEN EVERYDAY<br>8AM - 3PM<br>6PM - 4AM</h3>`;\n\n\n\theaderDiv.appendChild(phoneDiv);\n\theaderDiv.appendChild(image);\n\theaderDiv.appendChild(scheduleDiv);\n\n\tconst nav = document.createElement('nav');\n\tconst ul = document.createElement('ul');\n  \n\tconst about = document.createElement('li');\n\tabout.innerText = 'About';\n\n\tconst menu = document.createElement('li');\n\tmenu.innerText = 'Menu';\n\t\n\tconst contact = document.createElement('li');\n\tcontact.innerText = 'Contact';\n\n\tul.appendChild(menu);\n\tul.appendChild(about);\n\tul.appendChild(contact);\n\t\n\tconst main = document.createElement('div');\n\tmain.classList.add('main');\n\n\tnav.appendChild(ul);\n\n\tcontainerDiv.appendChild(headerDiv);\n\tcontainerDiv.appendChild(nav);\n\t\n\n\treturn containerDiv;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcGFnZS1sb2FkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3BhZ2UtbG9hZC5qcz85OGJhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBhZ2VMb2FkICgpe1xuXG5cdGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cblx0Y29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuXHRjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwaG9uZURpdi5pbm5lckhUTUwgPSBgPGg0IGNsYXNzPVwiaGVhZGVySW5mb1wiPlBIT05FOjxicj44Mzc2NTQ5NTwvaDQ+YDtcblxuXHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRpbWFnZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIuL3N0YXRpYy9sb2dvLXRhY29zLnBuZ1wiIGNsYXNzPVwibG9nb1wiPmA7XG5cblxuXHRjb25zdCBzY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzY2hlZHVsZURpdi5pbm5lckhUTUwgPSBgPGg0IGNsYXNzPVwiaGVhZGVySW5mb1wiPk9QRU4gRVZFUllEQVk8YnI+OEFNIC0gM1BNPGJyPjZQTSAtIDRBTTwvaDM+YDtcblxuXG5cdGhlYWRlckRpdi5hcHBlbmRDaGlsZChwaG9uZURpdik7XG5cdGhlYWRlckRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdGhlYWRlckRpdi5hcHBlbmRDaGlsZChzY2hlZHVsZURpdik7XG5cblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cdGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgXG5cdGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0YWJvdXQuaW5uZXJUZXh0ID0gJ0Fib3V0JztcblxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bWVudS5pbm5lclRleHQgPSAnTWVudSc7XG5cdFxuXHRjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0Y29udGFjdC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG5cblx0dWwuYXBwZW5kQ2hpbGQobWVudSk7XG5cdHVsLmFwcGVuZENoaWxkKGFib3V0KTtcblx0dWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cdFxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG5cdG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cblx0Y29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cdGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChuYXYpO1xuXHRcblxuXHRyZXR1cm4gY29udGFpbmVyRGl2O1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZCB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/page-load.js\n");

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