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

/***/ "./src/displayHeader.js":
/*!******************************!*\
  !*** ./src/displayHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeader\": () => (/* binding */ getHeader)\n/* harmony export */ });\nfunction getHeader() {\r\n  const header = document.createElement('div');\r\n  header.classList.add('row');\r\n  header.id = 'header';\r\n\r\n  const name = document.createElement('h3');\r\n  name.classList.add('col-4');\r\n  name.textContent = 'The Best Restaurant';\r\n\r\n  const image = document.createElement('img');\r\n  image.classList.add('col-3');\r\n  image.src = './media/burger_0.jpg';\r\n  image.id = 'header-icon';\r\n\r\n  const nav = getNav();\r\n\r\n  header.append(image, name, nav);\r\n\r\n  return header;\r\n};\r\n\r\nfunction getNav() {\r\n  const nav = document.createElement('ul');\r\n  nav.classList.add('nav', 'nav-tabs');\r\n\r\n  const homeNavItem = getNavItem('home');\r\n  const menuNavItem = getNavItem('menu');\r\n  const aboutNavItem = getNavItem('about');\r\n\r\n  nav.append(homeNavItem, menuNavItem, aboutNavItem);\r\n\r\n  return nav\r\n}\r\n\r\nfunction getNavItem(item) {\r\n  const listItem = document.createElement('li');\r\n  listItem.classList.add('nav-item');\r\n  \r\n  const itemLink = getNavItemLink(item);\r\n\r\n  listItem.append(itemLink);\r\n\r\n  return listItem\r\n}\r\n\r\nfunction getNavItemLink(item) {\r\n  const link = document.createElement('a');\r\n  link.classList.add('nav-link');\r\n  link.href = '#';\r\n  link.textContent = (item === 'home') ? 'Home' : (item === 'menu') ? 'Menu' : 'About';\r\n  link.setAttribute('aria-current', item);\r\n  return link\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/displayHeader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHeader */ \"./src/displayHeader.js\");\n\r\n\r\nconst content = document.getElementById('content')\r\n\r\nconst header = (0,_displayHeader__WEBPACK_IMPORTED_MODULE_0__.getHeader)()\r\n\r\ncontent.append(header)\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;