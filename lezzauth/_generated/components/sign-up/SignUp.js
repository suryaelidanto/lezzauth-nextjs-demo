"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputError = exports.SignUpProvider = exports.SignUpContainer = exports.SignUp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formik_1 = require("formik");
const libs_1 = require("lezzauth/libs");
const constants_1 = require("lezzauth/nextjs/constants");
const hooks_1 = require("lezzauth/nextjs/hooks");
const components_1 = require("lezzauth/nextjs/hooks/components");
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const pi_1 = require("react-icons/pi");
const tb_1 = require("react-icons/tb");
const zod_formik_adapter_1 = require("zod-formik-adapter");
const config_json_1 = __importDefault(require("../../../config.json"));
const Button_1 = require("./Button");
const EmailInput_1 = require("./EmailInput");
const EmailLabel_1 = require("./EmailLabel");
const GoogleButton_1 = require("./GoogleButton");
const PasswordInput_1 = require("./PasswordInput");
const PasswordLabel_1 = require("./PasswordLabel");
exports.SignUp = react_1.default.memo(() => {
    const { step, verificationStrategy, isLoadingDone } = (0, components_1.useSignUp)();
    if (isLoadingDone) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!step && (0, jsx_runtime_1.jsx)(SignUpFormContainer, {}), step === "verify-email-address" && verificationStrategy === "EMAIL_LINK" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "EMAIL_LINK" }), step === "verify-email-address" && verificationStrategy === "EMAIL_CODE" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "EMAIL_CODE" }), step === "verify-phone-number" && verificationStrategy === "SMS_LINK" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "SMS_LINK" }), step === "verify-phone-number" && verificationStrategy === "SMS_CODE" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "SMS_CODE" })] }));
    }
});
const SignUpForm = react_1.default.memo(() => {
    var _a, _b;
    const { state, dispatch } = (0, hooks_1.useLezzAuthContext)();
    const { handleSignUp } = (0, components_1.useSignUp)();
    const __serverError = (_b = (_a = state === null || state === void 0 ? void 0 : state.signUpForm) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.__serverError;
    const { handleSubmit, handleChange, isSubmitting, errors, values, touched, setFieldTouched, } = (0, formik_1.useFormik)({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },
        validate: (0, zod_formik_adapter_1.toFormikValidate)(libs_1.signUpSchema),
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            if (!values.email && !values.username) {
                setFieldError('email', 'Email or username is required');
                setFieldError('username', 'Email or username is required');
            }
            handleSignUp(values, setSubmitting);
        },
    });
    react_1.default.useEffect(() => {
        dispatch({
            type: "SIGN_UP_FORM",
            payload: {
                signUpForm: {
                    input: {
                        setFieldTouched,
                        handleChange,
                        values,
                        firstName: { error: errors.firstName, touched: touched.firstName },
                        lastName: { error: errors.lastName, touched: touched.lastName },
                        username: { error: errors.username, touched: touched.username },
                        email: { error: errors.email, touched: touched.email },
                        password: { error: errors.password, touched: touched.password }
                    },
                    button: { isSubmitting },
                }
            }
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsxs)("form", { className: 'space-y-4', onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(EmailLabel_1.EmailLabel, {}), (0, jsx_runtime_1.jsx)(EmailInput_1.EmailInput, { autoFocus: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, {}), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, {})] }), __serverError && (0, jsx_runtime_1.jsx)(exports.InputError, { message: __serverError }), (0, jsx_runtime_1.jsx)(Button_1.Button, {}), (0, jsx_runtime_1.jsx)(SignUpRedirectText, {})] }));
});
exports.SignUpContainer = react_1.default.memo(({ children }) => ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign up" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), children, (0, jsx_runtime_1.jsx)(SignUpRedirectText, {})] })] })));
exports.SignUpProvider = react_1.default.memo(({ children }) => {
    const { handleSignUp } = (0, components_1.useSignUp)();
    const { state, dispatch } = (0, hooks_1.useLezzAuthContext)();
    const { handleSubmit, handleChange, isSubmitting, errors, values, touched, setFieldTouched, } = (0, formik_1.useFormik)({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        },
        validate: (0, zod_formik_adapter_1.toFormikValidate)(libs_1.signUpSchema),
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            if (!values.email && !values.username) {
                setFieldError("email", "Email or username is required");
                setFieldError("username", "Email or username is required");
            }
            handleSignUp(values, setSubmitting);
        },
    });
    react_1.default.useEffect(() => {
        dispatch({
            type: "SIGN_UP_FORM",
            payload: {
                signUpForm: {
                    input: {
                        setFieldTouched,
                        handleChange,
                        values,
                        firstName: { error: errors.firstName, touched: touched.firstName },
                        lastName: { error: errors.lastName, touched: touched.lastName },
                        username: { error: errors.username, touched: touched.username },
                        email: { error: errors.email, touched: touched.email },
                        password: { error: errors.password, touched: touched.password },
                    },
                    button: { isSubmitting },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("form", { className: 'space-y-4', onSubmit: state.signUpForm.button.onSubmit || handleSubmit, children: children }) }));
});
exports.InputError = react_1.default.memo(({ message }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex text-sm font-normal rounded-2xl space-x-1 h-fit w-fit mt-2", children: [(0, jsx_runtime_1.jsx)(pi_1.PiWarningCircleFill, { style: { color: "red", width: "15px", height: "15px" } }), (0, jsx_runtime_1.jsx)("p", { className: "text-[12px] text-left text-red-400", children: message })] }));
});
const SignUpFormContainer = react_1.default.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign up" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(OAuthButtons, {}), (0, jsx_runtime_1.jsx)(SignUpForm, {})] })] }));
});
const SignUpVerifyTempEmailBadge = react_1.default.memo(({ tempEmail, handleRemoveSignInTemp }) => ((0, jsx_runtime_1.jsxs)("span", { className: "flex bg-[#FAFAFA] text-[#FAFAFA]-800 text-sm font-normal mr-2 border border-white-300 rounded-2xl items-center p-[10px] space-x-2 h-fit w-fit", children: [(0, jsx_runtime_1.jsx)(md_1.MdAccountCircle, { style: { width: '20px', height: '20px' }, color: config_json_1.default.theme.color }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-400", children: [" ", tempEmail, " "] }), (0, jsx_runtime_1.jsx)(tb_1.TbEdit, { style: { width: "20px", height: "20px", cursor: "pointer" }, color: config_json_1.default.theme.color, onClick: handleRemoveSignInTemp })] })));
const SignUpVerifyForm = react_1.default.memo(({ type }) => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) }), (0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Verify your email" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(SignUpVerifyContent, { type: type })] })] }));
});
const SignUpVerifyContent = react_1.default.memo(({ type }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [type === "EMAIL_LINK" && (0, jsx_runtime_1.jsx)(EmailLinkContent, {}), type === "EMAIL_CODE" && (0, jsx_runtime_1.jsx)(EmailCodeContent, {}), type === "SMS_LINK" && (0, jsx_runtime_1.jsx)(SMSLinkContent, {}), type === "SMS_CODE" && (0, jsx_runtime_1.jsx)(SMSCodeContent, {})] })));
const EmailLinkContent = react_1.default.memo(() => {
    const [timer, setTimer] = react_1.default.useState(60);
    const [canResend, setCanResend] = react_1.default.useState(false);
    const { handleSignUpResendEmail } = (0, components_1.useSignUp)();
    const { tempEmail, handleRemoveSignInTemp } = (0, components_1.useSignIn)();
    react_1.default.useEffect(() => {
        const interval = setInterval(() => {
            if (!!timer)
                return setTimer((prev) => prev - 1);
            setCanResend(true);
            clearInterval(interval);
        }, 1000);
        return (() => clearInterval(interval));
    }, [timer]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'd-flex flex-col space-y-4', children: [(0, jsx_runtime_1.jsx)(SignUpVerifyTempEmailBadge, { tempEmail: tempEmail, handleRemoveSignInTemp: handleRemoveSignInTemp }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm font-medium', children: "Verification link" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-normal", children: "Use the verification link sent to your email address" }), (0, jsx_runtime_1.jsxs)("p", { style: { cursor: !!timer ? "not-allowed" : "pointer" }, className: "text-sm font-light text-primary-600 hover:underline text-[#8465FF]", onClick: () => {
                    if (canResend) {
                        handleSignUpResendEmail("EMAIL_LINK");
                        setTimer(60);
                        setCanResend(false);
                    }
                }, children: ["Did'nt receive a link? Resend ", !!timer && `(${timer}s)`] })] }));
});
const EmailCodeContent = react_1.default.memo(() => {
    const [timer, setTimer] = react_1.default.useState(60);
    const [canResend, setCanResend] = react_1.default.useState(false);
    const { handleSignUpResendEmail } = (0, components_1.useSignUp)();
    const { tempEmail, handleRemoveSignInTemp } = (0, components_1.useSignIn)();
    react_1.default.useEffect(() => {
        const interval = setInterval(() => {
            if (!!timer)
                return setTimer((prev) => prev - 1);
            setCanResend(true);
            clearInterval(interval);
        }, 1000);
        return (() => clearInterval(interval));
    }, [timer]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'd-flex flex-col space-y-4', children: [(0, jsx_runtime_1.jsx)(SignUpVerifyTempEmailBadge, { tempEmail: tempEmail, handleRemoveSignInTemp: handleRemoveSignInTemp }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm font-medium', children: "Verification code" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-normal", children: "Use the verification code sent to your email address" }), (0, jsx_runtime_1.jsxs)("p", { style: { cursor: !!timer ? "not-allowed" : "pointer" }, className: "text-sm font-light text-primary-600 hover:underline text-[#8465FF]", onClick: () => {
                    if (canResend) {
                        handleSignUpResendEmail("EMAIL_CODE");
                        setTimer(60);
                        setCanResend(false);
                    }
                }, children: ["Did'nt receive a code? Resend ", !!timer && `(${timer}s)`] })] }));
});
const SMSLinkContent = react_1.default.memo(() => ((0, jsx_runtime_1.jsx)("h1", { children: "SMS link verification" })));
const SMSCodeContent = react_1.default.memo(() => ((0, jsx_runtime_1.jsx)("h1", { children: "SMS code verification" })));
const FormSection = react_1.default.memo(({ children }) => ((0, jsx_runtime_1.jsx)("div", { className: "w-full phone:w-[400px] bg-white rounded-3xl shadow-2xl border", style: { color: config_json_1.default.theme.textBackgroundColor, backgroundColor: config_json_1.default.theme.backgroundColor }, children: (0, jsx_runtime_1.jsx)("div", { className: "p-10 space-y-2", children: children }) })));
const HeaderText = react_1.default.memo(({ children }) => ((0, jsx_runtime_1.jsx)("p", { className: "text-xl text-left font-bold text-[#141414]", style: { color: config_json_1.default.theme.textBackgroundColor }, children: children })));
const SubHeaderText = react_1.default.memo(({ children }) => ((0, jsx_runtime_1.jsx)("p", { className: "text-[15px] text-left text-gray-400", children: children })));
const LinkText = react_1.default.memo(({ href, children }) => ((0, jsx_runtime_1.jsx)(link_1.default, { href: href, className: "text-sm font-light text-primary-600 hover:underline text-[#8465FF]", style: { color: config_json_1.default.theme.color }, children: children })));
const SignUpRedirectText = react_1.default.memo(() => ((0, jsx_runtime_1.jsxs)("p", { className: "text-sm font-light text-gray-500 text-left", children: ["Have an account? ", (0, jsx_runtime_1.jsx)(LinkText, { href: constants_1.SIGN_IN_URL, children: "Sign in" })] })));
const OAuthButtons = react_1.default.memo(() => ((0, jsx_runtime_1.jsx)("div", { className: 'flex flex-col space-x-2', children: config_json_1.default.socialConnections.oauth_google.enabled ?
        (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center flex-col", children: [(0, jsx_runtime_1.jsx)(GoogleButton_1.GoogleButton, {}), (0, jsx_runtime_1.jsx)(OrDivider, {})] })
        : null })));
const MainContainer = react_1.default.memo(({ children }) => ((0, jsx_runtime_1.jsx)("div", { className: "flex w-[400px]", children: children })));
const OrDivider = react_1.default.memo(() => ((0, jsx_runtime_1.jsx)("div", { className: 'mt-4 w-full', children: (0, jsx_runtime_1.jsx)("div", { className: "divider text-gray-400", children: "OR" }) })));
const WatermarkSection = react_1.default.memo(({ children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'h-fit relative top-[50px]', style: {
            writingMode: 'vertical-lr',
            transform: 'rotate(180deg)',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            overflow: 'visible',
        }, children: children }));
});
const Watermark = react_1.default.memo(() => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-[#6C47FF] text-white text-center flex justify-center items-center w-full space-y-1 p-2 rounded-bl-[5px] rounded-br-[5px] rounded-tr-[0px] rounded-tl-[0px]  sm:rounded-bl-[0px] sm:rounded-br-[5px] sm:rounded-tl-[0px] sm:rounded-tr-[5px]", style: { backgroundColor: config_json_1.default.theme.color }, children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-xs', style: { color: config_json_1.default.theme.textColor }, children: "Secured by " }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xs font-bold', style: { color: config_json_1.default.theme.textColor }, children: "Lezzauth" })] }));
});
