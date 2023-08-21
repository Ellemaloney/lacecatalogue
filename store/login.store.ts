import {persistentAtom} from "@nanostores/persistent";
import {STORE_BASE_ENCODING} from "../src/consts";

export enum LoginStep {
    start = 'start',
    login = 'login',
    register = 'register',
}

export const isLogged = persistentAtom('isLogged', false, STORE_BASE_ENCODING);
export const currentLoginStep = persistentAtom('currentLoginStep', LoginStep.start, STORE_BASE_ENCODING);

export function login() {
    isLogged.set(true);
}

export function logout() {
    isLogged.set(false);
}

export function openLoginForm() {
   currentLoginStep.set(LoginStep.login);
}

export function openRegisterForm() {
    currentLoginStep.set(LoginStep.register);
}

export function closeLoginForm() {
    currentLoginStep.set(LoginStep.start);
}
