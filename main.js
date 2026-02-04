/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --light-cyan: #CAF0F8;\n    --frosted-blue: #90E0EF;\n    --turquoise-blue: #00B4D8;\n    --bright-teal: #0077B6;\n    --deep-twilight: #669bbc;\n\n    color: black;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n    box-sizing: border-box;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    font-weight: 300;\n}\n\nbody {\n    background-color: gray;\n    \n    /* Main flex container */\n    display: flex;\n    height: 98vh;\n    gap: 1rem;\n}\n\n.liquid-glass {\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(15px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    background-color: darkgray;\n}\n\n/* Left sidebar stles */\n.sidebar {\n    min-width: 3rem;\n    padding-top: 1rem;\n    flex: 0 0 8%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 2.5rem;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.svg-icon {\n    width: 3.5rem;\n    height: 3.5rem;\n    object-fit: contain;\n    display: block;\n    margin-bottom: 3rem;\n    background: rgba(255, 255, 255, 0.05); \n    border-radius: 50%;\n    transition: opacity 0.3s ease-in-out;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 0.7rem;\n    transition: 0.5s;\n    width: 100%;\n    border-radius: 16px;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    cursor: pointer;\n}\n\n.menu-container:hover {\n    background-color: gray;\n}\n\n.small-icon {\n    width: 2.2rem;\n    height: 2.2rem;\n    margin-bottom: 0.5rem;\n}\n\n/* Center part styles */\n.main-content {\n    flex: 0 0 55%;\n    padding-top: 0.5rem;\n}\n\n.search {\n    width: 98%;\n    font-size: 1rem;\n    line-height: 1.5;\n    background-color: lightgray;\n    border-radius: 8px;\n    padding: 0.5rem;\n    transition: 0.5s;\n    border-radius: 8px;\n}\n\n.search:focus {\n    outline: none;\n    border: 1px solid var(--bright-teal);\n}\n\n.main-display {\n    display: flex;\n    height: 35%;\n}\n\n.live-forecast-section {\n    flex: 0 0 65%;\n    padding-left: 2rem;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.temp {\n    padding-top: 3rem;\n    justify-self: end;\n}\n\n.big-icon-section {\n    flex: 0 0 35%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 2rem;\n    max-width: 10rem;\n}\n\n.big-text {\n    font-size: 3.8rem;\n    letter-spacing: 2px;\n    font-weight: 400;\n}\n\n.forecast-sections-container {\n    display: flex;\n    flex-direction: column;\n    gap: .8rem;\n    height: 47%;\n}\n\n.today-forecast {\n    flex: 0 0 50%;\n    padding: 1rem;\n}\n\n.air-conditions {\n    flex: 0 0 50%;\n    padding: 1rem;\n}\n\n#custom-modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.5); \n    backdrop-filter: blur(4px);    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;               \n    transition: opacity 0.3s ease;\n}\n\n.modal-buttons>button {\n    font-size: 1rem;\n    width: 5rem;\n    height: 2rem;\n    margin: 0.5rem;\n    border-radius: 8px;\n    padding: 0.2rem;\n}\n\n/* State for hiding the modal */\n.modal-hidden {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n}\n\n.confirm-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 1.2rem;\n    padding: 1rem;\n    min-width: 300px;\n    min-height: fit-content;\n}\n\n.right-section {\n    flex: 0 0 35%;\n}\n\n/* -- Cities selection styles -- */\n.city-selection {\n    width: 25rem;\n}\n\n.city-card {\n    display: flex;\n    padding: 1rem 2rem;\n    align-items: center;\n    margin-bottom: .5rem;\n    gap: .5rem;\n}\n\n.city-card > button {\n    flex: 0 0 25%;\n    width: 7rem;\n    height: 2.2rem;\n    border-radius: 8px;\n    border: 0;\n    background-color: gray;\n    margin-left: auto;\n    transition: 0.5s;\n}\n\n.city-card > h2 {\n    flex: 0 0 50%;\n}\n\n.city-card > button:hover {\n    color: white;\n    background-color: gray;\n    cursor: pointer;\n}\n\n.heading-text {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n    margin-left: 1rem;\n}\n\n.forecast-section {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.forecast-card {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.forecast-card>svg {\n    padding-top: .5rem;\n}\n\n.details-section-parent {\n    display: flex;\n    padding: 1rem;\n    gap: 2rem;\n    height: 75%;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.details-section {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.details-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: left;\n}\n\n/* Week forecast section */\n.week-forecast {\n    height: 95%;\n    margin-right: 0.5rem;\n    padding: 1rem 2rem;\n}\n\n.week-forecast-parent {\n    display: flex;\n    height: 90%;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.day-card {\n    display: flex;\n}\n\n.day-name {\n    flex: 0 0 20%;\n}\n\n.day-card>img {\n    width: 2.2rem;\n    flex: 0 0 12%;\n}\n\n.day-condition {\n    margin-left: 5%;\n    flex: 0 0 35%;\n}\n\n.day-temp {\n    flex: 0 0 28%;\n}\n\n.highlight-navigation {\n    background-color: gray;\n}\n\n.highlight-button {\n    font-weight: 500;\n    color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-starter/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\nconst apiKey = \"T3LW8K4FVWYWQM8EAAR88JYKT\";\nconst baseUrl = \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\";\n\n// Adding day names to daily data\nfunction getDayName(dateString, format = 'short') {\n    const date = new Date(dateString);\n    return date.toLocaleDateString('en-US', { weekday: format });\n}\n\n// Icon context\nconst iconContext = __webpack_require__(\"./src/svg-icons sync \\\\.svg$\");\nfunction getIconPath(iconName) {\n    try {\n        // This finds the correct bundled path for \"sun.svg\"\n        return iconContext(`./${iconName}.svg`);\n    } catch (e) {\n        return iconContext('./default.svg');\n    }\n}\n\n// Creates memory objects if not exists\nif(!JSON.parse(localStorage.getItem(\"cities\"))) {\n    localStorage.setItem(\"cities\", JSON.stringify([\"\"]));\n}\nif(!JSON.parse(localStorage.getItem(\"activeCity\"))) {\n    localStorage.setItem(\"activeCity\", JSON.stringify([\"\"]));\n}\nif(!JSON.parse(localStorage.getItem(\"settings\"))) {\n    localStorage.setItem(\"settings\", JSON.stringify({\n        \"unit\": \"metric\"\n    }))\n}\nlet cities = JSON.parse(localStorage.getItem(\"cities\"));\n\n// Displaying data \ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n    // Navigation style based on page\n    if(window.location.href.includes(\"index.html\")) \n        mainRedirect.classList.add(\"highlight-navigation\");\n\n    const activeCity = JSON.parse(localStorage.getItem(\"activeCity\"));\n    const data = await getWeatherData(activeCity);\n    displayData(data);\n})\n\n// Getting weather data\nasync function getWeatherData(location) {\n    const unit = JSON.parse(localStorage.getItem(\"settings\")).unit;\n    try {\n        const response = await fetch(`${baseUrl}${location}?unitGroup=${unit}&key=${apiKey}&contentType=json`);\n        \n        if (response.ok) {\n            const data = await response.json();\n            return dataCleaner(data);\n        } else {\n            // Captures 400 or 404 errors from the API\n            console.error(`API Error: ${response.status} - ${response.statusText}`);\n            return null; \n        }\n    } catch (error) {\n        // Captures network failures (e.g., no internet)\n        console.error(\"Network or Script Error:\", error);\n        return null;\n    }\n}\n\nfunction dataCleaner(apiData) {\n    const todayDate = apiData.days[0].datetime;\n\n    return {\n        city: apiData.resolvedAddress,\n        temp: apiData.currentConditions.temp,\n        condition: apiData.currentConditions.conditions,\n        description: apiData.description,\n        icon: apiData.currentConditions.icon,\n        humidity: apiData.currentConditions.humidity,\n\n        // Hourly data\n        hourly: apiData.days[0].hours\n            .filter((_, index) => index % 4 === 0) \n            .slice(0, 6)\n            .map(hour => ({\n                time: hour.datetime.slice(0, 5), \n                temp: hour.temp,\n                icon: hour.icon\n            })),\n\n        // 7 day forecast data\n        daily: apiData.days.slice(0, 7).map((day, index) => {\n            return {\n                dayName: index === 0 ? \"Today\" : getDayName(day.datetime, 'short'),\n                tempMax: day.tempmax,\n                tempMin: day.tempmin,\n                icon: day.icon,\n                date: day.datetime,\n                condition: day.conditions\n            };\n        }),\n\n        // Wheather details\n        details: {\n            feelsLike: apiData.currentConditions.feelslike,\n            windSpeed: apiData.currentConditions.windspeed,\n            uvIndex: apiData.currentConditions.uvindex,\n            rainChance: apiData.currentConditions.precipprob,\n            sunrise: apiData.currentConditions.sunrise,\n            sunset: apiData.currentConditions.sunset \n        },\n    }\n}\n\n// DOM Elements\nconst mainRedirect = document.querySelector(\"#main-redirect\");\nconst inputBox = document.querySelector(\".search\");\nconst overlay = document.querySelector(\"#custom-modal-overlay\");\nconst cityPreview = document.querySelector(\"#city-preview\");\nconst cityName = document.querySelector(\".city-name\");\nconst condition = document.querySelector(\".rain-chance\");\nconst temp = document.querySelector(\".temp\");\nconst citiesRedirect = document.querySelector(\"#cities-redirect\");\nconst mainIconContainer = document.querySelector(\"#main-icon\");\nconst todayForecast = document.querySelector(\".forecast-section\");\nconst realFeel = document.querySelector(\"#real-feel\");\nconst chanceOfRain = document.querySelector(\"#chance-of-rain\");\nconst sunriseCard = document.querySelector(\"#sunrise\");\nconst sunsetCard = document.querySelector(\"#sunset\");\nconst wind = document.querySelector(\"#wind\");\nconst uvIndex = document.querySelector(\"#uv-index\");\nconst weekForecastParent = document.querySelector(\".week-forecast-parent\");\nconst settingsRedirect = document.querySelector(\"#settings-redirect\");\n\n// Displaying the data in the containers\nfunction displayData(data) {\n    cityName.textContent = data.city;\n    condition.textContent = data.condition;\n    temp.textContent = data.temp + \"°\";\n    \n    // Displaying the main icon\n    const icon = document.createElement(\"img\");\n    icon.src = getIconPath(data.icon);\n    mainIconContainer.appendChild(icon);\n\n    // Building the day forecast\n    data.hourly.forEach((hourData) => {\n        const divContainer = document.createElement(\"div\");\n        divContainer.classList.add(\"forecast-card\");\n\n        const timeText = document.createElement(\"h4\");\n        timeText.textContent = hourData.time;\n\n        const icon = document.createElement(\"img\");\n        icon.src = getIconPath(hourData.icon);\n        icon.classList.add(\"small-icon\");\n\n        const temp = document.createElement(\"h4\");\n        temp.textContent = hourData.temp;\n\n        divContainer.appendChild(timeText);\n        divContainer.appendChild(icon);\n        divContainer.appendChild(temp);\n        todayForecast.appendChild(divContainer);\n    })\n\n    // Details section\n    const realFeelText = document.createElement(\"h4\");\n    realFeelText.textContent = data.details.feelsLike;\n    realFeel.appendChild(realFeelText);\n\n    const chanceOfRainText = document.createElement(\"h4\");\n    chanceOfRainText.textContent = data.details.rainChance + \"%\";\n    chanceOfRain.appendChild(chanceOfRainText);\n\n    const sunriseText = document.createElement(\"h4\");\n    sunriseText.textContent = data.details.sunrise.slice(0,5);\n    sunriseCard.appendChild(sunriseText);\n\n    const sunsetText = document.createElement(\"h4\");\n    sunsetText.textContent = data.details.sunset.slice(0, 5);\n    sunsetCard.appendChild(sunsetText);\n\n    const windText = document.createElement(\"h4\");\n    windText.textContent = data.details.windSpeed;\n    wind.appendChild(windText);\n\n    const uvIndexText = document.createElement(\"h4\");\n    uvIndexText.textContent = data.details.uvIndex;\n    uvIndex.appendChild(uvIndexText);\n\n    // Week forecast section\n    data.daily.forEach((dayData) => {\n        const dayCard = document.createElement(\"div\");\n        dayCard.classList.add(\"day-card\");\n\n        const dayNameContainer = document.createElement(\"h4\");\n        dayNameContainer.classList.add(\"day-name\");\n        dayNameContainer.textContent = dayData.dayName;\n\n        const icon = document.createElement(\"img\");\n        icon.src = getIconPath(dayData.icon);\n\n        const condition = document.createElement(\"h4\");\n        condition.classList.add(\"day-condition\");\n        condition.textContent = dayData.condition.split(\",\")[0];\n\n        const temp = document.createElement(\"h4\");\n        temp.classList.add(\"day-temp\");\n        temp.textContent = dayData.tempMax + \"° / \" + dayData.tempMin + \"°\";\n\n        dayCard.appendChild(dayNameContainer);\n        dayCard.appendChild(icon);\n        dayCard.appendChild(condition);\n        dayCard.appendChild(temp);\n        weekForecastParent.appendChild(dayCard);\n    })\n}\n\n// Displaying the confirmation modal\ninputBox.addEventListener(\"keydown\", async (event) => {\n    if(inputBox.value === \"\") \n        return;\n    if(event.key === \"Enter\") {\n        // Abort saving if city already exists\n        const cities = getCitiesFromStorage();\n        if(cities.includes(inputBox.value)) return;\n\n        // Fetching data from server\n        const data = await getWeatherData(inputBox.value);\n        if(data) {\n            cityPreview.textContent = inputBox.value + \" \";\n            overlay.classList.remove(\"modal-hidden\");\n        }\n    };\n});\n\n// Redirect to select cities\ncitiesRedirect.addEventListener(\"click\", () => {\n    window.location.href = \"cities.html\";\n})\n\nsettingsRedirect.addEventListener(\"click\", () => {\n    window.location.href = \"settings.html\";\n})\n\n// Hide the confirmation box\ndocument.addEventListener(\"click\", async (e) => {\n    if (e.target.closest(\"#cancel-btn\")) {\n        e.preventDefault();\n        overlay.classList.add(\"modal-hidden\");\n    } else if(e.target.closest(\"#confirm-btn\")) {\n        e.preventDefault();\n        const data = await getWeatherData(inputBox.value);\n        overlay.classList.add(\"modal-hidden\");\n\n        // Save city\n        saveCityToStorage(data.city);\n    }\n});\n\n// Storage functions\n// Storage read\nfunction getCitiesFromStorage() {\n    return JSON.parse(localStorage.getItem(\"cities\") || []);\n}\n\n// Save city\nfunction saveCityToStorage(city) {\n    cities.push(city);\n    localStorage.setItem(\"cities\", JSON.stringify(cities));\n}\n\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-starter/./src/styles.css?\n}");

/***/ },

/***/ "./src/svg-icons sync \\.svg$"
/*!*************************************************!*\
  !*** ./src/svg-icons/ sync nonrecursive \.svg$ ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var map = {\n\t\"./clear-day.svg\": \"./src/svg-icons/clear-day.svg\",\n\t\"./clear-night.svg\": \"./src/svg-icons/clear-night.svg\",\n\t\"./cloudy.svg\": \"./src/svg-icons/cloudy.svg\",\n\t\"./fog.svg\": \"./src/svg-icons/fog.svg\",\n\t\"./hail.svg\": \"./src/svg-icons/hail.svg\",\n\t\"./partly-cloudy-day.svg\": \"./src/svg-icons/partly-cloudy-day.svg\",\n\t\"./partly-cloudy-night.svg\": \"./src/svg-icons/partly-cloudy-night.svg\",\n\t\"./rain-snow-showers-day.svg\": \"./src/svg-icons/rain-snow-showers-day.svg\",\n\t\"./rain-snow-showers-night.svg\": \"./src/svg-icons/rain-snow-showers-night.svg\",\n\t\"./rain-snow.svg\": \"./src/svg-icons/rain-snow.svg\",\n\t\"./rain.svg\": \"./src/svg-icons/rain.svg\",\n\t\"./showers-day.svg\": \"./src/svg-icons/showers-day.svg\",\n\t\"./showers-night.svg\": \"./src/svg-icons/showers-night.svg\",\n\t\"./sleet.svg\": \"./src/svg-icons/sleet.svg\",\n\t\"./snow-showers-day.svg\": \"./src/svg-icons/snow-showers-day.svg\",\n\t\"./snow-showers-night.svg\": \"./src/svg-icons/snow-showers-night.svg\",\n\t\"./snow.svg\": \"./src/svg-icons/snow.svg\",\n\t\"./thunder-rain.svg\": \"./src/svg-icons/thunder-rain.svg\",\n\t\"./thunder-showers-day.svg\": \"./src/svg-icons/thunder-showers-day.svg\",\n\t\"./thunder-showers-night.svg\": \"./src/svg-icons/thunder-showers-night.svg\",\n\t\"./thunder.svg\": \"./src/svg-icons/thunder.svg\",\n\t\"./wind.svg\": \"./src/svg-icons/wind.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/svg-icons sync \\\\.svg$\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/_sync_nonrecursive_\\.svg$?\n}");

/***/ },

/***/ "./src/svg-icons/clear-day.svg"
/*!*************************************!*\
  !*** ./src/svg-icons/clear-day.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"307faf5a25c67541fef3.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/clear-day.svg?\n}");

/***/ },

/***/ "./src/svg-icons/clear-night.svg"
/*!***************************************!*\
  !*** ./src/svg-icons/clear-night.svg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"988f5a0ddca358c3b0f6.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/clear-night.svg?\n}");

/***/ },

/***/ "./src/svg-icons/cloudy.svg"
/*!**********************************!*\
  !*** ./src/svg-icons/cloudy.svg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"b473d83f0b1d9a1e6275.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/cloudy.svg?\n}");

/***/ },

/***/ "./src/svg-icons/fog.svg"
/*!*******************************!*\
  !*** ./src/svg-icons/fog.svg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"1713156323a44fabdbea.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/fog.svg?\n}");

/***/ },

/***/ "./src/svg-icons/hail.svg"
/*!********************************!*\
  !*** ./src/svg-icons/hail.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"ce6bacd2ef055011125b.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/hail.svg?\n}");

/***/ },

/***/ "./src/svg-icons/partly-cloudy-day.svg"
/*!*********************************************!*\
  !*** ./src/svg-icons/partly-cloudy-day.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"f4b26560ad0262b9c741.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/partly-cloudy-day.svg?\n}");

/***/ },

/***/ "./src/svg-icons/partly-cloudy-night.svg"
/*!***********************************************!*\
  !*** ./src/svg-icons/partly-cloudy-night.svg ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"028e48cb6e062a0252c3.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/partly-cloudy-night.svg?\n}");

/***/ },

/***/ "./src/svg-icons/rain-snow-showers-day.svg"
/*!*************************************************!*\
  !*** ./src/svg-icons/rain-snow-showers-day.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"7220bd986b010aa0611e.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/rain-snow-showers-day.svg?\n}");

/***/ },

/***/ "./src/svg-icons/rain-snow-showers-night.svg"
/*!***************************************************!*\
  !*** ./src/svg-icons/rain-snow-showers-night.svg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"c24a03375b91057c31bf.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/rain-snow-showers-night.svg?\n}");

/***/ },

/***/ "./src/svg-icons/rain-snow.svg"
/*!*************************************!*\
  !*** ./src/svg-icons/rain-snow.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"751a1e9cc338ca8be8c3.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/rain-snow.svg?\n}");

/***/ },

/***/ "./src/svg-icons/rain.svg"
/*!********************************!*\
  !*** ./src/svg-icons/rain.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"d365ae49bcc9d20d48c7.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/rain.svg?\n}");

/***/ },

/***/ "./src/svg-icons/showers-day.svg"
/*!***************************************!*\
  !*** ./src/svg-icons/showers-day.svg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"cc26fea1c648e16f201b.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/showers-day.svg?\n}");

/***/ },

/***/ "./src/svg-icons/showers-night.svg"
/*!*****************************************!*\
  !*** ./src/svg-icons/showers-night.svg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"a616a564cd0b271a6a2f.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/showers-night.svg?\n}");

/***/ },

/***/ "./src/svg-icons/sleet.svg"
/*!*********************************!*\
  !*** ./src/svg-icons/sleet.svg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"ba14f99a771ca5366c9b.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/sleet.svg?\n}");

/***/ },

/***/ "./src/svg-icons/snow-showers-day.svg"
/*!********************************************!*\
  !*** ./src/svg-icons/snow-showers-day.svg ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"e973d4fb0c4abbe2ac68.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/snow-showers-day.svg?\n}");

/***/ },

/***/ "./src/svg-icons/snow-showers-night.svg"
/*!**********************************************!*\
  !*** ./src/svg-icons/snow-showers-night.svg ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"83c6a48c36ad31a7c481.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/snow-showers-night.svg?\n}");

/***/ },

/***/ "./src/svg-icons/snow.svg"
/*!********************************!*\
  !*** ./src/svg-icons/snow.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"7084a517bd436592de9a.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/snow.svg?\n}");

/***/ },

/***/ "./src/svg-icons/thunder-rain.svg"
/*!****************************************!*\
  !*** ./src/svg-icons/thunder-rain.svg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"019b157e8d00c4392e4c.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/thunder-rain.svg?\n}");

/***/ },

/***/ "./src/svg-icons/thunder-showers-day.svg"
/*!***********************************************!*\
  !*** ./src/svg-icons/thunder-showers-day.svg ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"ba37aecb1fbd05feacad.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/thunder-showers-day.svg?\n}");

/***/ },

/***/ "./src/svg-icons/thunder-showers-night.svg"
/*!*************************************************!*\
  !*** ./src/svg-icons/thunder-showers-night.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"4f01cd1dc0417e3bd5d8.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/thunder-showers-night.svg?\n}");

/***/ },

/***/ "./src/svg-icons/thunder.svg"
/*!***********************************!*\
  !*** ./src/svg-icons/thunder.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"c30de0df095ae961a139.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/thunder.svg?\n}");

/***/ },

/***/ "./src/svg-icons/wind.svg"
/*!********************************!*\
  !*** ./src/svg-icons/wind.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"49e5d49966cee04973d6.svg\";\n\n//# sourceURL=webpack://webpack-starter/./src/svg-icons/wind.svg?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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