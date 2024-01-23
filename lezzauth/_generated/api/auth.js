"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signInAttempt = exports.signIn = void 0;
const config_1 = require("./config");
const signIn = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield config_1.API.post(`/sign-in`, dto);
    return data;
});
exports.signIn = signIn;
const signInAttempt = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield config_1.API.post(`/sign-in/${dto.userId}/attempt`, { password: dto.password });
    return data;
});
exports.signInAttempt = signInAttempt;
const signUp = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield config_1.API.post(`/sign-up`, dto);
    return data;
});
exports.signUp = signUp;
