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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const nextjs_1 = require("lezzauth/nextjs");
const React = __importStar(require("react"));
const react_spinners_1 = require("react-spinners");
const tailwind_merge_1 = require("tailwind-merge");
const config_json_1 = __importDefault(require("../../../config.json"));
function Button(_a) {
    var _b, _c, _d, _e, _f, _g;
    var { children, type, onSubmit, style, className } = _a, props = __rest(_a, ["children", "type", "onSubmit", "style", "className"]);
    const { state, dispatch } = (0, nextjs_1.useLezzAuthContext)();
    React.useEffect(() => {
        if (onSubmit) {
            dispatch({
                type: "SIGN_UP_FORM",
                payload: {
                    signUpForm: {
                        button: {
                            onSubmit: (e) => {
                                e === null || e === void 0 ? void 0 : e.preventDefault();
                                onSubmit();
                            }
                        }
                    }
                }
            });
        }
    }, [(_c = (_b = state.signUpForm) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.values]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: type || "submit", className: (0, tailwind_merge_1.twMerge)(`w-full text-white bg-[#6C47FF] hover:bg-[#664ad5] focus:ring-4 focus:outline-none focus:ring-[#6C47FF] font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-[#b29fff]`, className), style: Object.assign({ color: config_json_1.default.theme.textColor, backgroundColor: config_json_1.default.theme.color }, style), disabled: (_e = (_d = state.signUpForm) === null || _d === void 0 ? void 0 : _d.button) === null || _e === void 0 ? void 0 : _e.isSubmitting }, props, { children: ((_g = (_f = state.signUpForm) === null || _f === void 0 ? void 0 : _f.button) === null || _g === void 0 ? void 0 : _g.isSubmitting) ? (0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { color: "white", size: "20px" }) : children || "CONTINUE" })));
}
exports.Button = Button;
