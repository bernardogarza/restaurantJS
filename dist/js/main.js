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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/page-load */ \"./src/partials/page-load.js\");\n/* harmony import */ var _partials_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/about */ \"./src/partials/about.js\");\n/* harmony import */ var _partials_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/menu */ \"./src/partials/menu.js\");\n/* harmony import */ var _partials_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/contact */ \"./src/partials/contact.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/logo-tacos.png */ \"./src/static/logo-tacos.png\");\n/* harmony import */ var _static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_logo_tacos_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _static_about_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static/about.png */ \"./src/static/about.png\");\n/* harmony import */ var _static_about_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_about_png__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\ncontent.appendChild(Object(_partials_page_load__WEBPACK_IMPORTED_MODULE_0__[\"pageLoad\"])());\n\nconst mainDiv = document.querySelector('.main');\nmainDiv.appendChild(Object(_partials_about__WEBPACK_IMPORTED_MODULE_1__[\"aboutTab\"])());\n\nlet navElements = document.querySelectorAll('nav ul li');\nnavElements = Array.from(navElements);\n\nconst nav = document.querySelector('nav');\n\nnav.addEventListener('click', function(e){\n\tfor (let element of navElements){\n\t\telement.classList.remove('active');\n\t}\n\n\tmainDiv.innerHTML = '';\n\tconsole.log(e.target.innerText);\n\tif (e.target.innerText == 'About'){\n\t\tmainDiv.appendChild(Object(_partials_about__WEBPACK_IMPORTED_MODULE_1__[\"aboutTab\"])());\n\t}\n\telse if (e.target.innerText == 'Menu'){\n\t\tmainDiv.appendChild(Object(_partials_menu__WEBPACK_IMPORTED_MODULE_2__[\"menuTab\"])());\n\t}\n\n\telse if (e.target.innerText == 'Contact'){\n\t\tmainDiv.appendChild(Object(_partials_contact__WEBPACK_IMPORTED_MODULE_3__[\"contactTab\"])());\n\t}\n\n\te.target.classList.add('active');\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFydGlhbHMvcGFnZS1sb2FkJztcbmltcG9ydCB7IGFib3V0VGFiIH0gZnJvbSAnLi9wYXJ0aWFscy9hYm91dCc7XG5pbXBvcnQgeyBtZW51VGFiIH0gZnJvbSAnLi9wYXJ0aWFscy9tZW51JztcbmltcG9ydCB7IGNvbnRhY3RUYWIgfSBmcm9tICcuL3BhcnRpYWxzL2NvbnRhY3QnO1xuaW1wb3J0ICcuL3N0eWxlL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vc3RhdGljL2xvZ28tdGFjb3MucG5nJztcbmltcG9ydCAnLi9zdGF0aWMvYWJvdXQucG5nJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKHBhZ2VMb2FkKCkpO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoYWJvdXRUYWIoKSk7XG5cbmxldCBuYXZFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpO1xubmF2RWxlbWVudHMgPSBBcnJheS5mcm9tKG5hdkVsZW1lbnRzKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5cbm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRmb3IgKGxldCBlbGVtZW50IG9mIG5hdkVsZW1lbnRzKXtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHR9XG5cblx0bWFpbkRpdi5pbm5lckhUTUwgPSAnJztcblx0Y29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJUZXh0KTtcblx0aWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PSAnQWJvdXQnKXtcblx0XHRtYWluRGl2LmFwcGVuZENoaWxkKGFib3V0VGFiKCkpO1xuXHR9XG5cdGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PSAnTWVudScpe1xuXHRcdG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudVRhYigpKTtcblx0fVxuXG5cdGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PSAnQ29udGFjdCcpe1xuXHRcdG1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYigpKTtcblx0fVxuXG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/about.js":
/*!*******************************!*\
  !*** ./src/partials/about.js ***!
  \*******************************/
/*! exports provided: aboutTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutTab\", function() { return aboutTab; });\nfunction aboutTab() {\n  const aboutDiv = document.createElement('div');\n  aboutDiv.classList.add('about');\n  aboutDiv.innerHTML = `<h1>Who we are?</h1>\n  <p>In 1984 we open our doors in the city of Monterrey, N.L., with a small branch with a capacity for 20 people and the menu was just hamburgers and french fries.<br>In 1990, looking for a bigger menu and more choices for our clients, the arrachera tacos arrived, being our clients favorite. We stand out for our food quality in all of our products, being a 100% family restaurant and our good service.</p>\n  <img src=\"./static/about.png>\"`;\n  return aboutDiv;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYWJvdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvYWJvdXQuanM/Nzk0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dFRhYigpIHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgYWJvdXREaXYuaW5uZXJIVE1MID0gYDxoMT5XaG8gd2UgYXJlPzwvaDE+XG4gIDxwPkluIDE5ODQgd2Ugb3BlbiBvdXIgZG9vcnMgaW4gdGhlIGNpdHkgb2YgTW9udGVycmV5LCBOLkwuLCB3aXRoIGEgc21hbGwgYnJhbmNoIHdpdGggYSBjYXBhY2l0eSBmb3IgMjAgcGVvcGxlIGFuZCB0aGUgbWVudSB3YXMganVzdCBoYW1idXJnZXJzIGFuZCBmcmVuY2ggZnJpZXMuPGJyPkluIDE5OTAsIGxvb2tpbmcgZm9yIGEgYmlnZ2VyIG1lbnUgYW5kIG1vcmUgY2hvaWNlcyBmb3Igb3VyIGNsaWVudHMsIHRoZSBhcnJhY2hlcmEgdGFjb3MgYXJyaXZlZCwgYmVpbmcgb3VyIGNsaWVudHMgZmF2b3JpdGUuIFdlIHN0YW5kIG91dCBmb3Igb3VyIGZvb2QgcXVhbGl0eSBpbiBhbGwgb2Ygb3VyIHByb2R1Y3RzLCBiZWluZyBhIDEwMCUgZmFtaWx5IHJlc3RhdXJhbnQgYW5kIG91ciBnb29kIHNlcnZpY2UuPC9wPlxuICA8aW1nIHNyYz1cIi4vc3RhdGljL2Fib3V0LnBuZz5cImA7XG4gIHJldHVybiBhYm91dERpdjtcbn1cblxuZXhwb3J0IHsgYWJvdXRUYWIgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/about.js\n");

/***/ }),

/***/ "./src/partials/contact.js":
/*!*********************************!*\
  !*** ./src/partials/contact.js ***!
  \*********************************/
/*! exports provided: contactTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactTab\", function() { return contactTab; });\nfunction contactTab() {\n  const contact = document.createElement('div');\n  contact.classList.add('contact');\n\n  contact.innerHTML = `\n  <h2>Contact Us</h2>\n  \n  <div class=\"branch\">\n  <h3>Anahuac</h3>\n  <h4>Tizapan No. 237\n  Col. Residencial de Anahuac, \n  San Nicolás de los Garza, N.L.</h4>\n  <p>83-52-18-04</p>\n  </div>\n\n  <div class=\"branch\">\n  <h3>Fundidora</h3>\n  <h4>Av. Fundidora 600\n  Col. Obrera, Monterrey, Nuevo León</h4>\n  <p>83-55-57-55</p>\n  </div>\n\n  <div class=\"branch\">\n  <h3>Cumbres</h3>\n  <h4>Ave. Paseo de los Leones No. 2910 \n  Cumbres 5to. Sector\n  Monterrey, Nuevo León</h4>\n  <p>21-39-90-64</p>\n  </div>\n\n  <div class=\"branch\">\n  <h3>Valle</h3>\n  <h4>Av. Gómez Morin\n  No. 494 Esq. Río San Lorenzo Col. Del Valle\n  Monterrey, Nuevo León.</h4>\n  <p>20-86-20-42</p>\n  </div>\n  `;\n\n  return contact;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY29udGFjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9jb250YWN0LmpzPzgzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFRhYigpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICBjb250YWN0LmlubmVySFRNTCA9IGBcbiAgPGgyPkNvbnRhY3QgVXM8L2gyPlxuICBcbiAgPGRpdiBjbGFzcz1cImJyYW5jaFwiPlxuICA8aDM+QW5haHVhYzwvaDM+XG4gIDxoND5UaXphcGFuIE5vLiAyMzdcbiAgQ29sLiBSZXNpZGVuY2lhbCBkZSBBbmFodWFjLCBcbiAgU2FuIE5pY29sw6FzIGRlIGxvcyBHYXJ6YSwgTi5MLjwvaDQ+XG4gIDxwPjgzLTUyLTE4LTA0PC9wPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYnJhbmNoXCI+XG4gIDxoMz5GdW5kaWRvcmE8L2gzPlxuICA8aDQ+QXYuIEZ1bmRpZG9yYSA2MDBcbiAgQ29sLiBPYnJlcmEsIE1vbnRlcnJleSwgTnVldm8gTGXDs248L2g0PlxuICA8cD44My01NS01Ny01NTwvcD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImJyYW5jaFwiPlxuICA8aDM+Q3VtYnJlczwvaDM+XG4gIDxoND5BdmUuIFBhc2VvIGRlIGxvcyBMZW9uZXMgTm8uIDI5MTAgXG4gIEN1bWJyZXMgNXRvLiBTZWN0b3JcbiAgTW9udGVycmV5LCBOdWV2byBMZcOzbjwvaDQ+XG4gIDxwPjIxLTM5LTkwLTY0PC9wPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYnJhbmNoXCI+XG4gIDxoMz5WYWxsZTwvaDM+XG4gIDxoND5Bdi4gR8OzbWV6IE1vcmluXG4gIE5vLiA0OTQgRXNxLiBSw61vIFNhbiBMb3JlbnpvIENvbC4gRGVsIFZhbGxlXG4gIE1vbnRlcnJleSwgTnVldm8gTGXDs24uPC9oND5cbiAgPHA+MjAtODYtMjAtNDI8L3A+XG4gIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgeyBjb250YWN0VGFiIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/contact.js\n");

/***/ }),

/***/ "./src/partials/menu.js":
/*!******************************!*\
  !*** ./src/partials/menu.js ***!
  \******************************/
/*! exports provided: menuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuTab\", function() { return menuTab; });\nfunction menuTab(){\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.innerHTML = `<h2> Our menu </h2>\n    <div class=\"dish\">\n      <h3>Cuates</h3>\n      <p class=\"tortilla\">- Flour or corn tortilla -</p>\n      <p>Two big tacos</p>\n      <div class=\"ingredients\">Arrachera, Avocado and White Cheese</div>\n    </div>\n    \n    <div class=\"dish\">\n      <h3>Piratas</h3>\n      <p class=\"tortilla\">- Flour or corn tortilla -</p>\n      <p>One giant taco</p>\n      <div class=\"ingredients\">Arrachera, Avocado and White Cheese</div>\n     </div>\n  \n    <div class=\"dish\">\n      <h3>Frijoles</h3>\n      <p>Traditional frijoles a la charra</p>\n   </div>\n      \n    <div class=\"dish\">\n      <h3>Special Tacos</h3>\n      <p class=\"tortilla\">- Flour or corn tortilla -</p>\n      <p>Order of 5 tacos</p>\n      <div class=\"ingredients\">Arrachera, Avocado, White Cheese and grilled onion</div>\n    </div>\n    \n    <div class=\"dish\">\n      <h3>Regular Tacos</h3>\n      <p>Order of 5 tacos</p>\n      <div class=\"ingredients\">Arrachera and grilled onion</div>\n   </div>\n\n    <div class=\"dish\">\n      <h3>Special Baked Potato</h3>\n      <p>The classic baked potato</p>\n      <div class=\"ingredients\">Cheddar cheese, white cheese, butter, cream, arrachera and bacon</div>\n   </div>\n\n    <div class=\"dish\">\n      <h3>Hamburger</h3>\n      <p>The classic hamburger</p>\n      <div class=\"ingredients\">Meat, avocado, lettuce, tomato, pickles and onion</div>\n   </div>\n   `;\n\n    return menu\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvbWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9tZW51LmpzP2FlMGIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWVudVRhYigpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnUuaW5uZXJIVE1MID0gYDxoMj4gT3VyIG1lbnUgPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZGlzaFwiPlxuICAgICAgPGgzPkN1YXRlczwvaDM+XG4gICAgICA8cCBjbGFzcz1cInRvcnRpbGxhXCI+LSBGbG91ciBvciBjb3JuIHRvcnRpbGxhIC08L3A+XG4gICAgICA8cD5Ud28gYmlnIHRhY29zPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+QXJyYWNoZXJhLCBBdm9jYWRvIGFuZCBXaGl0ZSBDaGVlc2U8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiZGlzaFwiPlxuICAgICAgPGgzPlBpcmF0YXM8L2gzPlxuICAgICAgPHAgY2xhc3M9XCJ0b3J0aWxsYVwiPi0gRmxvdXIgb3IgY29ybiB0b3J0aWxsYSAtPC9wPlxuICAgICAgPHA+T25lIGdpYW50IHRhY288L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5BcnJhY2hlcmEsIEF2b2NhZG8gYW5kIFdoaXRlIENoZWVzZTwvZGl2PlxuICAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgIDxoMz5Gcmlqb2xlczwvaDM+XG4gICAgICA8cD5UcmFkaXRpb25hbCBmcmlqb2xlcyBhIGxhIGNoYXJyYTwvcD5cbiAgIDwvZGl2PlxuICAgICAgXG4gICAgPGRpdiBjbGFzcz1cImRpc2hcIj5cbiAgICAgIDxoMz5TcGVjaWFsIFRhY29zPC9oMz5cbiAgICAgIDxwIGNsYXNzPVwidG9ydGlsbGFcIj4tIEZsb3VyIG9yIGNvcm4gdG9ydGlsbGEgLTwvcD5cbiAgICAgIDxwPk9yZGVyIG9mIDUgdGFjb3M8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5BcnJhY2hlcmEsIEF2b2NhZG8sIFdoaXRlIENoZWVzZSBhbmQgZ3JpbGxlZCBvbmlvbjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJkaXNoXCI+XG4gICAgICA8aDM+UmVndWxhciBUYWNvczwvaDM+XG4gICAgICA8cD5PcmRlciBvZiA1IHRhY29zPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+QXJyYWNoZXJhIGFuZCBncmlsbGVkIG9uaW9uPC9kaXY+XG4gICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkaXNoXCI+XG4gICAgICA8aDM+U3BlY2lhbCBCYWtlZCBQb3RhdG88L2gzPlxuICAgICAgPHA+VGhlIGNsYXNzaWMgYmFrZWQgcG90YXRvPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+Q2hlZGRhciBjaGVlc2UsIHdoaXRlIGNoZWVzZSwgYnV0dGVyLCBjcmVhbSwgYXJyYWNoZXJhIGFuZCBiYWNvbjwvZGl2PlxuICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGlzaFwiPlxuICAgICAgPGgzPkhhbWJ1cmdlcjwvaDM+XG4gICAgICA8cD5UaGUgY2xhc3NpYyBoYW1idXJnZXI8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5NZWF0LCBhdm9jYWRvLCBsZXR0dWNlLCB0b21hdG8sIHBpY2tsZXMgYW5kIG9uaW9uPC9kaXY+XG4gICA8L2Rpdj5cbiAgIGA7XG5cbiAgICByZXR1cm4gbWVudVxufVxuZXhwb3J0IHsgbWVudVRhYiB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/menu.js\n");

/***/ }),

/***/ "./src/partials/page-load.js":
/*!***********************************!*\
  !*** ./src/partials/page-load.js ***!
  \***********************************/
/*! exports provided: pageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoad\", function() { return pageLoad; });\nfunction pageLoad (){\n\n\tconst containerDiv = document.createElement('div');\n  containerDiv.classList.add('container');\n\n\tconst headerDiv = document.createElement('div');\n\theaderDiv.classList.add('header');\n\n\tconst phoneDiv = document.createElement('div');\n\tphoneDiv.innerHTML = `<h4 class=\"headerInfo\">PHONE:<br>01-800-254654</h4>`;\n\n\tconst image = document.createElement('div');\n\timage.innerHTML = `<img src=\"./static/logo-tacos.png\" class=\"logo\">`;\n\n\n\tconst scheduleDiv = document.createElement('div');\n\tscheduleDiv.innerHTML = `<h4 class=\"headerInfo\">OPEN EVERYDAY<br>8AM - 3PM<br>6PM - 4AM</h3>`;\n\n\n\theaderDiv.appendChild(phoneDiv);\n\theaderDiv.appendChild(image);\n\theaderDiv.appendChild(scheduleDiv);\n\n\tconst nav = document.createElement('nav');\n\tconst ul = document.createElement('ul');\n  \n\tconst about = document.createElement('li');\n\tabout.innerText = 'About';\n\n\tconst menu = document.createElement('li');\n\tmenu.innerText = 'Menu';\n\t\n\tconst contact = document.createElement('li');\n\tcontact.innerText = 'Contact';\n\n\tul.appendChild(about);\n\tul.appendChild(menu);\n\tul.appendChild(contact);\n\t\n\tconst mainDiv = document.createElement('div');\n\tmainDiv.classList.add('main');\n\n\tnav.appendChild(ul);\n\n\tcontainerDiv.appendChild(headerDiv);\n  containerDiv.appendChild(nav);\n  containerDiv.appendChild(mainDiv);\n\t\n\n\treturn containerDiv;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcGFnZS1sb2FkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3BhZ2UtbG9hZC5qcz85OGJhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBhZ2VMb2FkICgpe1xuXG5cdGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cblx0Y29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuXHRjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwaG9uZURpdi5pbm5lckhUTUwgPSBgPGg0IGNsYXNzPVwiaGVhZGVySW5mb1wiPlBIT05FOjxicj4wMS04MDAtMjU0NjU0PC9oND5gO1xuXG5cdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGltYWdlLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIi4vc3RhdGljL2xvZ28tdGFjb3MucG5nXCIgY2xhc3M9XCJsb2dvXCI+YDtcblxuXG5cdGNvbnN0IHNjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHNjaGVkdWxlRGl2LmlubmVySFRNTCA9IGA8aDQgY2xhc3M9XCJoZWFkZXJJbmZvXCI+T1BFTiBFVkVSWURBWTxicj44QU0gLSAzUE08YnI+NlBNIC0gNEFNPC9oMz5gO1xuXG5cblx0aGVhZGVyRGl2LmFwcGVuZENoaWxkKHBob25lRGl2KTtcblx0aGVhZGVyRGl2LmFwcGVuZENoaWxkKGltYWdlKTtcblx0aGVhZGVyRGl2LmFwcGVuZENoaWxkKHNjaGVkdWxlRGl2KTtcblxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBcblx0Y29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRhYm91dC5pbm5lclRleHQgPSAnQWJvdXQnO1xuXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRtZW51LmlubmVyVGV4dCA9ICdNZW51Jztcblx0XG5cdGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRjb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0JztcblxuXHR1bC5hcHBlbmRDaGlsZChhYm91dCk7XG5cdHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuXHR1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcblx0XG5cdGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cblx0bmF2LmFwcGVuZENoaWxkKHVsKTtcblxuXHRjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG5hdik7XG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblx0XG5cblx0cmV0dXJuIGNvbnRhaW5lckRpdjtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWQgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/page-load.js\n");

/***/ }),

/***/ "./src/static/about.png":
/*!******************************!*\
  !*** ./src/static/about.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/about.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGljL2Fib3V0LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJvdXQucG5nP2UzZWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2Fib3V0LnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/static/about.png\n");

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