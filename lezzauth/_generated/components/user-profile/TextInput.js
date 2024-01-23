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
exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const pi_1 = require("react-icons/pi");
function TextInput(_a) {
    var { onChange, id, name, label, touched, error } = _a, props = __rest(_a, ["onChange", "id", "name", "label", "touched", "error"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ type: "text", name: name || "text", id: id || "text", className: `text-sm focus:shadow- focus:outline-none bg-white ${error && touched ? "border border-red-400 focus:border-red-600" : "border border-white-400 focus:border-white-600"} text-gray-900 rounded-lg block w-full p-2.5`, onChange: onChange }, props)), error && touched && ((0, jsx_runtime_1.jsxs)("span", { className: "flex text-sm font-medium rounded-2xl space-x-2 h-fit w-fit mt-2", children: [(0, jsx_runtime_1.jsx)(pi_1.PiWarningCircleFill, { style: { color: "red", width: "20px", height: "20px" } }), (0, jsx_runtime_1.jsx)("p", { className: "text-[15px] text-left text-red-400", children: error })] }))] }));
}
exports.TextInput = TextInput;
