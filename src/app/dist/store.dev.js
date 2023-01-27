"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userSlice = _interopRequireDefault(require("../features/user/userSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';*/
var _default = configureStore({
  reducer: {
    user: _userSlice["default"]
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

exports["default"] = _default;
//# sourceMappingURL=store.dev.js.map
