"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.PasswordInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const nextjs_1 = require("lezzauth/nextjs");
const React = __importStar(require("react"));
const ai_1 = require("react-icons/ai");
const tailwind_merge_1 = require("tailwind-merge");
const _1 = require(".");
function PasswordInput(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var { onChange, id, name, label, style, className } = _a, props = __rest(_a, ["onChange", "id", "name", "label", "style", "className"]);
    const { state } = (0, nextjs_1.useLezzAuthContext)();
    const [showPassword, setShowPassword] = React.useState(false);
    const error = (_d = (_c = (_b = state.signInForm) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.password) === null || _d === void 0 ? void 0 : _d.error;
    const handleChange = (_f = (_e = state.signInForm) === null || _e === void 0 ? void 0 : _e.input) === null || _f === void 0 ? void 0 : _f.handleChange;
    const setFieldTouched = (_h = (_g = state.signUpForm) === null || _g === void 0 ? void 0 : _g.input) === null || _h === void 0 ? void 0 : _h.setFieldTouched;
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ type: showPassword ? "text" : "password", name: name || "password", id: id || "password", onChange: onChange || handleChange, onKeyDown: () => { setFieldTouched && setFieldTouched("password", true); }, className: (0, tailwind_merge_1.twMerge)(`text-sm focus:shadow- focus:outline-none bg-white ${error ? "border border-red-400 focus:border-red-600" : "border border-white-400 focus:border-white-600"} text-gray-900 rounded-lg block w-full p-2.5`, className), style: Object.assign({}, style) }, props)), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: handleTogglePassword, className: "absolute right-2 top-1/2 transform -translate-y-1/2", children: showPassword ? ((0, jsx_runtime_1.jsx)(ai_1.AiFillEyeInvisible, { className: "text-[#b5b3b3] hover:text-[#858585] w-[20px] h-[20px]" })) : ((0, jsx_runtime_1.jsx)(ai_1.AiFillEye, { className: "text-[#b5b3b3] hover:text-[#858585] w-[20px] h-[20px]" })) })] }), error && (0, jsx_runtime_1.jsx)(_1.InputError, { message: error })] }));
}
exports.PasswordInput = PasswordInput;
