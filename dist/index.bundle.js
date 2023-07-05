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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'lato', sans-serif;\r\n}\r\n\r\nh1 {\r\n  color: rgb(157, 73, 236);\r\n  margin: 100px  600px;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n#category {\r\n  text-decoration: underline;\r\n}\r\n\r\n.main-title {\r\n  margin: 2% 0;\r\n  display: flex;\r\n  color: #f90;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n#home {\r\n  padding: 0 3%;\r\n}\r\n\r\n/* CSS code for styling the card */\r\n.card-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 16px;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  border-radius: 4px;\r\n  padding: 16px;\r\n  margin-bottom: 16px;\r\n  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);\r\n  flex-direction: column;\r\n}\r\n\r\n.card:hover {\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n  max-height: 60%;\r\n  object-fit: cover;\r\n  border-radius: 4px;\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.card h3 {\r\n  margin-top: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.card p {\r\n  margin: 8px 0;\r\n}\r\n\r\n.card-label {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-self: flex-end;\r\n}\r\n\r\n.card button {\r\n  display: block;\r\n  margin-top: 10px;\r\n  padding: 8px 16px;\r\n  background-color: #f90;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card button:hover {\r\n  background-color: #e98c00;\r\n}\r\n\r\n.loader {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  border: 2px solid #ccc;\r\n  border-radius: 50%;\r\n  border-top-color: #333;\r\n  animation: spin 0.6s infinite linear;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.fa-regular {\r\n  color: #000;\r\n}\r\n\r\ni {\r\n  font-size: 1.6vw;\r\n  cursor: pointer;\r\n  transition: font-size 0.2s ease, color 0.2s ease;\r\n}\r\n\r\ni:hover {\r\n  font-size: 1.8vw;\r\n}\r\n\r\ni:active {\r\n  font-size: 1.5vw;\r\n  color: #f00;\r\n}\r\n\r\n.fa-solid {\r\n  color: #f00;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.header,\r\n.footer {\r\n  padding: 24px;\r\n  border: 2px solid  rgb(255, 153, 0);\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.bio {\r\n  color: black;\r\n  box-shadow: 0 2px 14px;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.bio-part {\r\n  color: black;\r\n  box-shadow: 0 2px 14px;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  margin-right: 20px;\r\n}\r\n\r\n/* add style for popup */\r\n\r\n.meal {\r\n  background-color: #161b4aa7;\r\n  overflow-y: scroll;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  backdrop-filter: blur(5px);\r\n  padding-left: 20px;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.meal-list {\r\n  background-color: rgb(236, 212, 177);\r\n  width: 760px;\r\n  height: 600px;\r\n  border-radius: 8px;\r\n  padding: 12px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.close-btn {\r\n  text-align: right;\r\n  margin: 12px;\r\n}\r\n\r\n.recipe-close-btn {\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  width: 25px;\r\n  height: 25px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.meal-list-comment {\r\n  display: flex;\r\n  gap: 60px;\r\n}\r\n\r\n.meal-name {\r\n  padding: 60px;\r\n  color: #f90;\r\n  border: 2px solid  rgb(255, 153, 0);\r\n  border-radius: 10px;\r\n}\r\n\r\n.comment-meal h3 {\r\n  color: #f90;\r\n  padding: 20px;\r\n}\r\n\r\n#comments-list {\r\n  color: rgb(12, 12, 11);\r\n  font-size: 20px;\r\n  background-color: rgb(245, 232, 168);\r\n  border: 2px solid #f90;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 4px 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.meal-image {\r\n  width: 350px;\r\n  height: 350px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.comment-part {\r\n  padding-top: 20px;\r\n  color: #f90;\r\n}\r\n\r\n.name {\r\n  border-radius: 12px;\r\n  padding: 8px;\r\n  width: 300px;\r\n}\r\n\r\n#textArea {\r\n  border-radius: 12px;\r\n  padding: 8px;\r\n}\r\n\r\n#submit {\r\n  border-radius: 12px;\r\n  padding: 8px;\r\n  margin: 12px;\r\n  width: 300px;\r\n  color: #f90;\r\n  font-size: 20px;\r\n}\r\n\r\n.comment-name {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  color: #f90;\r\n  row-gap: 20px;\r\n  width: 100%;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_itemList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/itemList.js */ \"./src/modules/itemList.js\");\n\n\n\n(0,_modules_itemList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   baseURL: () => (/* binding */ baseURL),\n/* harmony export */   createApp: () => (/* binding */ createApp),\n/* harmony export */   getLikesCount: () => (/* binding */ getLikesCount),\n/* harmony export */   getOneMeal: () => (/* binding */ getOneMeal),\n/* harmony export */   getRegionWiseMeal: () => (/* binding */ getRegionWiseMeal)\n/* harmony export */ });\nconst baseURL = 'https://www.themealdb.com/api/json/v1/1/';\nconst involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n\n// Create a new app and retrieve the appID\nconst createApp = async () => {\n  const storedAppId = localStorage.getItem('appId');\n  if (storedAppId && storedAppId === '1FNl9krFuHr2YmoEXWQu') {\n    return storedAppId;\n  }\n\n  localStorage.setItem('appId', '1FNl9krFuHr2YmoEXWQu');\n  return '1FNl9krFuHr2YmoEXWQu';\n};\n\nconst getLikesCount = async (appId, itemId) => {\n  try {\n    const response = await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`);\n    const data = await response.json();\n    let likes = 0;\n\n    // Check if the response is an array and find the likes count for the item\n    if (Array.isArray(data)) {\n      const item = data.find((item) => item.item_id === itemId);\n      if (item) {\n        likes = item.likes;\n      }\n    }\n    return likes;\n  } catch (error) {\n    return `Error adding like:${error}`;\n  }\n};\n\n// List of meal\nconst getRegionWiseMeal = async () => {\n  const response = await fetch(`${baseURL}filter.php?a=Indian`);\n  const data = await response.json();\n  return data.meals;\n};\n\n// Individual meal\nconst getOneMeal = async (mealID) => {\n  const response = await fetch(`${baseURL}lookup.php?i=${mealID}`);\n  const data = await response.json();\n  return data.meals;\n};\n\nconst addLike = async (appId, itemId) => {\n  try {\n    await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: itemId }),\n    });\n    return undefined;\n  } catch (error) {\n    return `Error adding like:${error}`;\n  }\n};\n\n// Export the base URL for the meal API\n\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = () => {\n  const itemList = document.getElementById('item-list');\n  return itemList.children.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/itemList.js":
/*!*********************************!*\
  !*** ./src/modules/itemList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.js */ \"./src/modules/loader.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n\n\n\n\n\nconst updateHomepageCounters = () => {\n  const itemsCounter = document.getElementById('items-counter');\n  itemsCounter.textContent = `( ${(0,_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()} )`;\n};\n\nconst populateItemList = async () => {\n  // Retrieve the app ID\n  const appID = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.createApp)();\n  const meals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getRegionWiseMeal)();\n  const itemList = document.getElementById('item-list');\n\n  // Clear existing items\n  itemList.innerHTML = '';\n\n  // Iterate through the meals and create card elements for each\n  meals.forEach(async (meal) => {\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    const image = document.createElement('img');\n    image.src = meal.strMealThumb;\n    card.appendChild(image);\n\n    const cardHeader = document.createElement('div');\n    cardHeader.classList.add('card-header');\n    card.appendChild(cardHeader);\n\n    const name = document.createElement('h3');\n    name.textContent = meal.strMeal;\n    cardHeader.appendChild(name);\n\n    const likes = document.createElement('span');\n    likes.innerHTML = '<i class=\"fa-regular fa-heart\"></i>';\n    cardHeader.appendChild(likes);\n\n    const likeCountDiv = document.createElement('div');\n    likeCountDiv.classList.add('card-label');\n\n    const likeCount = document.createElement('label');\n    likeCount.classList.add('label');\n    const count = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)(appID, meal.idMeal);\n    likeCount.innerHTML = `${count} likes`;\n    likeCountDiv.appendChild(likeCount);\n    card.appendChild(likeCountDiv);\n\n    // Add like function\n    likes.addEventListener('click', async () => {\n      (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.showLoader)(likeCountDiv, likeCount); // Show the loader\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(appID, meal.idMeal);\n      const countLabel = card.querySelector('.label'); // Find the like count label within the card\n      if (countLabel) {\n        const count = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)(appID, meal.idMeal);\n        (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.hideLoader)(likeCountDiv, countLabel); // Hide the loader\n        countLabel.innerHTML = `${count} likes`; // Update the like count label\n      }\n    });\n\n    const commentButton = document.createElement('button');\n    commentButton.textContent = 'Comments';\n    commentButton.id = 'Comments';\n    commentButton.setAttribute('data-btn', `${meal.idMeal}`);\n    card.appendChild(commentButton);\n\n    commentButton.addEventListener('click', (e) => {\n      const id = e.target.dataset.btn;\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, meals);\n    });\n\n    itemList.appendChild(card);\n\n    // Update the homepage counters after each meal card is created\n    updateHomepageCounters();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateItemList);\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/itemList.js?");

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideLoader: () => (/* binding */ hideLoader),\n/* harmony export */   showLoader: () => (/* binding */ showLoader)\n/* harmony export */ });\nconst showLoader = (element, labelCount) => {\n  labelCount.style.display = 'none';\n  const loader = document.createElement('div');\n  loader.classList.add('loader');\n  element.appendChild(loader);\n};\n\nconst hideLoader = (element, labelCount) => {\n  const loader = element.querySelector('.loader');\n  if (loader) {\n    element.removeChild(loader);\n    labelCount.style.display = 'flex';\n  }\n};\n\n//# sourceURL=webpack://setup-webpack/./src/modules/loader.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseURL = 'https://www.themealdb.com/api/json/v1/1/';\nconst involvementAPIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n\nconst getComments = async (id) => {\n  try {\n    const response = await fetch(`${involvementAPIURL}/comments?itemId=${id}`);\n    if (!response.ok) {\n      throw new Error('Failed to fetch comments');\n    }\n    const data = await response.json();\n    return data.map((comment) => comment.comment);\n  } catch (error) {\n    return [];\n  }\n};\n\nconst saveComments = (id, comments) => {\n  localStorage.setItem(`comments_${id}`, JSON.stringify(comments));\n};\n\nconst getSavedComments = (id) => {\n  const savedComments = localStorage.getItem(`comments_${id}`);\n  return savedComments ? JSON.parse(savedComments) : [];\n};\n\nconst addComment = async (id, data) => {\n  const meal = data.find((ele) => ele.idMeal === id);\n  const mealContainer = document.getElementById('meal');\n  mealContainer.style.display = 'flex';\n\n  // Fetch meal details from the API using the id\n  const response = await fetch(`${baseURL}lookup.php?i=${id}`);\n  const mealDetails = await response.json();\n\n  const mealElement = document.createElement('div');\n  mealElement.className = 'meal-list';\n  mealElement.innerHTML = '';\n\n  const mealCategory = mealDetails.meals[0].strCategory;\n\n  mealElement.innerHTML = `\n    <div class=\"close-btn\">\n      <button type=\"button\" class=\"btn recipe-close-btn\">\n        <i class=\"fas fa-times\"></i>\n      </button>\n    </div>\n    <div class=\"meal-image-comment\">\n      <div class=\"meal-list-comment\">\n        <img src=\"${meal.strMealThumb}\" alt=\"\" class=\"meal-image\">\n        <div class=\"comment-meal\">\n          <h2 class=\"meal-name\">${meal.strMeal}</h2>\n          <h3>Category: ${mealCategory}</h3>\n          <h3>Comments</h3>\n          <ul id=\"comments-list\"></ul>\n        </div>\n      </div>\n      <h3 class=\"comment-part\">Add Comments</h3>\n      <div class=\"form\">\n        <input type=\"text\" class=\"name\" id=\"name\" placeholder=\"Name\">\n      </div><br>\n      <div class=\"form\">\n        <textarea name=\"textarea\" id=\"textArea\" cols=\"40\" rows=\"10\"></textarea>\n      </div>\n      <div class=\"form\">\n        <button type=\"submit\" id=\"submit\">Submit</button>\n      </div>\n    </div>\n  `;\n\n  mealContainer.appendChild(mealElement);\n\n  const closeBtn = mealElement.querySelector('.recipe-close-btn');\n  closeBtn.addEventListener('click', () => {\n    mealContainer.style.display = 'none';\n    mealContainer.removeChild(mealElement);\n  });\n\n  const commentsList = mealElement.querySelector('#comments-list');\n  const comments = await getComments(id);\n  const savedComments = getSavedComments(id);\n\n  comments.concat(savedComments).forEach((comment) => {\n    const div = document.createElement('div');\n    div.className = 'comment-name';\n    div.innerHTML = comment;\n    commentsList.appendChild(div);\n  });\n\n  const submitBtn = mealElement.querySelector('#submit');\n  submitBtn.addEventListener('click', () => {\n    const nameInput = mealElement.querySelector('#name');\n    const commentInput = mealElement.querySelector('#textArea');\n    const name = nameInput.value;\n    const comment = commentInput.value;\n    if (name.trim() !== '' && comment.trim() !== '') {\n      const newComment = `<div>${name}</div><div>${comment}</div>`;\n      const div = document.createElement('div');\n      div.className = 'comment-name';\n      div.innerHTML = newComment;\n      commentsList.appendChild(div);\n      nameInput.value = '';\n      commentInput.value = '';\n\n      // Save the new comment to localStorage\n      const savedComments = getSavedComments(id);\n      const updatedComments = savedComments.concat(newComment);\n      saveComments(id, updatedComments);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/popup.js?");

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