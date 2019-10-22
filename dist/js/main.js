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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/page-load */ \"./src/partials/page-load.js\");\n/* harmony import */ var _partials_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/about */ \"./src/partials/about.js\");\n/* harmony import */ var _partials_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/menu */ \"./src/partials/menu.js\");\n/* harmony import */ var _partials_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/contact */ \"./src/partials/contact.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/logo-tacos.png */ \"./src/static/logo-tacos.png\");\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _static_about_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static/about.png */ \"./src/static/about.png\");\n/* harmony import */ var _static_about_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_about_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _static_cuates_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static/cuates.png */ \"./src/static/cuates.png\");\n/* harmony import */ var _static_cuates_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_cuates_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _static_pirata_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static/pirata.png */ \"./src/static/pirata.png\");\n/* harmony import */ var _static_pirata_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_pirata_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _static_special_tacos_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static/special-tacos.png */ \"./src/static/special-tacos.png\");\n/* harmony import */ var _static_special_tacos_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_special_tacos_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _static_regular_tacos_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./static/regular-tacos.png */ \"./src/static/regular-tacos.png\");\n/* harmony import */ var _static_regular_tacos_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_regular_tacos_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _static_frijoles_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static/frijoles.png */ \"./src/static/frijoles.png\");\n/* harmony import */ var _static_frijoles_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_frijoles_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _static_hamburger_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./static/hamburger.png */ \"./src/static/hamburger.png\");\n/* harmony import */ var _static_hamburger_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_hamburger_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _static_potato_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./static/potato.png */ \"./src/static/potato.png\");\n/* harmony import */ var _static_potato_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_potato_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _static_valle_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./static/valle.png */ \"./src/static/valle.png\");\n/* harmony import */ var _static_valle_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_valle_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _static_cumbres_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./static/cumbres.png */ \"./src/static/cumbres.png\");\n/* harmony import */ var _static_cumbres_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_cumbres_png__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _static_fundidora_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./static/fundidora.png */ \"./src/static/fundidora.png\");\n/* harmony import */ var _static_fundidora_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_fundidora_png__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _static_anahuac_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./static/anahuac.png */ \"./src/static/anahuac.png\");\n/* harmony import */ var _static_anahuac_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_anahuac_png__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst content = document.getElementById('content')\ncontent.appendChild(Object(_partials_page_load__WEBPACK_IMPORTED_MODULE_0__[\"pageLoad\"])())\n\nconst mainDiv = document.querySelector('.main')\nmainDiv.appendChild(Object(_partials_about__WEBPACK_IMPORTED_MODULE_1__[\"aboutTab\"])())\n\nlet navElements = document.querySelectorAll('li')\nnavElements = Array.from(navElements)\n\nconst nav = document.querySelector('nav')\n\nnav.addEventListener('click', (e) => {\n  for (const element of navElements) {\n    element.classList.remove('active')\n  }\n\n  mainDiv.innerHTML = ''\n  if (e.target.innerText === 'About') {\n    mainDiv.appendChild(Object(_partials_about__WEBPACK_IMPORTED_MODULE_1__[\"aboutTab\"])())\n  } else if (e.target.innerText === 'Menu') {\n    mainDiv.appendChild(Object(_partials_menu__WEBPACK_IMPORTED_MODULE_2__[\"menuTab\"])())\n  } else if (e.target.innerText === 'Contact') {\n    mainDiv.appendChild(Object(_partials_contact__WEBPACK_IMPORTED_MODULE_3__[\"contactTab\"])())\n  }\n\n  e.target.classList.add('active')\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFydGlhbHMvcGFnZS1sb2FkJ1xuaW1wb3J0IHsgYWJvdXRUYWIgfSBmcm9tICcuL3BhcnRpYWxzL2Fib3V0J1xuaW1wb3J0IHsgbWVudVRhYiB9IGZyb20gJy4vcGFydGlhbHMvbWVudSdcbmltcG9ydCB7IGNvbnRhY3RUYWIgfSBmcm9tICcuL3BhcnRpYWxzL2NvbnRhY3QnXG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5zY3NzJ1xuaW1wb3J0ICcuL3N0YXRpYy9sb2dvLXRhY29zLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvYWJvdXQucG5nJ1xuaW1wb3J0ICcuL3N0YXRpYy9jdWF0ZXMucG5nJ1xuaW1wb3J0ICcuL3N0YXRpYy9waXJhdGEucG5nJ1xuaW1wb3J0ICcuL3N0YXRpYy9zcGVjaWFsLXRhY29zLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvcmVndWxhci10YWNvcy5wbmcnXG5pbXBvcnQgJy4vc3RhdGljL2ZyaWpvbGVzLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvaGFtYnVyZ2VyLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvcG90YXRvLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvdmFsbGUucG5nJ1xuaW1wb3J0ICcuL3N0YXRpYy9jdW1icmVzLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvZnVuZGlkb3JhLnBuZydcbmltcG9ydCAnLi9zdGF0aWMvYW5haHVhYy5wbmcnXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5jb250ZW50LmFwcGVuZENoaWxkKHBhZ2VMb2FkKCkpXG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG5tYWluRGl2LmFwcGVuZENoaWxkKGFib3V0VGFiKCkpXG5cbmxldCBuYXZFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcbm5hdkVsZW1lbnRzID0gQXJyYXkuZnJvbShuYXZFbGVtZW50cylcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JylcblxubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIG5hdkVsZW1lbnRzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG5cbiAgbWFpbkRpdi5pbm5lckhUTUwgPSAnJ1xuICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQWJvdXQnKSB7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhYm91dFRhYigpKVxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ01lbnUnKSB7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51VGFiKCkpXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQ29udGFjdCcpIHtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIoKSlcbiAgfVxuXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/about.js":
/*!*******************************!*\
  !*** ./src/partials/about.js ***!
  \*******************************/
/*! exports provided: aboutTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutTab\", function() { return aboutTab; });\nfunction aboutTab () {\n  const aboutDiv = document.createElement('div')\n  aboutDiv.classList.add('about')\n  aboutDiv.innerHTML = `<h1>Who are we?</h1>\n  <p>In 1984 we open our doors in the city of Monterrey, N.L., with a small branch with a capacity for 20 people and the menu was just hamburgers and french fries.<br>In 1990, looking for a bigger menu and more choices for our clients, the arrachera tacos arrived, being our clients favorite. We stand out for our food quality in all of our products, being a 100% family restaurant and our good service.</p>\n  <img src=\"./static/about.png\">`\n  return aboutDiv\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYWJvdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvYWJvdXQuanM/Nzk0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dFRhYiAoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKVxuICBhYm91dERpdi5pbm5lckhUTUwgPSBgPGgxPldobyBhcmUgd2U/PC9oMT5cbiAgPHA+SW4gMTk4NCB3ZSBvcGVuIG91ciBkb29ycyBpbiB0aGUgY2l0eSBvZiBNb250ZXJyZXksIE4uTC4sIHdpdGggYSBzbWFsbCBicmFuY2ggd2l0aCBhIGNhcGFjaXR5IGZvciAyMCBwZW9wbGUgYW5kIHRoZSBtZW51IHdhcyBqdXN0IGhhbWJ1cmdlcnMgYW5kIGZyZW5jaCBmcmllcy48YnI+SW4gMTk5MCwgbG9va2luZyBmb3IgYSBiaWdnZXIgbWVudSBhbmQgbW9yZSBjaG9pY2VzIGZvciBvdXIgY2xpZW50cywgdGhlIGFycmFjaGVyYSB0YWNvcyBhcnJpdmVkLCBiZWluZyBvdXIgY2xpZW50cyBmYXZvcml0ZS4gV2Ugc3RhbmQgb3V0IGZvciBvdXIgZm9vZCBxdWFsaXR5IGluIGFsbCBvZiBvdXIgcHJvZHVjdHMsIGJlaW5nIGEgMTAwJSBmYW1pbHkgcmVzdGF1cmFudCBhbmQgb3VyIGdvb2Qgc2VydmljZS48L3A+XG4gIDxpbWcgc3JjPVwiLi9zdGF0aWMvYWJvdXQucG5nXCI+YFxuICByZXR1cm4gYWJvdXREaXZcbn1cblxuZXhwb3J0IHsgYWJvdXRUYWIgfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/about.js\n");

/***/ }),

/***/ "./src/partials/contact.js":
/*!*********************************!*\
  !*** ./src/partials/contact.js ***!
  \*********************************/
/*! exports provided: contactTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactTab\", function() { return contactTab; });\nfunction contactTab () {\n  const contact = document.createElement('div')\n  contact.classList.add('contact')\n\n  contact.innerHTML = `\n  <h1>Contact Us</h1>\n  \n  <div class=\"contact-grid\">\n    <div class=\"branch\">\n    <h3>Anahuac</h3>\n    <img src=\"./static/anahuac.png\">\n    <h4>Tizapan No. 237\n    Col. Residencial de Anahuac, \n    San Nicolás de los Garza, N.L.</h4>\n    <p>83-52-18-04</p>\n    </div>\n\n    <div class=\"branch\">\n    <h3>Fundidora</h3>\n    <img src=\"./static/fundidora.png\">\n    <h4>Av. Fundidora 600\n    Col. Obrera, Monterrey, N.L.</h4>\n    <p>83-55-57-55</p>\n    </div>\n\n    <div class=\"branch\">\n    <h3>Cumbres</h3>\n    <img src=\"./static/cumbres.png\">\n    <h4>Ave. Paseo de los Leones No. 2910 \n    Cumbres 5to. Sector\n    Monterrey, N.L.</h4>\n    <p>21-39-90-64</p>\n    </div>\n\n    <div class=\"branch\">\n    <h3>Valle</h3>\n    <img src=\"./static/valle.png\">\n    <h4>Av. Gómez Morin\n    No. 494 Col. Del Valle\n    Monterrey, N.L.</h4>\n    <p>20-86-20-42</p>\n    </div>\n  </div>\n  `\n\n  return contact\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY29udGFjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9jb250YWN0LmpzPzgzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFRhYiAoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxuXG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gYFxuICA8aDE+Q29udGFjdCBVczwvaDE+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY29udGFjdC1ncmlkXCI+XG4gICAgPGRpdiBjbGFzcz1cImJyYW5jaFwiPlxuICAgIDxoMz5BbmFodWFjPC9oMz5cbiAgICA8aW1nIHNyYz1cIi4vc3RhdGljL2FuYWh1YWMucG5nXCI+XG4gICAgPGg0PlRpemFwYW4gTm8uIDIzN1xuICAgIENvbC4gUmVzaWRlbmNpYWwgZGUgQW5haHVhYywgXG4gICAgU2FuIE5pY29sw6FzIGRlIGxvcyBHYXJ6YSwgTi5MLjwvaDQ+XG4gICAgPHA+ODMtNTItMTgtMDQ8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYnJhbmNoXCI+XG4gICAgPGgzPkZ1bmRpZG9yYTwvaDM+XG4gICAgPGltZyBzcmM9XCIuL3N0YXRpYy9mdW5kaWRvcmEucG5nXCI+XG4gICAgPGg0PkF2LiBGdW5kaWRvcmEgNjAwXG4gICAgQ29sLiBPYnJlcmEsIE1vbnRlcnJleSwgTi5MLjwvaDQ+XG4gICAgPHA+ODMtNTUtNTctNTU8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYnJhbmNoXCI+XG4gICAgPGgzPkN1bWJyZXM8L2gzPlxuICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvY3VtYnJlcy5wbmdcIj5cbiAgICA8aDQ+QXZlLiBQYXNlbyBkZSBsb3MgTGVvbmVzIE5vLiAyOTEwIFxuICAgIEN1bWJyZXMgNXRvLiBTZWN0b3JcbiAgICBNb250ZXJyZXksIE4uTC48L2g0PlxuICAgIDxwPjIxLTM5LTkwLTY0PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJyYW5jaFwiPlxuICAgIDxoMz5WYWxsZTwvaDM+XG4gICAgPGltZyBzcmM9XCIuL3N0YXRpYy92YWxsZS5wbmdcIj5cbiAgICA8aDQ+QXYuIEfDs21leiBNb3JpblxuICAgIE5vLiA0OTQgQ29sLiBEZWwgVmFsbGVcbiAgICBNb250ZXJyZXksIE4uTC48L2g0PlxuICAgIDxwPjIwLTg2LTIwLTQyPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYFxuXG4gIHJldHVybiBjb250YWN0XG59XG5cbmV4cG9ydCB7IGNvbnRhY3RUYWIgfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/contact.js\n");

/***/ }),

/***/ "./src/partials/menu.js":
/*!******************************!*\
  !*** ./src/partials/menu.js ***!
  \******************************/
/*! exports provided: menuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuTab\", function() { return menuTab; });\nfunction menuTab () {\n  const menu = document.createElement('div')\n  menu.classList.add('menu')\n\n  menu.innerHTML = `\n    <h1> Our menu </h1>\n    <div class=\"grid\">\n      <div class=\"dish\">\n        <h2>Cuates</h2>\n        <p>Two big tacos</p>\n        <img src=\"./static/cuates.png\">\n        <p class=\"tortilla\">- Flour or corn tortilla -</p>\n        <div class=\"ingredients\">Arrachera, Avocado and White Cheese</div>\n      </div>\n      \n      <div class=\"dish\">\n        <h2>Piratas</h2>\n        <p>One giant taco</p>\n        <img src=\"./static/pirata.png\">\n        <p class=\"tortilla\">- Flour or corn tortilla -</p>\n        <div class=\"ingredients\">Arrachera, Avocado and White Cheese</div>\n      </div>\n    \n      <div class=\"dish\">\n        <h2>Frijoles</h2>\n        <p>Traditional frijoles a la charra</p>\n        <img src=\"./static/frijoles.png\">\n        <div class=\"ingredients\">Beans, Bacon, Chilli, Pork Scratchings</div>\n    </div>\n        \n      <div class=\"dish\">\n        <h2>Special Tacos</h2>\n        <p>Order of 5 tacos</p>\n        <img src=\"./static/special-tacos.png\">\n        <p class=\"tortilla\">- Flour or corn tortilla -</p>\n        <div class=\"ingredients\">Arrachera, Avocado, White Cheese and grilled onion</div>\n      </div>\n      \n      <div class=\"dish\">\n        <h2>Regular Tacos</h2>\n        <p>Order of 5 tacos</p>\n        <img src=\"./static/regular-tacos.png\">\n        <p class=\"tortilla\">- Flour or corn tortilla -</p>\n        <div class=\"ingredients\">Arrachera and grilled onion</div>\n    </div>\n\n      <div class=\"dish\">\n        <h2>Special Baked Potato</h2>\n        <p>The classic baked potato</p>\n        <img src=\"./static/potato.png\">\n        <div class=\"ingredients\">Cheddar cheese, white cheese, butter, cream, arrachera and bacon</div>\n    </div>\n\n      <div class=\"dish center-grid\">\n        <h2>Hamburger</h2>\n        <p>The classic hamburger</p>\n        <img src=\"./static/hamburger.png\">\n        <div class=\"ingredients\">Meat, avocado, lettuce, tomato, pickles and onion</div>\n    </div>\n  </div>`\n\n  return menu\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvbWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9tZW51LmpzP2FlMGIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWVudVRhYiAoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuXG4gIG1lbnUuaW5uZXJIVE1MID0gYFxuICAgIDxoMT4gT3VyIG1lbnUgPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgICAgPGgyPkN1YXRlczwvaDI+XG4gICAgICAgIDxwPlR3byBiaWcgdGFjb3M8L3A+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvY3VhdGVzLnBuZ1wiPlxuICAgICAgICA8cCBjbGFzcz1cInRvcnRpbGxhXCI+LSBGbG91ciBvciBjb3JuIHRvcnRpbGxhIC08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPkFycmFjaGVyYSwgQXZvY2FkbyBhbmQgV2hpdGUgQ2hlZXNlPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgICAgPGgyPlBpcmF0YXM8L2gyPlxuICAgICAgICA8cD5PbmUgZ2lhbnQgdGFjbzwvcD5cbiAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9waXJhdGEucG5nXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidG9ydGlsbGFcIj4tIEZsb3VyIG9yIGNvcm4gdG9ydGlsbGEgLTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+QXJyYWNoZXJhLCBBdm9jYWRvIGFuZCBXaGl0ZSBDaGVlc2U8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgICAgPGgyPkZyaWpvbGVzPC9oMj5cbiAgICAgICAgPHA+VHJhZGl0aW9uYWwgZnJpam9sZXMgYSBsYSBjaGFycmE8L3A+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvZnJpam9sZXMucG5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPkJlYW5zLCBCYWNvbiwgQ2hpbGxpLCBQb3JrIFNjcmF0Y2hpbmdzPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgICAgPGgyPlNwZWNpYWwgVGFjb3M8L2gyPlxuICAgICAgICA8cD5PcmRlciBvZiA1IHRhY29zPC9wPlxuICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL3NwZWNpYWwtdGFjb3MucG5nXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidG9ydGlsbGFcIj4tIEZsb3VyIG9yIGNvcm4gdG9ydGlsbGEgLTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+QXJyYWNoZXJhLCBBdm9jYWRvLCBXaGl0ZSBDaGVlc2UgYW5kIGdyaWxsZWQgb25pb248L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlzaFwiPlxuICAgICAgICA8aDI+UmVndWxhciBUYWNvczwvaDI+XG4gICAgICAgIDxwPk9yZGVyIG9mIDUgdGFjb3M8L3A+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvcmVndWxhci10YWNvcy5wbmdcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0b3J0aWxsYVwiPi0gRmxvdXIgb3IgY29ybiB0b3J0aWxsYSAtPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5BcnJhY2hlcmEgYW5kIGdyaWxsZWQgb25pb248L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgICAgPGgyPlNwZWNpYWwgQmFrZWQgUG90YXRvPC9oMj5cbiAgICAgICAgPHA+VGhlIGNsYXNzaWMgYmFrZWQgcG90YXRvPC9wPlxuICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL3BvdGF0by5wbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+Q2hlZGRhciBjaGVlc2UsIHdoaXRlIGNoZWVzZSwgYnV0dGVyLCBjcmVhbSwgYXJyYWNoZXJhIGFuZCBiYWNvbjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlzaCBjZW50ZXItZ3JpZFwiPlxuICAgICAgICA8aDI+SGFtYnVyZ2VyPC9oMj5cbiAgICAgICAgPHA+VGhlIGNsYXNzaWMgaGFtYnVyZ2VyPC9wPlxuICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL2hhbWJ1cmdlci5wbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+TWVhdCwgYXZvY2FkbywgbGV0dHVjZSwgdG9tYXRvLCBwaWNrbGVzIGFuZCBvbmlvbjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gXG5cbiAgcmV0dXJuIG1lbnVcbn1cbmV4cG9ydCB7IG1lbnVUYWIgfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/menu.js\n");

/***/ }),

/***/ "./src/partials/page-load.js":
/*!***********************************!*\
  !*** ./src/partials/page-load.js ***!
  \***********************************/
/*! exports provided: pageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoad\", function() { return pageLoad; });\nfunction pageLoad () {\n  const containerDiv = document.createElement('div')\n  containerDiv.classList.add('container')\n\n  const headerDiv = document.createElement('div')\n  headerDiv.classList.add('header')\n\n  const phoneDiv = document.createElement('div')\n  phoneDiv.innerHTML = '<h4 class=\"headerInfo\">PHONE:<br>01-800-254654</h4>'\n\n  const image = document.createElement('div')\n  image.innerHTML = '<img src=\"./static/logo-tacos.png\" class=\"logo\">'\n\n  const scheduleDiv = document.createElement('div')\n  scheduleDiv.innerHTML = '<h4 class=\"headerInfo\">OPEN EVERYDAY<br>8AM - 3PM<br>6PM - 4AM</h3>'\n\n  headerDiv.appendChild(phoneDiv)\n  headerDiv.appendChild(image)\n  headerDiv.appendChild(scheduleDiv)\n\n  const nav = document.createElement('nav')\n  const ul = document.createElement('ul')\n\n  const about = document.createElement('li')\n  about.classList.add('about-tab')\n  about.innerText = 'About'\n\n  const menu = document.createElement('li')\n  menu.innerText = 'Menu'\n\n  const contact = document.createElement('li')\n  contact.innerText = 'Contact'\n\n  ul.appendChild(about)\n  ul.appendChild(menu)\n  ul.appendChild(contact)\n\n  const mainDiv = document.createElement('div')\n  mainDiv.classList.add('main')\n\n  nav.appendChild(ul)\n\n  containerDiv.appendChild(headerDiv)\n  containerDiv.appendChild(nav)\n  containerDiv.appendChild(mainDiv)\n\n  return containerDiv\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcGFnZS1sb2FkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3BhZ2UtbG9hZC5qcz85OGJhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBhZ2VMb2FkICgpIHtcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgY29uc3QgcGhvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwaG9uZURpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiaGVhZGVySW5mb1wiPlBIT05FOjxicj4wMS04MDAtMjU0NjU0PC9oND4nXG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbWFnZS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuL3N0YXRpYy9sb2dvLXRhY29zLnBuZ1wiIGNsYXNzPVwibG9nb1wiPidcblxuICBjb25zdCBzY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNjaGVkdWxlRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJoZWFkZXJJbmZvXCI+T1BFTiBFVkVSWURBWTxicj44QU0gLSAzUE08YnI+NlBNIC0gNEFNPC9oMz4nXG5cbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHBob25lRGl2KVxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChzY2hlZHVsZURpdilcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGFiJylcbiAgYWJvdXQuaW5uZXJUZXh0ID0gJ0Fib3V0J1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIG1lbnUuaW5uZXJUZXh0ID0gJ01lbnUnXG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgY29udGFjdC5pbm5lclRleHQgPSAnQ29udGFjdCdcblxuICB1bC5hcHBlbmRDaGlsZChhYm91dClcbiAgdWwuYXBwZW5kQ2hpbGQobWVudSlcbiAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdClcblxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICBuYXYuYXBwZW5kQ2hpbGQodWwpXG5cbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdilcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG5hdilcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5EaXYpXG5cbiAgcmV0dXJuIGNvbnRhaW5lckRpdlxufVxuXG5leHBvcnQgeyBwYWdlTG9hZCB9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/page-load.js\n");

/***/ }),

/***/ "./src/static/about.png":
/*!******************************!*\
  !*** ./src/static/about.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/about.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2Fib3V0LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJvdXQucG5nP2UzZWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2Fib3V0LnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/about.png\n");

/***/ }),

/***/ "./src/static/anahuac.png":
/*!********************************!*\
  !*** ./src/static/anahuac.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/anahuac.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2FuYWh1YWMucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hbmFodWFjLnBuZz84YTM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9hbmFodWFjLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/anahuac.png\n");

/***/ }),

/***/ "./src/static/cuates.png":
/*!*******************************!*\
  !*** ./src/static/cuates.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/cuates.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2N1YXRlcy5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2N1YXRlcy5wbmc/YmY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvY3VhdGVzLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/cuates.png\n");

/***/ }),

/***/ "./src/static/cumbres.png":
/*!********************************!*\
  !*** ./src/static/cumbres.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/cumbres.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2N1bWJyZXMucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jdW1icmVzLnBuZz8yMjcyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9jdW1icmVzLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/cumbres.png\n");

/***/ }),

/***/ "./src/static/frijoles.png":
/*!*********************************!*\
  !*** ./src/static/frijoles.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/frijoles.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2ZyaWpvbGVzLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZnJpam9sZXMucG5nPzMxZmMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZyaWpvbGVzLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/frijoles.png\n");

/***/ }),

/***/ "./src/static/fundidora.png":
/*!**********************************!*\
  !*** ./src/static/fundidora.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/fundidora.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2Z1bmRpZG9yYS5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Z1bmRpZG9yYS5wbmc/N2EyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZnVuZGlkb3JhLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/fundidora.png\n");

/***/ }),

/***/ "./src/static/hamburger.png":
/*!**********************************!*\
  !*** ./src/static/hamburger.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/hamburger.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2hhbWJ1cmdlci5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2hhbWJ1cmdlci5wbmc/MzRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvaGFtYnVyZ2VyLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/hamburger.png\n");

/***/ }),

/***/ "./src/static/logo-tacos.png":
/*!***********************************!*\
  !*** ./src/static/logo-tacos.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/logo-tacos.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2xvZ28tdGFjb3MucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2dvLXRhY29zLnBuZz8xZGJjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9sb2dvLXRhY29zLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/logo-tacos.png\n");

/***/ }),

/***/ "./src/static/pirata.png":
/*!*******************************!*\
  !*** ./src/static/pirata.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/pirata.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL3BpcmF0YS5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3BpcmF0YS5wbmc/NjAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvcGlyYXRhLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/pirata.png\n");

/***/ }),

/***/ "./src/static/potato.png":
/*!*******************************!*\
  !*** ./src/static/potato.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/potato.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL3BvdGF0by5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3BvdGF0by5wbmc/ZjhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvcG90YXRvLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/potato.png\n");

/***/ }),

/***/ "./src/static/regular-tacos.png":
/*!**************************************!*\
  !*** ./src/static/regular-tacos.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/regular-tacos.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL3JlZ3VsYXItdGFjb3MucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWd1bGFyLXRhY29zLnBuZz9iNjAwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9yZWd1bGFyLXRhY29zLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/regular-tacos.png\n");

/***/ }),

/***/ "./src/static/special-tacos.png":
/*!**************************************!*\
  !*** ./src/static/special-tacos.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/special-tacos.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL3NwZWNpYWwtdGFjb3MucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zcGVjaWFsLXRhY29zLnBuZz9jY2I0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9zcGVjaWFsLXRhY29zLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/special-tacos.png\n");

/***/ }),

/***/ "./src/static/valle.png":
/*!******************************!*\
  !*** ./src/static/valle.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/valle.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL3ZhbGxlLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdmFsbGUucG5nPzEwMDIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL3ZhbGxlLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/valle.png\n");

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