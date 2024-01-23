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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const tailwind_merge_1 = require("tailwind-merge");
const config_json_1 = __importDefault(require("../../../config.json"));
function EmailLabel(_a) {
    var { htmlFor, label, style, className } = _a, props = __rest(_a, ["htmlFor", "label", "style", "className"]);
    return ((0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: htmlFor || "email", className: (0, tailwind_merge_1.twMerge)('block mb-2 text-sm font-medium text-gray-900 text-left', className), style: Object.assign({ color: config_json_1.default.theme.textBackgroundColor }, style) }, props, { children: label || "Email address" })));
}
exports.EmailLabel = EmailLabel;
