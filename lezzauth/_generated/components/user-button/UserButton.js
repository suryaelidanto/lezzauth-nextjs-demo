"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("lezzauth/nextjs/hooks");
const components_1 = require("lezzauth/nextjs/hooks/components");
const bs_1 = require("react-icons/bs");
const md_1 = require("react-icons/md");
const pi_1 = require("react-icons/pi");
const config_json_1 = __importDefault(require("../../../config.json"));
const user_profile_1 = require("../user-profile");
function UserButton() {
    var _a, _b;
    const { dropdownClass, buttonRef, handleDropdownToggle, } = (0, components_1.useUserButton)();
    const { state } = (0, hooks_1.useLezzAuthContext)();
    const { signOut } = (0, hooks_1.useLezzAuth)();
    const isLoadingDone = state.currentUser.id && (!state.lezzAuthLoading.loadInitialData && !state.lezzAuthLoading.verifyJwt);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isLoadingDone &&
            ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: `dropdown ${dropdownClass}`, children: [(0, jsx_runtime_1.jsx)("button", { className: "avatar rounded-full focus:ring focus:ring-primary focus:ring-offset-base-100 focus:ring-offset-2 active:ring active:ring-primary active:ring-offset-base-100 active:ring-offset-2", tabIndex: 0, ref: buttonRef, onClick: handleDropdownToggle, children: (0, jsx_runtime_1.jsx)("div", { className: "rounded-full w-[30px] h-[30px]", children: state.currentUser.profileImage ? (0, jsx_runtime_1.jsx)("img", { src: state.currentUser.profileImage, alt: "profile" }) : (0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, { style: { width: '100%', height: '100%' }, color: config_json_1.default.theme.color }) }) }), (0, jsx_runtime_1.jsxs)("ul", { tabIndex: 0, className: "dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-[375px] text-gray-400 p-5 mx-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-3 items-center mb-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "avatar rounded-full ml-[7px]", children: (0, jsx_runtime_1.jsx)("div", { className: "rounded-full w-[45px] h-[45px]", children: state.currentUser.profileImage ? (0, jsx_runtime_1.jsx)("img", { src: state.currentUser.profileImage, alt: "profile" }) : (0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, { style: { width: '100%', height: '100%' }, color: config_json_1.default.theme.color }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("h1", { className: "font-bold text-black ml-[5px]", children: (state.currentUser.firstName || state.currentUser.lastName) ? `${(_a = state.currentUser.firstName) !== null && _a !== void 0 ? _a : ""} ${(_b = state.currentUser.lastName) !== null && _b !== void 0 ? _b : ""}` : "" }), (0, jsx_runtime_1.jsx)("h1", { className: "ml-[5px]", children: state.currentUser.email })] })] }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                                                if (document) {
                                                    document.getElementById('userProfileModal').showModal();
                                                }
                                            }, className: "px-5 py-3 flex", children: [(0, jsx_runtime_1.jsx)(bs_1.BsFillGearFill, {}), (0, jsx_runtime_1.jsx)("h1", { className: "ml-[27px]", children: "Manage account" })] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("button", { className: "px-5 py-3 flex", onClick: signOut, children: [(0, jsx_runtime_1.jsx)(pi_1.PiSignOutBold, {}), (0, jsx_runtime_1.jsx)("h1", { className: "ml-[27px]", children: "Sign out" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex mt-5 space-x-1", children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-md', children: "Secured by " }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-md font-bold', children: "Lezzauth" })] })] })] }), (0, jsx_runtime_1.jsxs)("dialog", { id: "userProfileModal", className: "modal overflow-scroll", children: [(0, jsx_runtime_1.jsx)("form", { method: "dialog", children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "\u2715" }) }), (0, jsx_runtime_1.jsx)(user_profile_1.UserProfile, {})] })] })) }));
}
exports.UserButton = UserButton;
