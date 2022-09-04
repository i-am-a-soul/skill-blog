# `Webpack`模块化

## `CommonJS`

参考资料：[webpack模块化原理-commonjs](https://segmentfault.com/a/1190000010349749)

```js
// bar.js
'use strict'
module.exports.bar = function () {
    return 1;
}

// index.js
'use strict'
var bar = require('./bar').bar;
function foo () {
    return bar();
}

// webpack.config.js, version of webpack is 5.74.0
var path = require('path');
module.exports = {
    mode: 'development',
    devtool: false,
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    },
};

// dist/index.js
(() => { // webpackBootstrap
  "use strict";
  var __webpack_modules__ = ({
    "./bar.js": ((module) => { // ./bar.js
      module.exports.bar = function () {
        return 1;
      }
    }),
  });

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => { // ./index.js
    var bar = (__webpack_require__(/*! ./bar */ "./bar.js").bar);
    function foo() {
      return bar();
    }
  })();
})();
```

## `ESModule`

参考资料：[webpack模块化原理-ES module](https://segmentfault.com/a/1190000010955254)

```js
// bar.js
export default function bar () {
    return 1;
}

export function foo () {
    return 2;
}

// index.js
import bar, { foo } from './bar.js';
bar();
foo();

// webpack.config.js 同上

// dist/index.js
(() => { // webpackBootstrap
  "use strict";
  // The require scope
  var __webpack_require__ = {};

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  var __webpack_exports__ = {};
  /*!******************!*\
    !*** ./index.js ***!
    \******************/
  __webpack_require__.r(__webpack_exports__);
  __webpack_require__.d(__webpack_exports__, { // harmony export
    "default": () => (/* binding */ bar),
    "foo": () => (/* binding */ foo)
  });
  
  function bar() {
    return 1;
  }

  function foo() {
    return 2;
  }
})();
```

