import { createAction, props } from "@ngrx/store";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAILED = '[auth page] login failed';

export const loginStart = createAction(LOGIN_START, props<{email: string; password: string}>());

export const loginSuccess = createAction(LOGIN_SUCCESS, props<{token: string}>());

export const loginFailed = createAction(LOGIN_FAILED);