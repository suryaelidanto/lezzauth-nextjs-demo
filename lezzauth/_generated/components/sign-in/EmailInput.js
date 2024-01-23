"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const nextjs_1 = require("lezzauth/nextjs");
const tailwind_merge_1 = require("tailwind-merge");
const _1 = require(".");
function EmailInput(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var { onChange, id, name, label, style, className } = _a, props = __rest(_a, ["onChange", "id", "name", "label", "style", "className"]);
    const { state } = (0, nextjs_1.useLezzAuthContext)();
    const error = (_d = (_c = (_b = state.signInForm) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.email) === null || _d === void 0 ? void 0 : _d.error;
    const handleChange = (_f = (_e = state.signInForm) === null || _e === void 0 ? void 0 : _e.input) === null || _f === void 0 ? void 0 : _f.handleChange;
    const setFieldTouched = (_h = (_g = state.signInForm) === null || _g === void 0 ? void 0 : _g.input) === null || _h === void 0 ? void 0 : _h.setFieldTouched;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ type: "email", name: name || "email", id: id || "email", onChange: onChange || handleChange, onKeyDown: () => { setFieldTouched && setFieldTouched("email", true); }, className: (0, tailwind_merge_1.twMerge)(`text-sm focus:shadow- focus:outline-none bg-white ${error ? "border border-red-400 focus:border-red-600" : "border border-white-400 focus:border-white-600"} text-gray-900 rounded-lg block w-full p-2.5`, className), style: Object.assign({}, style) }, props)), error && (0, jsx_runtime_1.jsx)(_1.InputError, { message: error })] }));
}
exports.EmailInput = EmailInput;
