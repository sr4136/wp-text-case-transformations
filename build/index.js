/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/string-prototypes.js":
/*!**********************************!*\
  !*** ./src/string-prototypes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const titleCapsExceptions = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "is", "it", "no", "not", "of", "on", "or", "that", "the", "to", "with"];

/**
 * Converts a string to title case.
 *
 * @returns {string} The string in title case.
 */
function toTitleCaps() {
  return this.toLowerCase().split(" ").map((word, index) => {
    if (index === 0 || !titleCapsExceptions.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  }).join(" ");
}

// Export the function
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toTitleCaps);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _string_prototypes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string-prototypes.js */ "./src/string-prototypes.js");





// Add the function to the String prototype
String.prototype.toTitleCaps = _string_prototypes_js__WEBPACK_IMPORTED_MODULE_3__["default"];
const transformText = (value, event) => {
  //   console.log("RUNS");
  //   console.log(value);
  //   console.log(event);

  // Get the block's ID.
  const selectedBlockClientId = wp.data.select("core/block-editor").getSelectedBlockClientId();

  // Get the transform type.
  const transformType = event.target.dataset.srTtt;

  // Extract the substring to be transformed.
  let transformedString = value.text.substring(value.start, value.end);
  if ("titlecaps" === transformType) {
    transformedString = transformedString.toTitleCaps();
  }
  if ("uppercase" === transformType) {
    transformedString = transformedString.toUpperCase();
  }
  if ("lowercase" === transformType) {
    transformedString = transformedString.toLowerCase();
  }

  // Construct the new text with the transformed substring.
  const newText = value.text.substring(0, value.start) + transformedString + value.text.substring(value.end);

  // Run the update.
  wp.data.dispatch("core/block-editor").updateBlockAttributes(selectedBlockClientId, {
    content: newText
  });
};
const TextTransformButton = ({
  isActive,
  onChange,
  value
}) => {
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      label: "Text Transformations",
      icon: "star-half",
      onClick: onToggle,
      "aria-expanded": isOpen
    }),
    renderContent: () => /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      icon: "editor-ltr",
      "data-sr-ttt": "titlecaps",
      title: "Title Caps",
      text: "Title Caps",
      onClick: event => transformText(value, event),
      isActive: isActive
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      icon: "arrow-up-alt",
      "data-sr-ttt": "uppercase",
      title: "Uppercase",
      text: "Uppercase",
      onClick: event => transformText(value, event),
      isActive: isActive
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      icon: "arrow-down-alt",
      "data-sr-ttt": "lowercase",
      title: "Lowercase",
      text: "Lowercase",
      onClick: event => transformText(value, event),
      isActive: isActive
    }))
  })));
};
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.registerFormatType)("sr-wp-tct/blank-format", {
  title: "Text Transforms",
  tagName: "sr-wp-tct",
  className: null,
  edit: TextTransformButton
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map