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
exports.InputError = exports.SignInProvider = exports.SignInContainer = exports.SignIn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const constants_1 = require("lezzauth/nextjs/constants");
const hooks_1 = require("lezzauth/nextjs/hooks");
const components_1 = require("lezzauth/nextjs/hooks/components");
const formik_1 = require("formik");
const link_1 = __importDefault(require("next/link"));
const React = __importStar(require("react"));
const md_1 = require("react-icons/md");
const pi_1 = require("react-icons/pi");
const tb_1 = require("react-icons/tb");
const config_json_1 = __importDefault(require("../../../config.json"));
const Button_1 = require("./Button");
const EmailInput_1 = require("./EmailInput");
const EmailLabel_1 = require("./EmailLabel");
const GoogleButton_1 = require("./GoogleButton");
const PasswordInput_1 = require("./PasswordInput");
const PasswordLabel_1 = require("./PasswordLabel");
exports.SignIn = React.memo(() => {
    const { step, isLoadingDone } = (0, components_1.useSignIn)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: step !== "factor-one" ?
            isLoadingDone ? (0, jsx_runtime_1.jsx)(SignInFormContainer, {}) : null
            :
                isLoadingDone ? (0, jsx_runtime_1.jsx)(SignInFirstFactorContainer, {}) : null }));
});
exports.SignInContainer = React.memo(({ children }) => ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign in" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), children, (0, jsx_runtime_1.jsx)(SignInRedirectText, {})] })] })));
exports.SignInProvider = React.memo(({ children }) => {
    const { handleSignIn } = (0, components_1.useSignIn)();
    const { state, dispatch } = (0, hooks_1.useLezzAuthContext)();
    const { handleSubmit, handleChange, values, isSubmitting, touched, errors } = (0, formik_1.useFormik)({
        initialValues: {
            emailOrUsername: "",
            email: "",
            username: "",
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            handleSignIn(values, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_IN_FORM",
            payload: {
                signInForm: {
                    input: {
                        handleChange,
                        values,
                    },
                    button: { isSubmitting },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsx)("form", { className: 'space-y-4', onSubmit: state.signInForm.button.onSubmit || handleSubmit, children: children }));
});
exports.InputError = React.memo(({ message }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex text-sm font-normal rounded-2xl space-x-1 h-fit w-fit mt-2", children: [(0, jsx_runtime_1.jsx)(pi_1.PiWarningCircleFill, { style: { color: "red", width: "15px", height: "15px" } }), (0, jsx_runtime_1.jsx)("p", { className: "text-[12px] text-left text-red-400", children: message })] }));
});
const SignInForm = React.memo(() => {
    const { handleSignIn } = (0, components_1.useSignIn)();
    const { dispatch } = (0, hooks_1.useLezzAuthContext)();
    const { handleSubmit, handleChange, values, isSubmitting, touched, errors } = (0, formik_1.useFormik)({
        initialValues: {
            emailOrUsername: "",
            email: "",
            username: "",
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            handleSignIn(values, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_IN_FORM",
            payload: {
                signInForm: {
                    input: {
                        handleChange,
                        values
                    },
                    button: { isSubmitting },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsxs)("form", { className: 'space-y-4', onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(EmailLabel_1.EmailLabel, {}), (0, jsx_runtime_1.jsx)(EmailInput_1.EmailInput, { autoFocus: true })] }), (0, jsx_runtime_1.jsx)(Button_1.Button, {}), (0, jsx_runtime_1.jsx)(SignInRedirectText, {})] }));
});
const SignInFirstFactorForm = React.memo(() => {
    const { handleSignInFirstFactor, handleRemoveSignInTemp, tempEmail, tempUserId } = (0, components_1.useSignIn)();
    const { dispatch } = (0, hooks_1.useLezzAuthContext)();
    const { handleSubmit, handleChange, values, isSubmitting, touched, errors } = (0, formik_1.useFormik)({
        initialValues: {
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            handleSignInFirstFactor(tempUserId, values.password, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_IN_FORM",
            payload: {
                signInForm: {
                    input: {
                        handleChange,
                        values,
                    },
                    button: { isSubmitting },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsxs)("form", { className: 'space-y-4', onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)(SignInTempEmailBadge, { tempEmail: tempEmail, handleRemoveSignInTemp: handleRemoveSignInTemp }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, {}), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { autoFocus: true })] }), (0, jsx_runtime_1.jsx)(Button_1.Button, {}), (0, jsx_runtime_1.jsx)("div", { className: 'mt-4', children: (0, jsx_runtime_1.jsx)(LinkText, { href: "", children: "Get help" }) })] }));
});
const SignInFormContainer = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign in" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(OAuthButtons, {}), (0, jsx_runtime_1.jsx)(SignInForm, {})] })] }));
});
const SignInFirstFactorContainer = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign in" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(SignInFirstFactorForm, {})] })] }));
});
const MainContainer = React.memo(({ children }) => ((0, jsx_runtime_1.jsx)("div", { className: "flex w-[400px]", children: children })));
const OrDivider = React.memo(() => ((0, jsx_runtime_1.jsx)("div", { className: 'mt-4 w-full', children: (0, jsx_runtime_1.jsx)("div", { className: "divider text-gray-400", children: "OR" }) })));
const FormSection = React.memo(({ children }) => ((0, jsx_runtime_1.jsx)("div", { className: "w-full phone:w-[400px] bg-white rounded-3xl shadow-2xl border", style: { color: config_json_1.default.theme.textBackgroundColor, backgroundColor: config_json_1.default.theme.backgroundColor }, children: (0, jsx_runtime_1.jsx)("div", { className: "p-10 space-y-2", children: children }) })));
const HeaderText = React.memo(({ children }) => ((0, jsx_runtime_1.jsx)("p", { className: "text-xl text-left font-bold text-[#141414]", style: { color: config_json_1.default.theme.textBackgroundColor }, children: children })));
const SubHeaderText = React.memo(({ children }) => ((0, jsx_runtime_1.jsx)("p", { className: "text-[15px] text-left text-gray-400", children: children })));
const LinkText = React.memo(({ href, children }) => ((0, jsx_runtime_1.jsx)(link_1.default, { href: href, className: "text-sm font-light text-primary-600 hover:underline text-[#8465FF]", style: { color: config_json_1.default.theme.color }, children: children })));
const SignInRedirectText = React.memo(() => ((0, jsx_runtime_1.jsxs)("div", { className: "text-sm font-light text-gray-500 text-left", children: ["No account? ", (0, jsx_runtime_1.jsx)(LinkText, { href: constants_1.SIGN_UP_URL, children: "Sign up" })] })));
const OAuthButtons = React.memo(() => ((0, jsx_runtime_1.jsx)("div", { className: 'flex flex-col space-x-2', children: config_json_1.default.socialConnections.oauth_google.enabled ?
        (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center flex-col", children: [(0, jsx_runtime_1.jsx)(GoogleButton_1.GoogleButton, {}), (0, jsx_runtime_1.jsx)(OrDivider, {})] })
        : null })));
const SignInTempEmailBadge = React.memo(({ tempEmail, handleRemoveSignInTemp }) => ((0, jsx_runtime_1.jsxs)("span", { className: "flex bg-[#FAFAFA] text-[#FAFAFA]-800 text-sm font-normal mr-2 border border-white-300 rounded-2xl items-center p-[10px] space-x-2 h-fit w-fit", children: [(0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, { style: { width: '20px', height: '20px' }, color: config_json_1.default.theme.color }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-400", children: [" ", tempEmail, " "] }), (0, jsx_runtime_1.jsx)(tb_1.TbEdit, { style: { width: "20px", height: "20px", cursor: "pointer" }, color: config_json_1.default.theme.color, onClick: handleRemoveSignInTemp })] })));
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
