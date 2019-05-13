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







var diamondButtons = document.querySelectorAll('button.new-diamond');
diamondButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    switch (this.childNodes[1].childNodes[3].id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcG9ydGZvbGlvL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcG9ydGZvbGlvL3N0eWxlLmNzcz8yZDBiIiwid2VicGFjazovLy8uL3BvcnRmb2xpby90aGVtZS9hc3NldHMvY292ZXJfaW1nLmpwZyIsIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vdGhlbWUvYXNzZXRzL2NvdmVyX2ltZ18wMS5qcGciLCJ3ZWJwYWNrOi8vLy4vcG9ydGZvbGlvL3RoZW1lL2Fzc2V0cy9jb3Zlcl9pbWdfMDIuanBnIiwid2VicGFjazovLy8uL3BvcnRmb2xpby90aGVtZS9hc3NldHMvY292ZXJfaW1nXzAzLmpwZyIsIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vdGhlbWUvYXNzZXRzL3Byb2ZpbGVfcGljX3RodW1iLmpwZyJdLCJuYW1lcyI6WyJkaWFtb25kQnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGROb2RlcyIsImlkIiwid2luZG93Iiwib3BlbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsZTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixvQkFBMUIsQ0FBdkI7QUFDQUYsY0FBYyxDQUFDRyxPQUFmLENBQXVCLFVBQUFDLE1BQU0sRUFBSTtBQUMvQkEsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFVO0FBQ3pDLFlBQVEsS0FBS0MsVUFBTCxDQUFnQixDQUFoQixFQUFtQkEsVUFBbkIsQ0FBOEIsQ0FBOUIsRUFBaUNDLEVBQXpDO0FBQ0UsV0FBSyxhQUFMO0FBQ0VDLGNBQU0sQ0FBQ0MsSUFBUCwrQkFBeUMsUUFBekM7QUFDQTs7QUFDRixXQUFLLGFBQUw7QUFDRUQsY0FBTSxDQUFDQyxJQUFQLGdDQUEwQyxRQUExQztBQUNBOztBQUNGLFdBQUssY0FBTDtBQUNFRCxjQUFNLENBQUNDLElBQVAsZ0NBQTBDLFFBQTFDO0FBQ0E7O0FBQ0YsV0FBSyxpQkFBTDtBQUNFRCxjQUFNLENBQUNDLElBQVAsb0NBQThDLFFBQTlDO0FBQ0E7O0FBQ0Y7QUFiRjtBQWdCRCxHQWpCRCxFQWlCRyxLQWpCSDtBQWtCRCxDQW5CRCxFOzs7Ozs7Ozs7OztBQ3BCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIscUJBQXVCLGdDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG1DOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG1DOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG1DOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHdDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BvcnRmb2xpby9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlJFQURNRS5tZFwiOyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBpbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50J1xuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ1dlJywgJ2FyZScsICdodWdlISddLCAnICcpO1xuLy8gICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4vLyAgIHByaW50TWUoKTtcbi8vICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyB9XG4vLyBjb25zdCBfX3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuLy8gX193cmFwcGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbi8vIGNvbnNvbGUubG9nKCdGcm9tIGluZGV4LmpzJywgX193cmFwcGVyKTtcbmltcG9ydCByZWFkbWUgZnJvbSAnLi9SRUFETUUubWQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcHJvZmlsZUltZyBmcm9tICcuL3RoZW1lL2Fzc2V0cy9wcm9maWxlX3BpY190aHVtYi5qcGcnO1xuaW1wb3J0IGNvdmVySW1nIGZyb20gJy4vdGhlbWUvYXNzZXRzL2NvdmVyX2ltZy5qcGcnO1xuaW1wb3J0IGNvdmVySW1nMDEgZnJvbSAnLi90aGVtZS9hc3NldHMvY292ZXJfaW1nXzAxLmpwZyc7XG5pbXBvcnQgY292ZXJJbWcwMiBmcm9tICcuL3RoZW1lL2Fzc2V0cy9jb3Zlcl9pbWdfMDIuanBnJztcbmltcG9ydCBjb3ZlckltZzAzIGZyb20gJy4vdGhlbWUvYXNzZXRzL2NvdmVyX2ltZ18wMy5qcGcnO1xuXG5jb25zdCBkaWFtb25kQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5uZXctZGlhbW9uZCcpO1xuZGlhbW9uZEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgc3dpdGNoICh0aGlzLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1szXS5pZCkge1xuICAgICAgY2FzZSAnZ2l0aHViLWljb24nOlxuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9naXRodWIuY29tL2ZhZWxwbGdgLCdfYmxhbmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0taWNvbic6XG4gICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL21lZGl1bS5jb20vQGZhZWxwbGdgLCdfYmxhbmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2RlcGVuLWljb24nOlxuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9jb2RlcGVuLmlvL2ZhZWxwbGcvYCwnX2JsYW5rJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RhY2tibGl0ei1pY29uJzpcbiAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vc3RhY2tibGl0ei5jb20vQGZhZWxwbGdgLCdfYmxhbmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuXG4gICAgfVxuICB9LCBmYWxzZSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInRoZW1lL2Fzc2V0cy9jb3Zlcl9pbWcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidGhlbWUvYXNzZXRzL2NvdmVyX2ltZ18wMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ0aGVtZS9hc3NldHMvY292ZXJfaW1nXzAyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInRoZW1lL2Fzc2V0cy9jb3Zlcl9pbWdfMDMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidGhlbWUvYXNzZXRzL3Byb2ZpbGVfcGljX3RodW1iLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=