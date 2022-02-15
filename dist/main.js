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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalHeader */ \"./src/modules/modalHeader.js\");\n/* harmony import */ var _modules_modalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalService */ \"./src/modules/modalService.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_modalHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modalService__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('28 Feb 2022')\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modalHeader.js":
/*!************************************!*\
  !*** ./src/modules/modalHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalHeader = () => {\r\n  const modal = document.querySelector(\".header-modal\");\r\n  const btns = document.querySelectorAll(\"a[href^='#callback']\");\r\n  const modalContent = document.querySelector(\".header-modal--opened\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n\r\n\r\n  //Условие\r\n  btns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      if (window.outerWidth > 768) {\r\n        modal.style.display = \"block\";\r\n        overlay.style.display = \"block\";\r\n        modalContent.animate(\r\n            [\r\n              {\r\n                opacity: 0,\r\n                transform: \"translate3D(0, -300px, 0)\",\r\n              },\r\n              {\r\n                opacity: 1,\r\n              },\r\n            ],\r\n            {\r\n              duration: 500,\r\n            }\r\n          );\r\n      } else {\r\n        modal.style.display = \"block\";\r\n      }\r\n    });\r\n  });\r\n\r\n  // Событие по клику\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (/* !e.target.closest(\".overlay\") ||*/ e.target.classList.contains(\"header-modal__close\")) {\r\n        modal.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHeader);\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalHeader.js?");

/***/ }),

/***/ "./src/modules/modalService.js":
/*!*************************************!*\
  !*** ./src/modules/modalService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalHeader = () => {\r\n    const modal = document.querySelector(\".services-modal\");\r\n    const btns = document.querySelectorAll(\"a[href^='#application']\");\r\n    const modalContent = document.querySelector(\".services-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n  \r\n  \r\n    //Условие\r\n    btns.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        if (window.outerWidth > 768) {\r\n          modal.style.display = \"block\";\r\n          overlay.style.display = \"block\";\r\n          modalContent.animate(\r\n              [\r\n                {\r\n                  opacity: 0,\r\n                  transform: \"translate3D(0, -300px, 0)\",\r\n                },\r\n                {\r\n                  opacity: 1,\r\n                },\r\n              ],\r\n              {\r\n                duration: 500,\r\n              }\r\n            );\r\n        } else {\r\n          modal.style.display = \"block\";\r\n        }\r\n      });\r\n    });\r\n  \r\n    // Событие по клику\r\n    modal.addEventListener(\"click\", (e) => {\r\n      if (/* !e.target.closest(\".overlay\") ||*/ e.target.classList.contains(\"services-modal__close\")) {\r\n          modal.style.display = \"none\";\r\n          overlay.style.display = \"none\";\r\n      }\r\n    });\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHeader);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalService.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const btnScroll = document.querySelector('.smooth-scroll');\r\n\r\n    const hiddenScroll = () => {\r\n        btnScroll.style.display = 'none';\r\n    }\r\n    \r\n    hiddenScroll();\r\n    \r\n    window.onscroll = () => {\r\n        if (window.pageYOffset > 600) {\r\n            btnScroll.style.display = 'block'\r\n        } else {\r\n            btnScroll.style.display = 'none'\r\n        }\r\n    };\r\n\r\n    \r\n\r\n    btnScroll.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = btnScroll.getAttribute('href');\r\n\r\n\r\n    document.querySelector(id).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    });\r\n\r\n    return id\r\n        \r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n        const sliderBlock = document.querySelector(\".benefits-arrows\");\r\n        const slides = document.querySelectorAll(\".benefits__item\");\r\n\r\n        \r\n        const slideActive = () => {\r\n            for(const item of slides){\r\n                item.style.display = 'block'\r\n            }\r\n        }\r\n      \r\n        let currentSlide = 0;\r\n      \r\n        const prevSlide = (elems, index) => {\r\n          elems[index].style.display = 'none';\r\n        };\r\n      \r\n        const nextSlide = (elems, index) => {\r\n          elems[index].style.display = 'block';\r\n        };\r\n      \r\n        sliderBlock.addEventListener(\"click\", (e) => {\r\n          e.preventDefault();\r\n\r\n          if (!e.target.matches(\".benefits__arrow\")) {\r\n            return;\r\n          }\r\n      \r\n          prevSlide(slides, currentSlide, slideActive);\r\n      \r\n          if (e.target.matches(\".benefits__arrow--right\")) {\r\n            currentSlide++;\r\n          } else if (e.target.matches(\".benefits__arrow--left\")) {\r\n            currentSlide--;\r\n          }\r\n      \r\n          if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n          }\r\n      \r\n          if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n          }\r\n      \r\n          nextSlide(slides, currentSlide, slideActive);\r\n        });\r\n      };\r\n      \r\n      \r\n      \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Таймер\r\nconst timer = (deadline) => {\r\n    // Объявление переменных таймера\r\n    let timerDays = document.querySelectorAll(\".count_1 span\");\r\n    let timerHours = document.querySelectorAll(\".count_2 span\");\r\n    let timerMinutes = document.querySelectorAll(\".count_3 span\");\r\n    let timerSeconds = document.querySelectorAll(\".count_4 span\");\r\n     \r\n      // Отсчёт таймера\r\n      const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n    \r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n      };\r\n  \r\n      // Подстановка нуля для таймера\r\n      const addZero = (elem) => {\r\n        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }\r\n      };\r\n    \r\n      // Присвоение значений елементам для каждого таймера\r\n      const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerDays.forEach(item => {item.textContent = addZero(getTime.days)});\r\n        timerHours.forEach(item => {item.textContent = addZero(getTime.hours)});\r\n        timerMinutes.forEach(item => {item.textContent = addZero(getTime.minutes)});\r\n        timerSeconds.forEach(item => {item.textContent = addZero(getTime.seconds)});\r\n      };\r\n      // Время вышло\r\n      setTimeout(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n          updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n          clearTimeout(updateClock);\r\n        }\r\n      });\r\n      // Обнавление интервала\r\n      setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n          updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n          clearInterval(updateClock);\r\n        }\r\n      }, 1000);\r\n    };\r\n    \r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

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