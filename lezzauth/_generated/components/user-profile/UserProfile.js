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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const libs_1 = require("lezzauth/libs");
const hooks_1 = require("lezzauth/nextjs/hooks");
const components_1 = require("lezzauth/nextjs/hooks/components");
const formik_1 = require("formik");
const React = __importStar(require("react"));
const ai_1 = require("react-icons/ai");
const md_1 = require("react-icons/md");
const pi_1 = require("react-icons/pi");
const react_spinners_1 = require("react-spinners");
const zod_formik_adapter_1 = require("zod-formik-adapter");
const config_json_1 = __importDefault(require("../../../config.json"));
const Button_1 = require("./Button");
const OutlineButton_1 = require("./OutlineButton");
const PasswordInput_1 = require("./PasswordInput");
const PasswordLabel_1 = require("./PasswordLabel");
const TextInput_1 = require("./TextInput");
const TextLabel_1 = require("./TextLabel");
function UserProfile() {
    const { 
    // Scroll references
    accountScrollRef, securityScrollRef, 
    // Panel state and actions
    activePanelNextAction, setActivePanelNextAction, 
    // Email address accordion
    setIsEmailAddressAccordionShow, isEmailAddressAccordionShow, 
    // Active device accordion
    setIsActiveDeviceAccordionShow, isActiveDeviceAccordionShow, 
    // Action process success
    isActionProcessSuccess, setIsActionProcessSuccess, updateProfileTemporaryUploadedImage, setIsUpdateProfileDragFilePanelShow, isUpdateProfileDragFilePanelShow, handleRemoveProfilePicture, isUpdateProfileImageLoading, updateProfileUploadImageRef, handleUpdateProfilePicture, handleUpdateProfile, changePasswordErrorMessage, handleChangePassword, handleSetPassword, setPasswordErrorMessage, } = (0, components_1.useUserProfile)();
    const { state } = (0, hooks_1.useLezzAuthContext)();
    const isLoadingDone = state.currentUser.id && (!state.lezzAuthLoading.loadInitialData && !state.lezzAuthLoading.verifyJwt);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isLoadingDone &&
            ((0, jsx_runtime_1.jsxs)("div", { className: 'flex', children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(SideContent, {}), (0, jsx_runtime_1.jsx)(ContentContainer, { children: !activePanelNextAction ?
                                    (0, jsx_runtime_1.jsx)(Content, {})
                                    :
                                        (0, jsx_runtime_1.jsx)(EditContent, {}) })] })] })) }));
    function EditContent() {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(BreadCrumb, {}), (0, jsx_runtime_1.jsxs)("div", { className: 'my-5', children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: activePanelNextAction.split(':')[1] }), (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [activePanelNextAction === 'Account:Update profile' && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !isActionProcessSuccess ? (0, jsx_runtime_1.jsx)(UpdateProfilePanel, {}) : (0, jsx_runtime_1.jsx)(SuccessPanel, { message: 'Your password has been updated.' }) })), activePanelNextAction === 'Security:Change password' && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !isActionProcessSuccess ? (0, jsx_runtime_1.jsx)(ChangePasswordPanel, {}) : (0, jsx_runtime_1.jsx)(SuccessPanel, { message: 'Your password has been updated.' }) })), activePanelNextAction === 'Security:Set password' && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !isActionProcessSuccess ? (0, jsx_runtime_1.jsx)(SetPasswordPanel, {}) : (0, jsx_runtime_1.jsx)(SuccessPanel, { message: 'Your password has been updated.' }) }))] })] })] }));
    }
    function BreadCrumb() {
        return ((0, jsx_runtime_1.jsx)("div", { className: 'max-w-xs text-sm breadcrumbs', children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { className: 'cursor-pointer hover:underline', onClick: () => setActivePanelNextAction(''), children: activePanelNextAction.split(':')[0] }), (0, jsx_runtime_1.jsx)("li", { children: activePanelNextAction.split(':')[1] })] }) }));
    }
    function SuccessPanel({ message }) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsx)("h1", { children: message }), (0, jsx_runtime_1.jsx)("div", { className: 'flex justify-end w-full', children: (0, jsx_runtime_1.jsx)("div", { className: 'flex space-x-2 w-fit mt-8', children: (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: () => {
                                setActivePanelNextAction('');
                                setIsActionProcessSuccess(false);
                            }, children: "FINISH" }) }) })] }));
    }
    function ChangePasswordPanel() {
        const { handleSubmit, handleChange, setFieldTouched, touched, errors, isSubmitting } = (0, formik_1.useFormik)({
            initialValues: {
                oldPassword: '',
                newPassword: '',
                newPasswordConfirm: '',
            },
            validate: (0, zod_formik_adapter_1.toFormikValidate)(libs_1.changePasswordSchema),
            onSubmit: (values, { setSubmitting }) => {
                handleChangePassword(values, setSubmitting);
            },
        });
        return ((0, jsx_runtime_1.jsx)("div", { className: 'mt-5', children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, { children: "Current Password" }), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { id: 'oldPassword', name: 'oldPassword', onKeyDown: () => {
                                    setFieldTouched('oldPassword', true, true);
                                }, onChange: handleChange, touched: true, error: changePasswordErrorMessage, autoFocus: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, { children: "New Password" }), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { id: 'newPassword', name: 'newPassword', onChange: handleChange, onKeyDown: () => {
                                    setFieldTouched('newPassword', true, true);
                                }, touched: touched.newPassword, error: errors.newPassword })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, { children: "Confirmation Password" }), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { id: 'newPasswordConfirm', name: 'newPasswordConfirm', onChange: handleChange, onKeyDown: () => {
                                    setFieldTouched('newPasswordConfirm', true, true);
                                }, touched: touched.newPasswordConfirm, error: errors.newPasswordConfirm })] }), (0, jsx_runtime_1.jsx)("div", { className: 'flex justify-end w-full', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-2 w-[200px] mt-8', children: [(0, jsx_runtime_1.jsx)(OutlineButton_1.OutlineButton, { onClick: () => setActivePanelNextAction(''), children: "CANCEL" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { disabled: isSubmitting || Object.keys(errors).length > 0 || !touched.oldPassword || !touched.newPassword || !touched.newPasswordConfirm ? true : false, children: isSubmitting ? (0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { color: 'white', size: '20px' }) : 'CONTINUE' })] }) })] }) }));
    }
    function SetPasswordPanel() {
        const { handleSubmit, handleChange, setFieldTouched, touched, errors, isSubmitting } = (0, formik_1.useFormik)({
            initialValues: {
                newPassword: '',
                newPasswordConfirm: '',
            },
            validate: (0, zod_formik_adapter_1.toFormikValidate)(libs_1.setPasswordSchema),
            onSubmit: (values, { setSubmitting }) => {
                handleSetPassword(values, setSubmitting);
            },
        });
        return ((0, jsx_runtime_1.jsx)("div", { className: 'mt-5', children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, { children: "New Password" }), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { id: 'newPassword', name: 'newPassword', onChange: handleChange, onKeyDown: () => {
                                    setFieldTouched('newPassword', true, true);
                                }, touched: touched.newPassword, error: errors.newPassword })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, { children: "Confirmation Password" }), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { id: 'newPasswordConfirm', name: 'newPasswordConfirm', onChange: handleChange, onKeyDown: () => {
                                    setFieldTouched('newPasswordConfirm', true, true);
                                }, touched: touched.newPasswordConfirm, error: errors.newPasswordConfirm })] }), setPasswordErrorMessage && ((0, jsx_runtime_1.jsxs)("span", { className: "flex text-sm font-medium rounded-2xl space-x-2 h-fit w-fit mt-2", children: [(0, jsx_runtime_1.jsx)(pi_1.PiWarningCircleFill, { style: { color: "red", width: "20px", height: "20px" } }), (0, jsx_runtime_1.jsx)("p", { className: "text-[15px] text-left text-red-400", children: setPasswordErrorMessage })] })), (0, jsx_runtime_1.jsx)("div", { className: 'flex justify-end w-full', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-2 w-[200px] mt-8', children: [(0, jsx_runtime_1.jsx)(OutlineButton_1.OutlineButton, { onClick: () => setActivePanelNextAction(''), children: "CANCEL" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { disabled: isSubmitting || Object.keys(errors).length > 0 || !touched.newPassword || !touched.newPasswordConfirm ? true : false, children: isSubmitting ? (0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { color: 'white', size: '20px' }) : 'CONTINUE' })] }) })] }) }));
    }
    function UpdateProfilePanel() {
        const { handleSubmit, handleChange, values, isSubmitting } = (0, formik_1.useFormik)({
            initialValues: {
                firstName: state.currentUser.firstName,
                lastName: state.currentUser.lastName,
            },
            onSubmit: (values, { setSubmitting }) => {
                handleUpdateProfile(values, setSubmitting);
            },
        });
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-2', children: [(0, jsx_runtime_1.jsx)("div", { className: 'avatar rounded-full', children: (0, jsx_runtime_1.jsx)("div", { className: 'rounded-full w-[45px] h-[45px]', children: updateProfileTemporaryUploadedImage ? (0, jsx_runtime_1.jsx)("img", { src: updateProfileTemporaryUploadedImage, alt: "temp_profile" }) : state.currentUser.profileImage ? (0, jsx_runtime_1.jsx)("img", { src: state.currentUser.profileImage, alt: "profile" }) : (0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, { style: { width: '100%', height: '100%' }, color: config_json_1.default.theme.color }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "Profile image" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-2', children: [(0, jsx_runtime_1.jsx)("h1", { onClick: () => {
                                                setIsUpdateProfileDragFilePanelShow(!isUpdateProfileDragFilePanelShow);
                                            }, className: 'text-sm text-[#6C47FF] cursor-pointer hover:underline', style: {
                                                color: config_json_1.default.theme.color
                                            }, children: !isUpdateProfileDragFilePanelShow ? 'Upload image' : 'Cancel' }), state.currentUser.profileImage && ((0, jsx_runtime_1.jsx)("h1", { onClick: handleRemoveProfilePicture, className: 'text-sm text-red-400 cursor-pointer hover:underline', children: !isUpdateProfileDragFilePanelShow ? 'Remove image' : null }))] })] })] }), isUpdateProfileDragFilePanelShow && ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col space-y-3 rounded-lg bg-gray-100 h-fit w-full p-3 items-center justify-center mt-5', children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex justify-center items-center rounded-full bg-gray-300 w-[70px] h-[70px]', children: (0, jsx_runtime_1.jsx)(ai_1.AiFillFolder, { className: 'w-[20px] h-[20px]' }) }), !isUpdateProfileImageLoading ? ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col space-y-2 items-center justify-center', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-sm text-gray-500', children: "Drag file here, or..." }), (0, jsx_runtime_1.jsx)("input", { type: 'file', className: 'hidden', ref: updateProfileUploadImageRef, accept: 'image/*', onChange: handleUpdateProfilePicture }), (0, jsx_runtime_1.jsx)(OutlineButton_1.OutlineButton, { onClick: () => { var _a; return (_a = updateProfileUploadImageRef === null || updateProfileUploadImageRef === void 0 ? void 0 : updateProfileUploadImageRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, children: "Select file" })] }))
                            :
                                (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm text-gray-500', children: "Uploading..." })] })), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(TextLabel_1.TextLabel, { children: "First name" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { type: 'text', name: 'firstName', id: 'firstName', onChange: handleChange, value: values.firstName, autoFocus: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-8', children: [(0, jsx_runtime_1.jsx)(TextLabel_1.TextLabel, { children: "Last name" }), (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { type: 'text', name: 'lastName', id: 'lastName', onChange: handleChange, value: values.lastName })] }), (0, jsx_runtime_1.jsx)("div", { className: 'flex justify-end w-full', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-2 w-[200px] mt-8', children: [(0, jsx_runtime_1.jsx)(OutlineButton_1.OutlineButton, { onClick: () => setActivePanelNextAction(''), children: "CANCEL" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { children: isSubmitting ? (0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { color: 'white', size: '20px' }) : 'CONTINUE' })] }) })] })] }));
    }
    function Content() {
        var _a, _b;
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { ref: accountScrollRef, children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Account" }), (0, jsx_runtime_1.jsx)(SubHeaderText, { children: "Manage your account information" }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsx)(HeaderMenuText, { children: "Profile" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)(MenuButton, { panel: 'Account:Update profile', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center justify-center space-x-2', children: [(0, jsx_runtime_1.jsx)("div", { className: 'avatar rounded-full', children: (0, jsx_runtime_1.jsx)("div", { className: 'rounded-full w-[45px] h-[45px]', children: state.currentUser.profileImage ? (0, jsx_runtime_1.jsx)("img", { src: state.currentUser.profileImage, alt: "profile" }) : (0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, { style: { width: '100%', height: '100%' }, color: config_json_1.default.theme.color }) }) }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-black ml-[5px]', children: (state.currentUser.firstName || state.currentUser.lastName) ? `${(_a = state.currentUser.firstName) !== null && _a !== void 0 ? _a : ''} ${(_b = state.currentUser.lastName) !== null && _b !== void 0 ? _b : ''}` : '' })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsx)(HeaderMenuText, { children: "Email address" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: 'collapse collapse-arrow bg-white flex-col mt-3 items-center', children: [(0, jsx_runtime_1.jsx)("input", { type: 'radio', name: 'emailAddressAccordion', checked: isEmailAddressAccordionShow, readOnly: true }), (0, jsx_runtime_1.jsxs)("button", { className: 'collapse-title text-xl font-medium flex space-x-1 z-10 bg-white hover:brightness-[0.95]', onClick: () => {
                                                setIsEmailAddressAccordionShow(!isEmailAddressAccordionShow);
                                            }, children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: state.currentUser.email }), (0, jsx_runtime_1.jsx)("div", { className: 'badge badge-primary text-xs', children: "Primary" }), (0, jsx_runtime_1.jsx)("div", { className: 'badge badge-secondary text-xs', children: "Unverified" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'collapse-content flex flex-col space-y-2 mt-1 mx-3', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-md font-medium', children: "Primary email address" }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "This email address is the primary email address" }), (0, jsx_runtime_1.jsx)("h1", { onClick: () => setActivePanelNextAction('Account:Add email address'), className: 'text-sm text-[#6C47FF] hover:underline cursor-pointer', children: "Complete verification" }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-md font-medium', children: "Remove" }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "Delete this email address and remove it from your account" }), (0, jsx_runtime_1.jsx)("h1", { onClick: () => setActivePanelNextAction('Account:Remove email address'), className: 'text-sm text-red-500 hover:underline cursor-pointer', children: "Remove email address" })] }), (0, jsx_runtime_1.jsx)(MenuButton, { panel: 'Account:Add email address', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2 text-[#6C47FF] text-sm', children: [(0, jsx_runtime_1.jsx)(ai_1.AiOutlinePlus, {}), (0, jsx_runtime_1.jsx)("h1", { children: "Add an email address" })] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsx)(HeaderMenuText, { children: "Connected accounts" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)(MenuButton, { panel: 'Account:Add connected account', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2 text-[#6C47FF] text-sm', children: [(0, jsx_runtime_1.jsx)(ai_1.AiOutlinePlus, {}), (0, jsx_runtime_1.jsx)("h1", { children: "Connect account" })] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { ref: securityScrollRef, children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Security" }), (0, jsx_runtime_1.jsx)(SubHeaderText, { children: "Manage your security preferences" }), state.currentUser.__firstFactor === "password" ?
                            (0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsx)(HeaderMenuText, { children: "Password" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: 'text-black text-sm mx-5 mt-3 font-bold', children: "********" }), (0, jsx_runtime_1.jsx)(MenuButton, { panel: 'Security:Change password', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2 text-[#6C47FF] text-sm', children: [(0, jsx_runtime_1.jsx)(md_1.MdEdit, {}), (0, jsx_runtime_1.jsx)("h1", { children: "Change password" })] }) })] })
                            :
                                (0, jsx_runtime_1.jsx)("div", { className: 'mt-5', children: (0, jsx_runtime_1.jsx)(MenuButton, { panel: 'Security:Set password', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2 text-[#6C47FF] text-sm', children: [(0, jsx_runtime_1.jsx)(md_1.MdAdd, {}), (0, jsx_runtime_1.jsx)("h1", { children: "Set Password" })] }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-5', children: [(0, jsx_runtime_1.jsx)(HeaderMenuText, { children: "Active devices" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: 'collapse collapse-arrow bg-white flex-col mt-3 items-center', children: [(0, jsx_runtime_1.jsx)("input", { type: 'radio', name: 'activeDeviceAccordion', checked: isActiveDeviceAccordionShow, readOnly: true }), (0, jsx_runtime_1.jsx)("button", { className: 'collapse-title text-xl font-medium flex space-x-1 z-10 bg-white hover:brightness-[0.95]', onClick: () => {
                                                setIsActiveDeviceAccordionShow(!isActiveDeviceAccordionShow);
                                            }, children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center w-full text-left', children: [(0, jsx_runtime_1.jsx)("img", { src: 'https://i.ibb.co/dtC8hdS/yupiramos181111193-removebg-preview.png', className: 'w-[100px] h-[100px] object-contain' }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col ml-5', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "Windows " }), (0, jsx_runtime_1.jsx)("div", { className: 'badge badge-primary text-xs', children: "This device" })] }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "Chrome 118.0.0.0 " }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "118.99.107.109 (Jakarta, ID)" }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "Today at 09.03 AM" })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'collapse-content flex flex-col space-y-2 mt-1 mx-3', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-md font-medium', children: "Current device" }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "This is the device you are currently using" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(HeaderMenuText, { children: "Danger" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-between mx-5 mt-3', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-md font-medium', children: "Delete account" }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-sm', children: "Delete your account and all its associated data" })] }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: () => setActivePanelNextAction('Security:Delete account'), style: {
                                                backgroundColor: 'red', color: 'white'
                                            }, children: "DELETE ACCOUNT" })] })] })] })] }));
    }
    function MainContainer({ children }) {
        return ((0, jsx_runtime_1.jsx)("div", { className: 'flex w-full phone:w-fit bg-white rounded-3xl shadow-2xl border', children: children }));
    }
    function HeaderText({ children }) {
        return (0, jsx_runtime_1.jsx)("h1", { className: 'font-bold text-black text-3xl', children: children });
    }
    function SubHeaderText({ children }) {
        return (0, jsx_runtime_1.jsx)("h1", { className: 'text-gray-400 text-lg', children: children });
    }
    function HeaderMenuText({ children }) {
        return (0, jsx_runtime_1.jsx)("h1", { className: 'text-black text-lg', children: children });
    }
    function MenuButton({ children, panel }) {
        return ((0, jsx_runtime_1.jsxs)("button", { onClick: () => setActivePanelNextAction(panel), className: 'flex justify-between space-x-3 items-center mb-5 p-5 w-full group bg-white hover:brightness-[0.95] rounded-lg mt-2', children: [children, (0, jsx_runtime_1.jsx)(ai_1.AiOutlineArrowRight, { className: 'opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out' })] }));
    }
    function ContentContainer({ children }) {
        return ((0, jsx_runtime_1.jsx)("div", { className: 'flex flex-col w-[640px] min-h-[500px] p-10', children: children }));
    }
    function SideContent() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col w-[240px] space-y-2 border-r-2 p-10 h-full', children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                        var _a;
                        (_a = accountScrollRef === null || accountScrollRef === void 0 ? void 0 : accountScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setActivePanelNextAction('');
                    }, className: 'flex hover:brightness-[0.95] items-center space-x-2 w-full text-black bg-white focus:ring-4 focus:outline-none focus:ring-[#6C47FF] font-medium rounded-lg text-sm px-5 py-2.5 text-center', children: [(0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, {}), (0, jsx_runtime_1.jsx)("h1", { children: "Account" })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                        var _a;
                        (_a = securityScrollRef === null || securityScrollRef === void 0 ? void 0 : securityScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setActivePanelNextAction('');
                    }, className: 'flex hover:brightness-[0.95] items-center space-x-2 w-full text-black bg-white focus:ring-4 focus:outline-none focus:ring-[#6C47FF] font-medium rounded-lg text-sm px-5 py-2.5 text-center', children: [(0, jsx_runtime_1.jsx)(md_1.MdSecurity, {}), (0, jsx_runtime_1.jsx)("h1", { children: "Security" })] })] }));
    }
}
exports.UserProfile = UserProfile;
const WatermarkSection = React.memo(({ children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'h-fit relative top-[50px]', style: {
            writingMode: 'vertical-lr',
            transform: 'rotate(180deg)',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            overflow: 'visible',
        }, children: children }));
});
const Watermark = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-[#6C47FF] text-white text-center flex justify-center items-center w-full space-y-1 p-2 rounded-bl-[5px] rounded-br-[5px] rounded-tr-[0px] rounded-tl-[0px]  sm:rounded-bl-[0px] sm:rounded-br-[5px] sm:rounded-tl-[0px] sm:rounded-tr-[5px]", style: { backgroundColor: config_json_1.default.theme.color }, children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-xs', style: { color: config_json_1.default.theme.textColor }, children: "Secured by " }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xs font-bold', style: { color: config_json_1.default.theme.textColor }, children: "Lezzauth" })] }));
});
