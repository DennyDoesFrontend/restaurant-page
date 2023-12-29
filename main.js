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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\r\n    const aboutContainer = document.createElement('div');\r\n    aboutContainer.classList.add('about-container');\r\n    const aboutHeader = document.createElement('h1');\r\n    aboutHeader.textContent = 'More About Us!';\r\n    const aboutInfo = document.createElement('p');\r\n    aboutInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.'\r\n    aboutContainer.appendChild(aboutHeader);\r\n    aboutContainer.appendChild(aboutInfo);\r\n    return aboutContainer;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hero)\n/* harmony export */ });\nfunction hero() {\r\n    const heroContainer = document.createElement('div');\r\n    heroContainer.classList.add('hero-div');\r\n    const heroHeader = document.createElement('h1');\r\n    heroHeader.classList.add('hero-header');\r\n    heroHeader.textContent = 'Welcome to Uzumaki Ramen';\r\n    const heroText = document.createElement('p');\r\n    heroText.classList.add('hero-text');\r\n    heroText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.';\r\n    // append tags to container\r\n    heroContainer.appendChild(heroHeader);\r\n    heroContainer.appendChild(heroText);\r\n    return heroContainer;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n// create links and declare variables\r\nconst content = document.getElementById('content');\r\nlet homeLink = document.createElement('li');\r\nlet menuLink = document.createElement('li');\r\nlet aboutLink = document.createElement('li');\r\n\r\n// main container\r\nconst mainContainer = document.createElement('div');\r\nmainContainer.classList.add('mainContainer'); \r\n\r\n// header function\r\nfunction header() {\r\n    const header = document.createElement('header');\r\n    const navbar = document.createElement('nav');\r\n    const uList = document.createElement('ul');\r\n    homeLink.textContent = 'Home';\r\n    menuLink.textContent = 'Menu';\r\n    aboutLink.textContent = 'About';\r\n    uList.appendChild(homeLink);\r\n    uList.appendChild(menuLink);\r\n    uList.appendChild(aboutLink);\r\n    navbar.appendChild(uList);\r\n    header.appendChild(navbar);\r\n    return header;\r\n}\r\n\r\nconst heroContainer = (0,_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\ncontent.appendChild(header());\r\nmainContainer.appendChild(heroContainer);\r\ncontent.appendChild(mainContainer);\r\n\r\n\r\n// Event listeners\r\nhomeLink.addEventListener('click', () => {\r\n    // Check if content has heroContainer as a child\r\n    if (!mainContainer.contains((0,_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())) {\r\n        // Replace content with header\r\n        mainContainer.textContent = '';\r\n        mainContainer.appendChild((0,_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    }\r\n});\r\n\r\nmenuLink.addEventListener('click', () => {\r\n    // Check if content has header as a child\r\n    if (!mainContainer.contains((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())) {\r\n        // Replace content with header\r\n        mainContainer.textContent = '';\r\n        mainContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    }\r\n});\r\n\r\naboutLink.addEventListener('click', () => {\r\n    // Check if content has header as a child\r\n    if (!mainContainer.contains((0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())) {\r\n        // Replace content with header\r\n        mainContainer.textContent = '';\r\n        mainContainer.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    }\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menu-container');\r\n    // naruRamen\r\n    const naruRamen = document.createElement('div');\r\n    naruRamen.classList.add('card');\r\n    const naruTitle = document.createElement('h3');\r\n    naruTitle.classList.add('title');\r\n    naruTitle.textContent = 'NaruRamen!'\r\n    const naruPrice = document.createElement('p');\r\n    naruPrice.classList.add('price')\r\n    naruPrice.textContent = '$8.99';\r\n    const naruDescription = document.createElement('p');\r\n    naruDescription.classList.add('info');\r\n    naruDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';\r\n    const naruImage = document.createElement('img');\r\n    naruImage.src = 'burger.png';\r\n    naruImage.alt = 'Naru Ramen Image';\r\n    naruRamen.appendChild(naruImage);\r\n    naruRamen.appendChild(naruTitle);\r\n    naruRamen.appendChild(naruPrice);\r\n    naruRamen.appendChild(naruDescription);\r\n    // sakuRamen\r\n    const sakuRamen = document.createElement('div');\r\n    sakuRamen.classList.add('card');\r\n    const sakuTitle = document.createElement('h3');\r\n    sakuTitle.classList.add('title');\r\n    sakuTitle.textContent = 'NaruRamen!'\r\n    const sakuPrice = document.createElement('p');\r\n    sakuPrice.classList.add('price')\r\n    sakuPrice.textContent = '$8.99';\r\n    const sakuDescription = document.createElement('p');\r\n    sakuDescription.classList.add('info');\r\n    sakuDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';\r\n    const sakuImage = document.createElement('img');\r\n    sakuImage.src = 'burger.png';\r\n    sakuImage.alt = 'Saku Ramen Image';\r\n    sakuRamen.appendChild(sakuImage);\r\n    sakuRamen.appendChild(sakuTitle);\r\n    sakuRamen.appendChild(sakuPrice);\r\n    sakuRamen.appendChild(sakuDescription);\r\n    // sasuRamen\r\n    const sasuRamen = document.createElement('div');\r\n    sasuRamen.classList.add('card');\r\n    const sasuTitle = document.createElement('h3');\r\n    sasuTitle.classList.add('title');\r\n    sasuTitle.textContent = 'NaruRamen!'\r\n    const sasuPrice = document.createElement('p');\r\n    sasuPrice.classList.add('price')\r\n    sasuPrice.textContent = '$8.99';\r\n    const sasuDescription = document.createElement('p');\r\n    sasuDescription.classList.add('info');\r\n    sasuDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';\r\n    const sasuImage = document.createElement('img');\r\n    sasuImage.src = 'burger.png';\r\n    sasuImage.alt = 'sasu Ramen Image';\r\n    sasuRamen.appendChild(sasuImage);\r\n    sasuRamen.appendChild(sasuTitle);\r\n    sasuRamen.appendChild(sasuPrice);\r\n    sasuRamen.appendChild(sasuDescription);\r\n    // kakaRamen\r\n    const kakaRamen = document.createElement('div');\r\n    kakaRamen.classList.add('card');\r\n    const kakaTitle = document.createElement('h3');\r\n    kakaTitle.classList.add('title');\r\n    kakaTitle.textContent = 'NaruRamen!'\r\n    const kakaPrice = document.createElement('p');\r\n    kakaPrice.classList.add('price')\r\n    kakaPrice.textContent = '$8.99';\r\n    const kakaDescription = document.createElement('p');\r\n    kakaDescription.classList.add('info');\r\n    kakaDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';\r\n    const kakaImage = document.createElement('img');\r\n    kakaImage.src = 'burger.png';\r\n    kakaImage.alt = 'kaka Ramen Image';\r\n    kakaRamen.appendChild(kakaImage);\r\n    kakaRamen.appendChild(kakaTitle);\r\n    kakaRamen.appendChild(kakaPrice);\r\n    kakaRamen.appendChild(kakaDescription);\r\n    // append to menu container && return menu\r\n    menu.appendChild(naruRamen);\r\n    menu.appendChild(sakuRamen);\r\n    menu.appendChild(sasuRamen);\r\n    menu.appendChild(kakaRamen);\r\n    return menu;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;