"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.getApplicationUrl = void 0;
const axios_1 = __importDefault(require("axios"));
function getApplicationUrl(publishableKey) {
    let key = "";
    if (publishableKey.includes("pk_test_") || publishableKey.includes("pk_live_")) {
        key = publishableKey.split("pk_test_")[1] || publishableKey.split("pk_live_")[1];
    }
    return atob(key);
}
exports.getApplicationUrl = getApplicationUrl;
const publishableKey = process.env.NEXT_PUBLIC_LEZZAUTH_PUBLISHABLE_KEY;
const baseURL = getApplicationUrl(publishableKey);
exports.API = axios_1.default.create({ baseURL });
