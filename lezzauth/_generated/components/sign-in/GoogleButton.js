"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("lezzauth/nextjs/hooks/components");
const ai_1 = require("react-icons/ai");
const tailwind_merge_1 = require("tailwind-merge");
const config_json_1 = __importDefault(require("../../../config.json"));
function GoogleButton({ children, style, className }) {
    const { handleSignInGoogle } = (0, components_1.useSignIn)();
    return ((0, jsx_runtime_1.jsxs)("button", { onClick: handleSignInGoogle, className: (0, tailwind_merge_1.twMerge)('flex items-center justify-between bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-[#6C47FF] space-x-2 w-full group mt-5', className), style: Object.assign({ color: config_json_1.default.theme.textBackgroundColor, backgroundColor: config_json_1.default.theme.backgroundColor }, style), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2', children: [(0, jsx_runtime_1.jsx)(ai_1.AiFillGoogleCircle, { size: "20px", style: { color: config_json_1.default.theme.textBackgroundColor } }), (0, jsx_runtime_1.jsxs)("span", { style: { color: config_json_1.default.theme.textBackgroundColor }, children: [" ", children || "Continue with Google"] })] }), (0, jsx_runtime_1.jsx)(ai_1.AiOutlineArrowRight, { className: "opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out", style: { color: config_json_1.default.theme.textBackgroundColor } })] }));
}
exports.GoogleButton = GoogleButton;
