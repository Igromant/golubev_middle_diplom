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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/valid */ \"./src/modules/valid.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/comments */ \"./src/modules/comments.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('28 Feb 2022')\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_valid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    idForm: ('#formActionOrder1, #formActionOrder2, #formModalAction, #formServModalAction'),\r\n    someElem: [\r\n        {\r\n            type: 'input',\r\n            id: 'calc-total'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_comments__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcBlock = document.getElementById(\"calc\");\r\n    const calcTypeMat = document.getElementById(\"calc-type-material\");\r\n    const calcType = document.getElementById(\"calc-type\");\r\n    const calcSquare = document.getElementById(\"calc-input\");\r\n    const total = document.getElementById(\"calc-total\");\r\n  \r\n    const countCalculator = () => {\r\n      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n      const calcTypeMatValue = +calcTypeMat.options[calcTypeMat.selectedIndex].value;\r\n      const calcSquareValue = calcSquare.value;\r\n  \r\n      let totalValue = 0;\r\n  \r\n      if (calcType.value && calcTypeMatValue && calcSquare.value) {\r\n        totalValue = calcTypeValue * calcTypeMatValue * calcSquareValue;\r\n      } else {\r\n        totalValue = 0;\r\n      }\r\n     \r\n      total.placeholder = Math.round(totalValue) + ' ' + 'Руб.'\r\n    };\r\n  \r\n    if (calcBlock !== null) {\r\n      calcBlock.addEventListener(\"input\", (e) => {\r\n      if (\r\n        e.target === calcType ||\r\n        e.target === calcTypeMat ||\r\n        e.target === calcSquare\r\n      ) {\r\n        countCalculator();\r\n      }\r\n    });\r\n    }\r\n    \r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst comments = () => {\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) {\r\n        timeFraction = 1;\r\n      }\r\n      let progress = timing(timeFraction);\r\n      draw(progress);\r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n    });\r\n  };\r\n  \r\n  \n\n//# sourceURL=webpack://middle_diplom/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\r\n\r\nconst modal = () => {\r\n  const modalHeader = document.querySelector(\".header-modal--opened\");\r\n  const modalService = document.querySelector(\".services-modal--opened\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n\r\n  const certificate = () => {\r\n    const modalCertificate = document.createElement('div');\r\n    modalCertificate.classList.add('certificate-modal', 'certificate-modal--opened');\r\n    modalCertificate.style.cssText='max-width: 33%;'\r\n    document.body.append(modalCertificate);\r\n\r\n    const btnClose = document.createElement('span');\r\n    btnClose.innerHTML = \"x\"\r\n    btnClose.classList.add('certificate-modal__close');\r\n    modalCertificate.append(btnClose);\r\n\r\n    const documentImg = document.querySelector('.sertificate-document .img-responsive').cloneNode(true);\r\n    documentImg.src = \"images/documents/original/document4.jpg\"\r\n    modalCertificate.append(documentImg)\r\n\r\n    document.querySelectorAll(\".sertificate-document\").forEach((btn) => {\r\n      btn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n      });\r\n    });\r\n\r\n    btnClose.addEventListener('mouseenter', (e) => { \r\n      e.target.style.transition = '1s';\r\n      e.target.style.background = '#5d5d5d'; // Выставляем цвет\r\n    });\r\n    \r\n    btnClose.addEventListener('mouseleave', (e) => {\r\n      e.target.style.transition = '1s';\r\n      e.target.style.background = '#4f686e'; \r\n    });\r\n  };\r\n\r\n  certificate();\r\n\r\n  const modalCertificate = document.querySelector(\".certificate-modal--opened\")\r\n\r\n  const modalOpen = (modal) => {\r\n    if (window.outerWidth > 768) {\r\n      modal.style.display = \"block\";\r\n      overlay.style.display = \"block\";\r\n      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 500,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          modal.style.opacity = progress;\r\n          modal.style.top = 50 * progress + \"%\";\r\n        },\r\n      });\r\n    } else {\r\n      modal.style.display = \"block\";\r\n      overlay.style.display = \"block\";\r\n    }\r\n  }\r\n\r\n  const modalClose = (modal) => {\r\n    modal.style.display = \"none\";\r\n    overlay.style.display = \"none\";\r\n  }\r\n\r\n  const btnFun = (modal, btnOpen, btn) => {\r\n    const btns = document.querySelectorAll(btnOpen);\r\n    const btnClose = document.querySelector(btn);\r\n\r\n    btns.forEach(btn => {\r\n      btn.addEventListener('click', (e) => {\r\n          modalOpen(modal);\r\n      });\r\n    });\r\n\r\n    btnClose.addEventListener(\"click\", () => {\r\n      modalClose(modal)\r\n    });\r\n\r\n    overlay.addEventListener(\"click\", () => {\r\n      modalClose(modal)\r\n  });\r\n\r\n  };\r\n\r\n  btnFun(modalHeader, \"a[href^='#callback']\", \".header-modal__close\");\r\n  btnFun(modalService, \"a[href^='#application']\", \".services-modal__close\");\r\n  btnFun(modalCertificate, \".sertificate-document\", \".certificate-modal__close\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const btnScroll = document.querySelector('.smooth-scroll');\r\n    const section = document.querySelector(\".section\")\r\n    let num = 0 \r\n\r\n    const hiddenScroll = () => {btnScroll.style.display = 'none';}\r\n    hiddenScroll();\r\n    \r\n    window.onscroll = () => {\r\n        if (window.pageYOffset < section.scrollHeight) {\r\n            btnScroll.style.display = 'none'\r\n            num++\r\n        } else if (window.pageYOffset > section.scrollHeight && num > 0){\r\n            btnScroll.style.display = 'block'\r\n        }\r\n    };\r\n    \r\n    btnScroll.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = btnScroll.getAttribute('href');\r\n\r\n    document.querySelector(id).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    });\r\n\r\n    return id\r\n        \r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ idForm , someElem = [] }) => {\r\n    const forms = document.querySelectorAll(idForm);\r\n\r\n    const validate = (list) => {\r\n        let success = true\r\n        list.forEach(input => {\r\n            if (input.value === \"\") {\r\n                success = false\r\n            };\r\n        });\r\n        return success\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    };\r\n    \r\n    forms.forEach(form => form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        try {\r\n            someElem.forEach(elem => {\r\n                const element = document.getElementById(elem.id)\r\n    \r\n                if(elem.type === 'input') {\r\n                    formBody[elem.id] = element.placeholder\r\n                }\r\n            })\r\n        } catch (error) {}\r\n\r\n        if(validate(formElements)) {\r\n            sendData(formBody)\r\n        } else {\r\n            alert('Данные не валидны')\r\n        }\r\n\r\n        \r\n        \r\n    }))\r\n}\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\r\n\r\nconst slider = () => {\r\n            const sliderBlocks = document.querySelectorAll('.slider');\r\n            if (window.innerWidth < 576) {\r\n                sliderBlocks.forEach((sliderBlock) => {\r\n            \r\n                    document.querySelector('.benefits-wrap').style.justifyContent = \"center\"\r\n            \r\n                    const allSlidesBlocks = document.querySelectorAll(`.${sliderBlock.id}__item`);\r\n                    const slides = Array.from(allSlidesBlocks)\r\n                    let currentSlide = 0;\r\n                    \r\n          \r\n          \r\n                    for (let i = 1; i < slides.length; i++) {\r\n                        if (slides[i].classList.contains(\"benefits__item\")) {\r\n                                    slides[i].classList.remove('item__block')\r\n                                } else {\r\n                                    slides[i].classList.remove('item__block')\r\n                                }\r\n                    }\r\n            \r\n                  const prevSlide = (elems, index, strClass) => {\r\n                      elems[index].classList.remove(strClass)\r\n                      ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 800,\r\n                        timing(timeFraction) {\r\n                          return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            elems[index].style.opacity = progress;\r\n                        },\r\n                      });\r\n                  };\r\n          \r\n                  const nextSlide = (elems, index, strClass) => {\r\n                      elems[index].classList.add(strClass)\r\n                      ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 800,\r\n                        timing(timeFraction) {\r\n                          return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            elems[index].style.opacity = progress;\r\n                        },\r\n                      });\r\n                  };\r\n            \r\n                    sliderBlock.addEventListener('click', (e) => {\r\n                        e.preventDefault(e)\r\n                \r\n                          if (!e.target.closest('.arrows')) {\r\n                              return\r\n                          }\r\n                         \r\n                          prevSlide(slides, currentSlide, 'item__block')\r\n                \r\n                          if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {\r\n                              currentSlide++;\r\n                          } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {\r\n                              currentSlide--;\r\n                          }\r\n          \r\n                          if (currentSlide >= slides.length) {\r\n                              currentSlide = 0\r\n                          }\r\n          \r\n                          if (currentSlide < 0) {\r\n                              currentSlide = slides.length - 1\r\n                          }        \r\n                          \r\n                          nextSlide(slides, currentSlide, 'item__block')\r\n                      })\r\n                })\r\n              } else {\r\n                const getToSlide = (sliderBlock) => {\r\n                    const allSlides = document.querySelectorAll(`.${sliderBlock.id}__item`);\r\n                        let slides = []\r\n                        let slide1 = []\r\n                        let slide2 = []\r\n                    \r\n          \r\n                    allSlides.forEach(slide => {\r\n                        if (slide.classList.contains('item__block')) {\r\n                            slide1.push(slide)\r\n                        } else slide2.push(slide)\r\n                    })\r\n                    slides.push(slide1)\r\n                    slides.push(slide2)\r\n                    return {slides}\r\n                }\r\n          \r\n                const prevSlide = (slides, index, strClass) => {\r\n                    slides[index].forEach(slide => {\r\n                      slide.classList.remove(strClass)\r\n                      ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                          duration: 800,\r\n                          timing(timeFraction) {\r\n                            return timeFraction;\r\n                          },\r\n                          draw(progress) {\r\n                              slide.style.opacity = progress;\r\n                          },\r\n                        });\r\n                    })\r\n                }\r\n          \r\n                const nextSlide = (slides, index, strClass) => {\r\n                    slides[index].forEach(slide => {\r\n                        slide.classList.add(strClass)\r\n                        ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                          duration: 800,\r\n                          timing(timeFraction) {\r\n                            return timeFraction;\r\n                          },\r\n                          draw(progress) {\r\n                              slide.style.opacity = progress;\r\n                          },\r\n                        });\r\n                    })\r\n                }\r\n          \r\n                sliderBlocks.forEach((sliderBlock) => {\r\n                    sliderBlock.addEventListener('click', (e) => {\r\n                      e.preventDefault(e)\r\n                    \r\n                        let slides = getToSlide(sliderBlock).slides\r\n        \r\n                        let currentSlide = 0\r\n                    \r\n                        if (!e.target.closest('.arrows')) {\r\n                            return\r\n                        }\r\n                    \r\n                        prevSlide(slides, currentSlide, 'item__block')\r\n                    \r\n                        if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {\r\n                            currentSlide++;\r\n                        } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {\r\n                            currentSlide--;\r\n                        }\r\n                        if (currentSlide >= slides.length) {\r\n                            currentSlide = 0\r\n                        }\r\n                        if (currentSlide < 0) {\r\n                            currentSlide = slides.length - 1\r\n                        }        \r\n        \r\n                        nextSlide(slides, currentSlide, 'item__block')\r\n                    })\r\n                })\r\n              }\r\n}\r\n  \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Таймер\r\nconst timer = (deadline) => {\r\n    // Объявление переменных таймера\r\n    let timerDays = document.querySelectorAll(\".count_1 span\");\r\n    let timerHours = document.querySelectorAll(\".count_2 span\");\r\n    let timerMinutes = document.querySelectorAll(\".count_3 span\");\r\n    let timerSeconds = document.querySelectorAll(\".count_4 span\");\r\n     \r\n      // Отсчёт таймера\r\n      const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n    \r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n      };\r\n  \r\n      // Подстановка нуля для таймера\r\n      const addZero = (elem) => {\r\n        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }\r\n      };\r\n    \r\n      // Присвоение значений елементам для каждого таймера\r\n      const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerDays.forEach(item => {item.textContent = addZero(getTime.days)});\r\n        timerHours.forEach(item => {item.textContent = addZero(getTime.hours)});\r\n        timerMinutes.forEach(item => {item.textContent = addZero(getTime.minutes)});\r\n        timerSeconds.forEach(item => {item.textContent = addZero(getTime.seconds)});\r\n      };\r\n      // Время вышло\r\n      setTimeout(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n          updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n          clearTimeout(updateClock);\r\n        }\r\n      });\r\n      // Обнавление интервала\r\n      setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n          updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n          clearInterval(updateClock);\r\n        }\r\n      }, 1000);\r\n    };\r\n    \r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/valid.js":
/*!******************************!*\
  !*** ./src/modules/valid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n    const yourName = document.querySelectorAll('[name=\"fio\"]');\r\n    const yourPhone = document.querySelectorAll('[name=\"phone\"]');\r\n    const calcBlock = document.getElementById(\"calc\");\r\n    const calcSquareInput = document.getElementById(\"calc-input\");\r\n\r\n      \r\n      yourName.forEach(yourName => {\r\n        yourName.addEventListener(\"input\", (e) => {\r\n            e.preventDefault();\r\n            e.target.value = e.target.value.replace(/[^A-Z-a-z-А-Я-а-я\\s]+$/i, \"\");\r\n          });\r\n      });\r\n      \r\n      yourPhone.forEach(yourPhone => {\r\n            yourPhone.addEventListener(\"input\", (e) => {\r\n                e.preventDefault();\r\n                e.target.value = e.target.value.replace(/([^0-9\\+])/, \"\");\r\n            });\r\n        });\r\n\r\n    if (calcBlock !== null) {\r\n        calcBlock.addEventListener(\"input\", (e) => {\r\n          e.preventDefault();\r\n          calcSquareInput.value = calcSquareInput.value.replace(/\\D+/, \"\");\r\n        });\r\n    }\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/valid.js?");

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