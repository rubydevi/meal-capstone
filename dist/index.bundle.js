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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'lato', sans-serif;\r\n}\r\n\r\nh1 {\r\n  color: rgb(157, 73, 236);\r\n  margin: 100px  600px;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n#category {\r\n  text-decoration: underline;\r\n}\r\n\r\n.main-title {\r\n  margin: 2% 0;\r\n  display: flex;\r\n  color: #f90;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n#home {\r\n  padding: 0 3%;\r\n}\r\n\r\n/* CSS code for styling the card */\r\n.card-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 16px;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  border-radius: 4px;\r\n  padding: 16px;\r\n  margin-bottom: 16px;\r\n  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);\r\n  flex-direction: column;\r\n}\r\n\r\n.card:hover {\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n  max-height: 60%;\r\n  object-fit: cover;\r\n  border-radius: 4px;\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.card h3 {\r\n  margin-top: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.card p {\r\n  margin: 8px 0;\r\n}\r\n\r\n.card-label {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-self: flex-end;\r\n}\r\n\r\n.card button {\r\n  display: block;\r\n  margin-top: 10px;\r\n  padding: 8px 16px;\r\n  background-color: #f90;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-elements button {\r\n  padding: 2%;\r\n  background-color: #f90;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card button:hover {\r\n  background-color: #e98c00;\r\n}\r\n\r\n.loader {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  border: 2px solid #ccc;\r\n  border-radius: 50%;\r\n  border-top-color: #333;\r\n  animation: spin 0.6s infinite linear;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.fa-regular {\r\n  color: #000;\r\n}\r\n\r\ni {\r\n  font-size: 1.6vw;\r\n  cursor: pointer;\r\n  transition: font-size 0.2s ease, color 0.2s ease;\r\n}\r\n\r\ni:hover {\r\n  font-size: 1.8vw;\r\n}\r\n\r\ni:active {\r\n  font-size: 1.5vw;\r\n  color: #f00;\r\n}\r\n\r\n.fa-solid {\r\n  color: #f00;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.header,\r\n.footer {\r\n  padding: 24px;\r\n  border: 2px solid  rgb(255, 153, 0);\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.bio {\r\n  color: black;\r\n  box-shadow: 0 2px 14px;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.bio-part {\r\n  color: black;\r\n  box-shadow: 0 2px 14px;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  margin-right: 20px;\r\n}\r\n\r\n/* add style for popup */\r\n\r\n.meal {\r\n  background-color: #161b4aa7;\r\n  overflow-y: scroll;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  backdrop-filter: blur(5px);\r\n  padding-left: 20px;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.meal-list {\r\n  background-color: rgb(236, 212, 177);\r\n  width: 760px;\r\n  height: 600px;\r\n  border-radius: 8px;\r\n  padding: 12px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.close-btn {\r\n  text-align: right;\r\n  margin: 12px;\r\n}\r\n\r\n.recipe-close-btn {\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  width: 25px;\r\n  height: 25px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.meal-list-comment {\r\n  display: flex;\r\n  gap: 60px;\r\n}\r\n\r\n.meal-name {\r\n  padding: 60px;\r\n  color: #f90;\r\n  border: 2px solid  rgb(255, 153, 0);\r\n  border-radius: 10px;\r\n}\r\n\r\n.comment-meal h3 {\r\n  color: #f90;\r\n  padding: 20px;\r\n}\r\n\r\n#comments-list {\r\n  color: rgb(12, 12, 11);\r\n  font-size: 20px;\r\n  background-color: rgb(245, 232, 168);\r\n  border: 2px solid #f90;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 4px 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.meal-image {\r\n  width: 350px;\r\n  height: 350px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.comment-part {\r\n  padding-top: 20px;\r\n  color: #f90;\r\n}\r\n\r\n.name {\r\n  border-radius: 12px;\r\n  padding: 8px;\r\n  width: 300px;\r\n}\r\n\r\n#textArea {\r\n  border-radius: 12px;\r\n  padding: 8px;\r\n}\r\n\r\n#submit {\r\n  border-radius: 12px;\r\n  padding: 8px;\r\n  margin: 12px;\r\n  width: 300px;\r\n  color: #f90;\r\n  font-size: 20px;\r\n}\r\n\r\n.comment-name {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  color: #f90;\r\n  row-gap: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  max-width: 600px;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.modal-title {\r\n  padding: 2%;\r\n  border-bottom: 2px solid orange;\r\n  width: 100%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.modal-image {\r\n  width: 53%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentSection {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  gap: 20px;\r\n}\r\n\r\n.comments-title {\r\n  padding: 2%;\r\n  border-radius: 6px;\r\n  color: #ffa500;\r\n  display: flex;\r\n}\r\n\r\n#commentsContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 1px solid #ffa500;\r\n  padding: 2%;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.form-elements {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.form-elements input {\r\n  padding: 4%;\r\n  border: 1px solid orange;\r\n  border-radius: 2px;\r\n}\r\n\r\n@media screen and (max-width: 765px) {\r\n  .meal-list-comment {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal {\r\n    padding: 12px;\r\n  }\r\n\r\n  .commentSection {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_itemList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/itemList.js */ \"./src/modules/itemList.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_itemList_js__WEBPACK_IMPORTED_MODULE_1__]);\n_modules_itemList_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_modules_itemList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   baseURL: () => (/* binding */ baseURL),\n/* harmony export */   createApp: () => (/* binding */ createApp),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getLikesCount: () => (/* binding */ getLikesCount),\n/* harmony export */   getOneMeal: () => (/* binding */ getOneMeal),\n/* harmony export */   getRegionWiseMeal: () => (/* binding */ getRegionWiseMeal),\n/* harmony export */   submitComment: () => (/* binding */ submitComment)\n/* harmony export */ });\nconst baseURL = 'https://www.themealdb.com/api/json/v1/1/';\r\nconst involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\n\r\n// Create a new app and retrieve the appID\r\nconst createApp = async () => {\r\n  const storedAppId = localStorage.getItem('appId');\r\n  if (storedAppId && storedAppId === '1FNl9krFuHr2YmoEXWQu') {\r\n    return storedAppId;\r\n  }\r\n\r\n  localStorage.setItem('appId', '1FNl9krFuHr2YmoEXWQu');\r\n  return '1FNl9krFuHr2YmoEXWQu';\r\n};\r\n\r\nconst getOneMeal = async (mealID) => {\r\n  const response = await fetch(`${baseURL}lookup.php?i=${mealID}`);\r\n  const data = await response.json();\r\n  return data.meals;\r\n};\r\n\r\nconst getLikesCount = async (appId, itemId) => {\r\n  try {\r\n    const response = await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`);\r\n    const data = await response.json();\r\n    let likes = 0;\r\n\r\n    // Check if the response is an array and find the likes count for the item\r\n    if (Array.isArray(data)) {\r\n      const item = data.find((item) => item.item_id === itemId);\r\n      if (item) {\r\n        likes = item.likes;\r\n      }\r\n    }\r\n    return likes;\r\n  } catch (error) {\r\n    return `Error adding like:${error}`;\r\n  }\r\n};\r\n\r\nconst submitComment = async (appID, itemId, name, comment) => {\r\n  const response = await fetch(`${involvementAPIBaseURL}apps/${appID}/comments`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: itemId,\r\n      username: name,\r\n      comment,\r\n    }),\r\n  });\r\n\r\n  if (!response.ok) {\r\n    throw new Error('Failed to submit comment');\r\n  }\r\n};\r\n\r\nconst getComments = async (appID, itemId) => {\r\n  const response = await fetch(`${involvementAPIBaseURL}apps/${appID}/comments?item_id=${itemId}`, {\r\n    method: 'GET',\r\n  });\r\n\r\n  if (response.ok) {\r\n    const data = await response.json();\r\n\r\n    // Add the comment date to each comment object\r\n    const commentsWithDate = data.map((comment) => {\r\n      const date = new Date(comment.creation_date).toLocaleDateString();\r\n      return {\r\n        ...comment,\r\n        date,\r\n      };\r\n    });\r\n\r\n    return commentsWithDate;\r\n  }\r\n\r\n  return [];\r\n};\r\n\r\n// List of meal\r\nconst getRegionWiseMeal = async () => {\r\n  const response = await fetch(`${baseURL}filter.php?a=Indian`);\r\n  const data = await response.json();\r\n  const { meals } = data;\r\n\r\n  // Fetch additional details for each meal\r\n  const mealsWithDetails = await Promise.all(\r\n    meals.map(async (meal) => {\r\n      const detailedMeal = await getOneMeal(meal.idMeal);\r\n      return {\r\n        ...meal,\r\n        strCategory: detailedMeal[0].strCategory,\r\n        strArea: detailedMeal[0].strArea,\r\n      };\r\n    }),\r\n  );\r\n\r\n  return mealsWithDetails;\r\n};\r\n\r\nconst addLike = async (appId, itemId) => {\r\n  try {\r\n    await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({ item_id: itemId }),\r\n    });\r\n    return undefined;\r\n  } catch (error) {\r\n    return `Error adding like:${error}`;\r\n  }\r\n};\r\n\r\n// Export the base URL for the meal API\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\r\n\r\nconst displayCommentCount = async (appID, mealID) => {\r\n  const comments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(appID, mealID);\r\n  const commentCount = comments.length;\r\n  return commentCount;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentCount);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/comment-counter.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = () => {\r\n  const itemList = document.getElementById('item-list');\r\n  return itemList.children.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/itemList.js":
/*!*********************************!*\
  !*** ./src/modules/itemList.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.js */ \"./src/modules/loader.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-counter.js */ \"./src/modules/comment-counter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Retrieve the app ID\r\nconst appID = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.createApp)();\r\n\r\nconst updateHomepageCounters = () => {\r\n  const itemsCounter = document.getElementById('items-counter');\r\n  itemsCounter.textContent = `( ${(0,_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()} )`;\r\n};\r\n\r\nconst displayComments = (comments) => {\r\n  const commentsContainer = document.getElementById('commentsContainer');\r\n  commentsContainer.innerHTML = '';\r\n\r\n  if (comments.length === 0) {\r\n    commentsContainer.innerHTML = '<p>No comments available.</p>';\r\n  } else {\r\n    comments.forEach((comment) => {\r\n      const commentElement = `\r\n        <div class=\"comment\">\r\n          <h4>${comment.username}</h4>\r\n          <p>:</p>\r\n          <p> \"${comment.comment}\"</p>\r\n          <p> ${comment.date}</p>\r\n          </div>`;\r\n      commentsContainer.innerHTML += commentElement;\r\n    });\r\n  }\r\n};\r\n\r\nconst populateItemList = async () => {\r\n  const meals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getRegionWiseMeal)();\r\n  const itemList = document.getElementById('item-list');\r\n\r\n  // Clear existing items\r\n  itemList.innerHTML = '';\r\n\r\n  // Iterate through the meals and create card elements for each\r\n  meals.forEach(async (meal) => {\r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n\r\n    const image = document.createElement('img');\r\n    image.src = meal.strMealThumb;\r\n    card.appendChild(image);\r\n\r\n    const cardHeader = document.createElement('div');\r\n    cardHeader.classList.add('card-header');\r\n    card.appendChild(cardHeader);\r\n\r\n    const name = document.createElement('h3');\r\n    name.textContent = meal.strMeal;\r\n    cardHeader.appendChild(name);\r\n\r\n    const likes = document.createElement('span');\r\n    likes.innerHTML = '<i class=\"fa-regular fa-heart\"></i>';\r\n    cardHeader.appendChild(likes);\r\n\r\n    const likeCountDiv = document.createElement('div');\r\n    likeCountDiv.classList.add('card-label');\r\n\r\n    const likeCount = document.createElement('label');\r\n    likeCount.classList.add('label');\r\n    const count = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)(appID, meal.idMeal);\r\n    likeCount.innerHTML = `${count} likes`;\r\n    likeCountDiv.appendChild(likeCount);\r\n    card.appendChild(likeCountDiv);\r\n\r\n    // Add like function\r\n    likes.addEventListener('click', async () => {\r\n      (0,_loader_js__WEBPACK_IMPORTED_MODULE_1__.showLoader)(likeCountDiv, likeCount); // Show the loader\r\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(appID, meal.idMeal);\r\n      const countLabel = card.querySelector('.label'); // Find the like count label within the card\r\n      if (countLabel) {\r\n        const count = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)(appID, meal.idMeal);\r\n        (0,_loader_js__WEBPACK_IMPORTED_MODULE_1__.hideLoader)(likeCountDiv, countLabel); // Hide the loader\r\n        countLabel.innerHTML = `${count} likes`; // Update the like count label\r\n      }\r\n    });\r\n\r\n    const commentButton = document.createElement('button');\r\n    commentButton.textContent = 'Comments';\r\n    commentButton.id = 'Comments';\r\n    commentButton.setAttribute('data-btn', `${meal.idMeal}`);\r\n    card.appendChild(commentButton);\r\n\r\n    const openModal = async (meal) => {\r\n      const modal = document.getElementById('myModal');\r\n      const modalItemDetails = document.getElementById('modal-item-details');\r\n\r\n      // Retrieve additional item details (e.g., comments) based on the meal ID\r\n      try {\r\n        const comments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(appID, meal.idMeal);\r\n\r\n        // Populate the modal with the target item's information and comments\r\n        modalItemDetails.innerHTML = `\r\n          <h3 class=\"modal-title\">${meal.strMeal}</h3>\r\n          <img class=\"modal-image\" src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\" />\r\n          <p>Category: ${meal.strCategory}</p>\r\n          <p>Area: ${meal.strArea}</p>\r\n          <h3 class=\"comments-title\">Comments</h3>\r\n          <div class=\"commentSection\">\r\n            <div id=\"commentsContainer\">\r\n            </div>\r\n            <form class=\"form-elements\">\r\n              <input type=\"text\" id=\"nameInput\" placeholder=\"Your Name\" required>\r\n              <input type=\"text\" id=\"commentInput\" placeholder=\"Your Comment\" required>\r\n              <button type=\"submit\" id=\"submitCommentButton\">Submit Comment</button>\r\n            </form>\r\n          </div>\r\n        `;\r\n\r\n        // Display existing comments\r\n        displayComments(comments);\r\n      } catch (error) {\r\n        console.error('Failed to retrieve comments:', error);\r\n      }\r\n\r\n      const updateCommentCount = async () => {\r\n        const commentCount = await (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appID, meal.idMeal);\r\n        const commentsTitle = document.querySelector('.comments-title');\r\n        if (commentsTitle) {\r\n          commentsTitle.textContent = `Comments (${commentCount})`;\r\n        }\r\n      };\r\n\r\n      const submitButton = document.getElementById('submitCommentButton');\r\n      submitButton.addEventListener('click', async (event) => {\r\n        event.preventDefault(); // Prevent form submission and page reload\r\n\r\n        const nameInput = document.getElementById('nameInput');\r\n        const commentInput = document.getElementById('commentInput');\r\n        const name = nameInput.value;\r\n        const comment = commentInput.value;\r\n\r\n        try {\r\n          // Submit the comment\r\n          await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.submitComment)(appID, meal.idMeal, name, comment);\r\n          // Retrieve updated comments and display them\r\n          const updatedComments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(appID, meal.idMeal);\r\n          displayComments(updatedComments);\r\n          // Clear input fields\r\n          nameInput.value = '';\r\n          commentInput.value = '';\r\n        } catch (error) {\r\n          console.error('Failed to submit comment:', error);\r\n        }\r\n        await updateCommentCount();\r\n      });\r\n\r\n      modal.style.display = 'block';\r\n      // Display comment count\r\n      await updateCommentCount();\r\n    };\r\n\r\n    commentButton.addEventListener('click', () => {\r\n      openModal(meal);\r\n    });\r\n    card.appendChild(commentButton);\r\n\r\n    itemList.appendChild(card);\r\n\r\n    // Update the homepage counters after each meal card is created\r\n    updateHomepageCounters();\r\n  });\r\n};\r\n\r\n// Close the modal when the close button or outside modal area is clicked\r\nwindow.addEventListener('click', (event) => {\r\n  const modal = document.getElementById('myModal');\r\n  if (event.target === modal || event.target.classList.contains('close')) {\r\n    modal.style.display = 'none';\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateItemList);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/itemList.js?");

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideLoader: () => (/* binding */ hideLoader),\n/* harmony export */   showLoader: () => (/* binding */ showLoader)\n/* harmony export */ });\nconst showLoader = (element, labelCount) => {\r\n  labelCount.style.display = 'none';\r\n  const loader = document.createElement('div');\r\n  loader.classList.add('loader');\r\n  element.appendChild(loader);\r\n};\r\n\r\nconst hideLoader = (element, labelCount) => {\r\n  const loader = element.querySelector('.loader');\r\n  if (loader) {\r\n    element.removeChild(loader);\r\n    labelCount.style.display = 'flex';\r\n  }\r\n};\n\n//# sourceURL=webpack://setup-webpack/./src/modules/loader.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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