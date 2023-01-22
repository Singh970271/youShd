import * as types from './actiontypes';

export const loginLoading = ()=>({type:types.LOGIN_LOADING});
export const loginSuccess = (payload)=>({type:types.LOGIN_SUCCESS,payload});
export const loginFailure = (payload)=>({type:types.LOGIN_FAILURE,payload});

export const registerLoading = ()=>({type:types.REGISTER_LOADING});
export const registerSuccess = (payload)=>({type:types.REGISTER_SUCCESS,payload});
export const registerFailure = (payload)=>({type:types.REGISTER_FAILURE,payload});


export const logoutLoading = ()=>({type:types.LOGOUT_LOADING});
export const logoutSuccess=()=>({type:types.LOGOUT_SUCCESS});
export const logoutFailure = ()=>({type:types.LOGOUT_FAILURE});