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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Config\": () => (/* binding */ Config)\n/* harmony export */ });\nconst key = 'AIzaSyB-YnQYv0ynl_8uTqoYfIj6QiN43t34B8Y'\r\n\r\nconst Config = { key }\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/config.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\nconst Controller = (function () {\r\n  const content = document.getElementById('content');\r\n\r\n  function init() {\r\n    setActivePage('menu')\r\n    content.setActivePage = setActivePage\r\n  }\r\n\r\n  function setActivePage(pageName) {\r\n    let page = getPage(pageName);\r\n    content.innerHTML = ''\r\n    content.append(_display__WEBPACK_IMPORTED_MODULE_0__.Display.getHeader(), page);\r\n  }\r\n\r\n  function getPage(name) {\r\n    let pages = {\r\n      'home': _display__WEBPACK_IMPORTED_MODULE_0__.Display.getHomePage(),\r\n      'menu': _display__WEBPACK_IMPORTED_MODULE_0__.Display.getMenuPage(),\r\n      'about': _display__WEBPACK_IMPORTED_MODULE_0__.Display.getAboutPage()\r\n    }\r\n    return pages[name]\r\n  }\r\n\r\n  return { init }\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/controller.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _displayHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHeader */ \"./src/displayHeader.js\");\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _displayMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayMenu */ \"./src/displayMenu.js\");\n/* harmony import */ var _displayAbout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayAbout */ \"./src/displayAbout.js\");\n\r\n\r\n\r\n\r\n\r\nconst Display = {\r\n  getHeader: _displayHeader__WEBPACK_IMPORTED_MODULE_0__.getHeader,\r\n  getHomePage: _displayHome__WEBPACK_IMPORTED_MODULE_1__.getHomePage,\r\n  getMenuPage: _displayMenu__WEBPACK_IMPORTED_MODULE_2__.getMenuPage,\r\n  getAboutPage: _displayAbout__WEBPACK_IMPORTED_MODULE_3__.getAboutPage\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/display.js?");

/***/ }),

/***/ "./src/displayAbout.js":
/*!*****************************!*\
  !*** ./src/displayAbout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAboutPage\": () => (/* binding */ getAboutPage)\n/* harmony export */ });\nconst Display = (function() {\r\n  function getAboutPage() {\r\n    return true\r\n  }\r\n  return { getAboutPage }\r\n})()\r\n\r\nconst getAboutPage = Display.getAboutPage\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/displayAbout.js?");

/***/ }),

/***/ "./src/displayHeader.js":
/*!******************************!*\
  !*** ./src/displayHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeader\": () => (/* binding */ getHeader)\n/* harmony export */ });\nconst Display = (function() {\r\n\r\n  function getHeader() {\r\n    const header = document.createElement('div');\r\n    header.classList.add('row');\r\n    header.id = 'header';\r\n\r\n    //  Replace image with header images in media folder\r\n    //  \r\n    const image = document.createElement('img');\r\n    image.classList.add('col-3', 'col-xs-2', 'col-sm-3', 'col-md-3', 'col-lg-2','col-xl-2', 'col-xxl-1');\r\n    image.src = './media/burger_0.jpg';\r\n    image.id = 'header-icon';\r\n  \r\n    const nav = getNav();\r\n  \r\n    header.append(image, nav);\r\n  \r\n    return header;\r\n  };\r\n\r\n  function getNav() {\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');\r\n\r\n    const navContainer = getNavContainer();\r\n  \r\n    nav.append(navContainer);\r\n    \r\n    let navOffset = nav.offsetTop;\r\n    window.onscroll = function() {\r\n      if (window.pageYOffset > navOffset) {\r\n        nav.classList.add('sticky');\r\n      } else {\r\n        nav.classList.remove('sticky');\r\n      }\r\n    }\r\n  \r\n    return nav\r\n  };\r\n  \r\n  function getNavContainer() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('container-fluid');\r\n\r\n    const navBrand = getNavBrand();\r\n    const navToggler = getNavToggler();\r\n    const navCollapse = getNavCollapse();\r\n\r\n    div.append(navBrand, navToggler, navCollapse);\r\n\r\n    return div\r\n  };\r\n\r\n  function getNavBrand() {\r\n    const brand = document.createElement('a');\r\n    brand.classList.add('navbar-brand');\r\n    brand.textContent = 'The Best Restaurant';\r\n    brand.href = '#';\r\n\r\n    return brand;\r\n  };\r\n\r\n  function getNavToggler() {\r\n    const toggler = document.createElement('button');\r\n    toggler.classList.add('navbar-toggler');\r\n    toggler.type = 'button';\r\n    toggler.setAttribute('data-bs-toggle', 'collapse');\r\n    toggler.setAttribute('data-bs-target', '#nav-collapse');\r\n    toggler.setAttribute('aria-controls', 'nav-collapse');\r\n    toggler.setAttribute('aria-expanded', 'false');\r\n    toggler.setAttribute('aria-label', 'Toggle navigation');\r\n\r\n    const span = document.createElement('span');\r\n    span.classList.add('navbar-toggler-icon');\r\n\r\n    toggler.append(span);\r\n\r\n    return toggler;\r\n  };\r\n\r\n  function getNavCollapse() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('collapse', 'navbar-collapse');\r\n    div.id = 'nav-collapse';\r\n\r\n    const navList = getNavList();\r\n    \r\n    div.append(navList);\r\n\r\n    return div;\r\n  };\r\n\r\n  function getNavList() {\r\n    const list = document.createElement('ul');\r\n    list.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');\r\n\r\n    const homeListItem = getNavItem('home');\r\n    const menuListItem = getNavItem('menu');\r\n    const aboutListItem = getNavItem('about');\r\n\r\n    list.append(homeListItem, menuListItem, aboutListItem);\r\n\r\n    return list;\r\n  };\r\n\r\n  function getNavItem(item) {\r\n    const listItem = document.createElement('li');\r\n    listItem.classList.add('nav-item');\r\n  \r\n    const itemLink = getNavItemLink(item);\r\n  \r\n    listItem.append(itemLink);\r\n  \r\n    return listItem;\r\n  };\r\n\r\n  function getNavItemLink(item) {\r\n    const link = document.createElement('a');\r\n    link.classList.add('nav-link');\r\n    link.href = '#';\r\n    link.textContent = (item === 'home') ? 'Home' : (item === 'menu') ? 'Menu' : 'About';\r\n    link.setAttribute('aria-current', item);\r\n    link.addEventListener('click', e => {navItemClick(e)})\r\n    return link\r\n  };\r\n\r\n  function navItemClick(event) {\r\n    const content = document.getElementById('content');\r\n    content.setActivePage(event.target.textContent.toLowerCase())\r\n  };\r\n\r\n  return { getHeader }\r\n\r\n})();\r\n\r\nconst getHeader = Display.getHeader;\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/displayHeader.js?");

/***/ }),

/***/ "./src/displayHome.js":
/*!****************************!*\
  !*** ./src/displayHome.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomePage\": () => (/* binding */ getHomePage)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\r\n\r\nconst Display = (function () {\r\n  \r\n  function getHomePage() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('container-fluid')\r\n\r\n    const cardColumn = getCardColumn();\r\n\r\n    div.append(cardColumn);\r\n\r\n    return div;\r\n  }\r\n\r\n  function getCardColumn() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('card-columns');\r\n\r\n    const featured = getFeaturedCard();\r\n    const amenities = getAmenitiesCard();\r\n    const locations = getLocationsCard();\r\n\r\n    div.append(featured, amenities, locations)\r\n\r\n    return div\r\n  }\r\n\r\n  function createCard(id) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('card', 'homepage-cards')\r\n    div.id = id\r\n    \r\n    return div\r\n  }\r\n\r\n  function getFeaturedCard() {\r\n    const div = createCard('featured-card');\r\n    \r\n    function getCardHeader() {\r\n      const header = document.createElement('div')\r\n      header.classList.add('card-header');\r\n      header.textContent = 'The Best Dishes'\r\n      header.id = 'featured-card-header'\r\n    \r\n      return header\r\n    }\r\n\r\n    function getCardBody() {\r\n      const body = document.createElement('div');\r\n      body.classList.add('card-body');\r\n\r\n      function getFeaturedItem(itemNum) {\r\n        function getItemCard() {\r\n          const itemCard = document.createElement('div')\r\n          itemCard.classList.add('card', 'mb-3', 'text-white', 'bg-dark')\r\n\r\n          const cardRow = document.createElement('div')\r\n          cardRow.classList.add('row', 'g-0');\r\n\r\n          function getItemImage() {\r\n            const imgColumn = document.createElement('div');\r\n            imgColumn.classList.add('col-md-3', 'col-lg-3', 'col-xl-3')\r\n\r\n            const img = document.createElement('img')\r\n            img.src = \"./media/featured_item\" + itemNum + '.jpg'\r\n\r\n            imgColumn.append(img)\r\n            return imgColumn\r\n          }\r\n\r\n          function getItemDescription() {\r\n            const descColumn = document.createElement('div');\r\n            descColumn.classList.add('col-md-9', 'col-lg-9', 'col-xl-9')\r\n            const itemCardBody = document.createElement('div')\r\n            itemCardBody.classList.add('card-body')\r\n\r\n            let title = document.createElement('div')\r\n            let contents = document.createElement('div')\r\n            title.classList.add('card-title')\r\n            title.textContent = 'Big Meel'\r\n            contents.classList.add('card-text')\r\n            contents.textContent = 'the best stuff u ever had'\r\n          \r\n            \r\n            itemCardBody.append(title, contents)\r\n            descColumn.append(itemCardBody)\r\n            return descColumn\r\n          }\r\n\r\n          const itemImage = getItemImage()\r\n          const itemDescription = getItemDescription()\r\n\r\n          cardRow.append(itemImage, itemDescription)\r\n\r\n          itemCard.append(cardRow)\r\n          return itemCard\r\n        }\r\n\r\n        const item = getItemCard();\r\n        return item\r\n      }\r\n      \r\n      body.append(getFeaturedItem(1), getFeaturedItem(2), getFeaturedItem(3))\r\n      return body\r\n    }\r\n\r\n    div.append(getCardHeader(), getCardBody());\r\n    return div\r\n  };\r\n\r\n  function getAmenitiesCard() {\r\n    const div = createCard('amenities-card');\r\n    \r\n    function getCardHeader() {\r\n      const header = document.createElement('div')\r\n      header.classList.add('card-header');\r\n      header.textContent = 'Come for the food, stay for ...'\r\n      header.id = 'amenities-card-header'\r\n    \r\n      return header\r\n    }\r\n\r\n    function getCardBody() {\r\n      const body = document.createElement('div');\r\n      body.classList.add('card-body');\r\n\r\n      function getAmenity(name) {\r\n        function getAmenityCard() {\r\n          const amenityCard = document.createElement('div')\r\n          amenityCard.classList.add('card', 'mb-3', 'text-white', 'bg-dark')\r\n\r\n          const cardRow = document.createElement('div')\r\n          cardRow.classList.add('row', 'g-0');\r\n\r\n          function getAmenityImage() {\r\n            const imgColumn = document.createElement('div');\r\n            imgColumn.classList.add('col-3')\r\n\r\n            const img = document.createElement('img')\r\n            img.src = \"./media/amenity_\" + name + '.jpg'\r\n\r\n            imgColumn.append(img)\r\n            return imgColumn\r\n          }\r\n\r\n          function getAmenityDescription() {\r\n            const descColumn = document.createElement('div');\r\n            descColumn.classList.add('col-9')\r\n            const amenityCardBody = document.createElement('div')\r\n            amenityCardBody.classList.add('card-body')\r\n\r\n            let title = document.createElement('div')\r\n            let contents = document.createElement('div')\r\n            title.classList.add('card-title')\r\n            title.textContent = name === 'bar' ? 'Our amazing bar!!' :\r\n                                name === 'staff' ? 'Our world-class staff!!' : '' ;\r\n            contents.classList.add('card-text')\r\n            contents.textContent = 'the reason you stay, and they pay us the big bucks'\r\n          \r\n            \r\n            amenityCardBody.append(title, contents)\r\n            descColumn.append(amenityCardBody)\r\n            return descColumn\r\n          }\r\n\r\n          const itemImage = getAmenityImage()\r\n          const itemDescription = getAmenityDescription()\r\n\r\n          cardRow.append(itemDescription, itemImage)\r\n\r\n          amenityCard.append(cardRow)\r\n          return amenityCard\r\n        }\r\n\r\n        const amenity = getAmenityCard();\r\n        return amenity\r\n      }\r\n      \r\n      body.append(getAmenity('bar'), getAmenity('staff'))\r\n      return body\r\n    }\r\n\r\n    div.append(getCardHeader(), getCardBody());\r\n    return div\r\n  };\r\n  \r\n  function getLocationsCard() {\r\n    const div = createCard('locations-card')\r\n    \r\n    function getCardHeader() {\r\n      const header = document.createElement('div')\r\n      header.classList.add('card-header');\r\n      header.textContent = 'Come check us out'\r\n      header.id = 'locations-card-header'\r\n    \r\n      return header\r\n    }\r\n\r\n    function getCardBody() {\r\n      const body = document.createElement('div');\r\n      body.classList.add('card-body');\r\n\r\n      const map = getMap()\r\n\r\n      function getMap() {\r\n        const map = document.createElement('iframe')\r\n        map.id = 'map'\r\n        map.frameborder = '0'\r\n        map.style.border = '0'\r\n        map.src = \"https://www.google.com/maps/embed/v1/view?key=\" + _config__WEBPACK_IMPORTED_MODULE_0__.Config.key + \"&center=36.056595,-112.125092&zoom=8&maptype=satellite\"\r\n        \r\n        return map\r\n      }\r\n\r\n      body.append(map)\r\n      return body\r\n    }\r\n\r\n    div.append(getCardHeader(), getCardBody());\r\n    return div\r\n  };\r\n\r\n  return { getHomePage }\r\n})();\r\n\r\nconst getHomePage = Display.getHomePage;\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/displayHome.js?");

/***/ }),

/***/ "./src/displayMenu.js":
/*!****************************!*\
  !*** ./src/displayMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMenuPage\": () => (/* binding */ getMenuPage)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\nconst Display = (function() {\r\n  function getMenuPage() {\r\n    const div = document.createElement('div');\r\n    \r\n    div.classList.add('container-fluid');\r\n  \r\n    div.append(getList())\r\n  \r\n    function getList() {\r\n      const list = document.createElement('ul');\r\n  \r\n      const appetizers = getListItem('appetizers');\r\n      const entrees = getListItem('entrees');\r\n      const sides = getListItem('sides');\r\n      const drinks = getListItem('drinks');\r\n  \r\n      list.append(appetizers, entrees, sides, drinks);\r\n  \r\n      function getListItem(section) {\r\n        const listItem = document.createElement('li');\r\n        const subList = getSubList(section);\r\n  \r\n        listItem.append(subList);\r\n  \r\n        return listItem\r\n      }\r\n  \r\n      return list\r\n    }\r\n\r\n    return div\r\n  }\r\n  \r\n  function getSubList(section) {\r\n    const subList = document.createElement('ul');\r\n    subList.classList.add('card', 'section-cards');\r\n\r\n    const subListHeader = document.createElement('div');\r\n    subListHeader.classList.add('card-header');\r\n    subListHeader.textContent = section[0].toUpperCase() + section.slice(1);    \r\n    \r\n    const subListBody = document.createElement('div')\r\n    subListBody.classList.add('card-body')\r\n    subList.append(subListHeader, subListBody);\r\n\r\n    let items = _menu__WEBPACK_IMPORTED_MODULE_0__.Menu.getItems(section);\r\n    \r\n    for (let item in items) {\r\n      const subListItem = getSubListItem(items[item]);\r\n      \r\n      subListBody.append(subListItem);\r\n    }\r\n\r\n    function getSubListItem(foodItem) {\r\n      const listItem = document.createElement('li');   \r\n      const itemCard = createCard(foodItem);\r\n\r\n      listItem.append(itemCard);\r\n\r\n      return listItem\r\n    }\r\n\r\n    return subList\r\n  }\r\n\r\n  function createCard(foodItem) {\r\n    const card = document.createElement('div');\r\n    card.classList.add('card', 'm-2', 'text-white', 'bg-dark', 'food-item-cards');\r\n    \r\n    const body = getCardBody();\r\n\r\n    function getCardBody() {\r\n      const body = document.createElement('div');\r\n      body.classList.add('card-body');\r\n\r\n      const title = document.createElement('h5');\r\n      title.textContent = foodItem['title'];\r\n      const subtitle = document.createElement('h6');\r\n      subtitle.textContent = foodItem['price'];\r\n      const text = document.createElement('p');\r\n      text.textContent += foodItem['summary'] ? foodItem['summary'] : '';\r\n      text.textContent += foodItem['ingredients'] ? foodItem['ingredients'] : '';\r\n      \r\n      body.append(title, subtitle, text);\r\n\r\n      return body\r\n    }\r\n\r\n    card.append(body);\r\n\r\n    return card\r\n  }\r\n\r\n  return { getMenuPage }\r\n})()\r\n\r\nconst getMenuPage = Display.getMenuPage;\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/displayMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\r\n\r\n_controller__WEBPACK_IMPORTED_MODULE_0__.Controller.init();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\nconst Menu = (function() {\r\n  \r\n  function createFood(title, price, summary, ingredients) {\r\n    return { title, price, summary, ingredients }\r\n  }\r\n\r\n  let menu = {\r\n    appetizers: fillMenu('appetizers'),\r\n    entrees: fillMenu('entrees'),\r\n    sides: fillMenu('sides'),\r\n    drinks: fillMenu('drinks'),\r\n    desserts: fillMenu('desserts')\r\n  }\r\n\r\n  function getItems(section) {\r\n    return menu[section]\r\n  }\r\n\r\n  function fillMenu(section) {\r\n    if (section === 'appetizers') {\r\n      return [\r\n        createFood('Chips and Salsa', '7.99', 'Homemade Tortilla chips with authentic hotsauce'),\r\n        createFood('Fried Calamari', '8.99', 'Small pieces of squid fried to perfection'),\r\n        createFood('Mozzarella Sticks', '7.99', 'Artisan cheese, breaded and fried')\r\n      ]\r\n    }\r\n    else if (section === 'entrees') {\r\n      return [\r\n        createFood('24oz Ribeye', '21.99', \"1 1/2 lb of the finest meat you'll ever taste\"),\r\n        createFood('Salmon Fillet', '18.99', 'Large, tender, baked salmon steak'),\r\n        createFood('Super Salad', '15.99', 'We will make any salad you can think of'),\r\n        createFood('Crawfish Etouffee', '17.99', 'Delicious Cajun shrimp with our authentic roux, served with steamed rice')\r\n      ]\r\n    }\r\n    else if (section === 'sides') {\r\n      return [\r\n        createFood('French Fries', '4.99', 'Russet potatoes sliced, salted and fried'),\r\n        createFood('Mashed Potatoes', '4.99', 'Yukon gold potatoes mixed with butter, milk, seasoning, and mashed into deliciousness'),\r\n        createFood('Grilled Asparagus', '4.99', 'Fresh asparagus seasoned and flame grilled'),\r\n        createFood('Steam Broccoli', '4.99', 'Greenest broccoli leaves lightly salted and steamed')\r\n      ]\r\n    }\r\n    else if (section === 'drinks') {\r\n      return [\r\n        createFood('Mangorita', '11.99', '', 'Tequila, margarita mix, mango juice and mango slice'),\r\n        createFood('Irish Coffee', '10.99', '', 'Latte with half shot whiskey, full shot irish cream'),\r\n        createFood(\"The You've Got a Problem\", '18.99', '', '6 shots Bacardi 151, 6 shots choice of chaser')\r\n      ]\r\n    }\r\n    else if (section === 'desserts') {\r\n      return [\r\n        createFood('Strawberry Cheesecake', '8.99', 'Slice of the best cheesecake'),\r\n        createFood('Tirimisu', '9.99', 'Piece of delicate chocolate cake'),\r\n        createFood('Cobbler and cream', '8.99', 'Slice of our daily cobbler with a fat scoop of ice cream')\r\n      ]\r\n    }\r\n  }\r\n\r\n  return { getItems }\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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