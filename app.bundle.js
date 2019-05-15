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
/******/ 	return __webpack_require__(__webpack_require__.s = "./portfolio/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./portfolio/README.md":
/*!*****************************!*\
  !*** ./portfolio/README.md ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "README.md";

/***/ }),

/***/ "./portfolio/index.js":
/*!****************************!*\
  !*** ./portfolio/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./README.md */ "./portfolio/README.md");
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./portfolio/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_assets_profile_pic_thumb_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/assets/profile_pic_thumb.jpg */ "./portfolio/theme/assets/profile_pic_thumb.jpg");
/* harmony import */ var _theme_assets_profile_pic_thumb_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_assets_profile_pic_thumb_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_assets_cover_img_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/assets/cover_img.jpg */ "./portfolio/theme/assets/cover_img.jpg");
/* harmony import */ var _theme_assets_cover_img_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_assets_cover_img_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_assets_cover_img_01_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/assets/cover_img_01.jpg */ "./portfolio/theme/assets/cover_img_01.jpg");
/* harmony import */ var _theme_assets_cover_img_01_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_assets_cover_img_01_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_assets_cover_img_02_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/assets/cover_img_02.jpg */ "./portfolio/theme/assets/cover_img_02.jpg");
/* harmony import */ var _theme_assets_cover_img_02_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme_assets_cover_img_02_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme_assets_cover_img_03_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/assets/cover_img_03.jpg */ "./portfolio/theme/assets/cover_img_03.jpg");
/* harmony import */ var _theme_assets_cover_img_03_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_assets_cover_img_03_jpg__WEBPACK_IMPORTED_MODULE_6__);
// import _ from 'lodash';
// import printMe from './print'
// function component() {
//   element.innerHTML = _.join(['We', 'are', 'huge!'], ' ');
//   element.classList.add('hello');
//   printMe();
//   return element;
// }
// const __wrapper = document.querySelector('.wrapper');
// __wrapper.appendChild(component());
// console.log('From index.js', __wrapper);







var diamondButtons = document.querySelectorAll('button.diamond');
diamondButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log('Below this.childNodes');
    console.log(this.childNodes);
    console.log('Below each button');

    switch (button.childNodes[3].id) {
      case 'github-icon':
        window.open("https://github.com/faelplg", '_blank');
        break;

      case 'medium-icon':
        window.open("https://medium.com/@faelplg", '_blank');
        break;

      case 'codepen-icon':
        window.open("https://codepen.io/faelplg/", '_blank');
        break;

      case 'stackblitz-icon':
        window.open("https://stackblitz.com/@faelplg", '_blank');
        break;

      default:
    }
  }, false);
});

/***/ }),

/***/ "./portfolio/style.css":
/*!*****************************!*\
  !*** ./portfolio/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./portfolio/theme/assets/cover_img.jpg":
/*!**********************************************!*\
  !*** ./portfolio/theme/assets/cover_img.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "theme/assets/cover_img.jpg";

/***/ }),

/***/ "./portfolio/theme/assets/cover_img_01.jpg":
/*!*************************************************!*\
  !*** ./portfolio/theme/assets/cover_img_01.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "theme/assets/cover_img_01.jpg";

/***/ }),

/***/ "./portfolio/theme/assets/cover_img_02.jpg":
/*!*************************************************!*\
  !*** ./portfolio/theme/assets/cover_img_02.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "theme/assets/cover_img_02.jpg";

/***/ }),

/***/ "./portfolio/theme/assets/cover_img_03.jpg":
/*!*************************************************!*\
  !*** ./portfolio/theme/assets/cover_img_03.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "theme/assets/cover_img_03.jpg";

/***/ }),

/***/ "./portfolio/theme/assets/profile_pic_thumb.jpg":
/*!******************************************************!*\
  !*** ./portfolio/theme/assets/profile_pic_thumb.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "theme/assets/profile_pic_thumb.jpg";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcG9ydGZvbGlvL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcG9ydGZvbGlvL3N0eWxlLmNzcz8yZDBiIiwid2VicGFjazovLy8uL3BvcnRmb2xpby90aGVtZS9hc3NldHMvY292ZXJfaW1nLmpwZyIsIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vdGhlbWUvYXNzZXRzL2NvdmVyX2ltZ18wMS5qcGciLCJ3ZWJwYWNrOi8vLy4vcG9ydGZvbGlvL3RoZW1lL2Fzc2V0cy9jb3Zlcl9pbWdfMDIuanBnIiwid2VicGFjazovLy8uL3BvcnRmb2xpby90aGVtZS9hc3NldHMvY292ZXJfaW1nXzAzLmpwZyIsIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vdGhlbWUvYXNzZXRzL3Byb2ZpbGVfcGljX3RodW1iLmpwZyJdLCJuYW1lcyI6WyJkaWFtb25kQnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImNoaWxkTm9kZXMiLCJpZCIsIndpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIscUJBQXVCLGU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQXZCO0FBQ0FGLGNBQWMsQ0FBQ0csT0FBZixDQUF1QixVQUFBQyxNQUFNLEVBQUk7QUFDL0JBLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVTtBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsVUFBakI7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0EsWUFBUUgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLENBQWxCLEVBQXFCQyxFQUE3QjtBQUNFLFdBQUssYUFBTDtBQUNFQyxjQUFNLENBQUNDLElBQVAsK0JBQXlDLFFBQXpDO0FBQ0E7O0FBQ0YsV0FBSyxhQUFMO0FBQ0VELGNBQU0sQ0FBQ0MsSUFBUCxnQ0FBMEMsUUFBMUM7QUFDQTs7QUFDRixXQUFLLGNBQUw7QUFDRUQsY0FBTSxDQUFDQyxJQUFQLGdDQUEwQyxRQUExQztBQUNBOztBQUNGLFdBQUssaUJBQUw7QUFDRUQsY0FBTSxDQUFDQyxJQUFQLG9DQUE4QyxRQUE5QztBQUNBOztBQUNGO0FBYkY7QUFnQkQsR0FwQkQsRUFvQkcsS0FwQkg7QUFxQkQsQ0F0QkQsRTs7Ozs7Ozs7Ozs7QUNwQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QixnQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixtQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixtQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixtQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1Qix3QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wb3J0Zm9saW8vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJSRUFETUUubWRcIjsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy8gaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludCdcbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydXZScsICdhcmUnLCAnaHVnZSEnXSwgJyAnKTtcbi8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuLy8gICBwcmludE1lKCk7XG4vLyAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuLy8gY29uc3QgX193cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbi8vIF9fd3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4vLyBjb25zb2xlLmxvZygnRnJvbSBpbmRleC5qcycsIF9fd3JhcHBlcik7XG5pbXBvcnQgcmVhZG1lIGZyb20gJy4vUkVBRE1FLm1kJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHByb2ZpbGVJbWcgZnJvbSAnLi90aGVtZS9hc3NldHMvcHJvZmlsZV9waWNfdGh1bWIuanBnJztcbmltcG9ydCBjb3ZlckltZyBmcm9tICcuL3RoZW1lL2Fzc2V0cy9jb3Zlcl9pbWcuanBnJztcbmltcG9ydCBjb3ZlckltZzAxIGZyb20gJy4vdGhlbWUvYXNzZXRzL2NvdmVyX2ltZ18wMS5qcGcnO1xuaW1wb3J0IGNvdmVySW1nMDIgZnJvbSAnLi90aGVtZS9hc3NldHMvY292ZXJfaW1nXzAyLmpwZyc7XG5pbXBvcnQgY292ZXJJbWcwMyBmcm9tICcuL3RoZW1lL2Fzc2V0cy9jb3Zlcl9pbWdfMDMuanBnJztcblxuY29uc3QgZGlhbW9uZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uZGlhbW9uZCcpO1xuZGlhbW9uZEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ0JlbG93IHRoaXMuY2hpbGROb2RlcycpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgY29uc29sZS5sb2coJ0JlbG93IGVhY2ggYnV0dG9uJyk7XG4gICAgc3dpdGNoIChidXR0b24uY2hpbGROb2Rlc1szXS5pZCkge1xuICAgICAgY2FzZSAnZ2l0aHViLWljb24nOlxuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9naXRodWIuY29tL2ZhZWxwbGdgLCdfYmxhbmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0taWNvbic6XG4gICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL21lZGl1bS5jb20vQGZhZWxwbGdgLCdfYmxhbmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2RlcGVuLWljb24nOlxuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9jb2RlcGVuLmlvL2ZhZWxwbGcvYCwnX2JsYW5rJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RhY2tibGl0ei1pY29uJzpcbiAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vc3RhY2tibGl0ei5jb20vQGZhZWxwbGdgLCdfYmxhbmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuXG4gICAgfVxuICB9LCBmYWxzZSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInRoZW1lL2Fzc2V0cy9jb3Zlcl9pbWcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidGhlbWUvYXNzZXRzL2NvdmVyX2ltZ18wMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ0aGVtZS9hc3NldHMvY292ZXJfaW1nXzAyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInRoZW1lL2Fzc2V0cy9jb3Zlcl9pbWdfMDMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidGhlbWUvYXNzZXRzL3Byb2ZpbGVfcGljX3RodW1iLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=