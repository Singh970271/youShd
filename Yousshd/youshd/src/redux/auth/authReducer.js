import { loadData, removeData, saveData } from '../../utils/localStorage';
import * as types from './actiontypes'
//import { loadData,removeData,saveData } from '../utils/localStorage'
const init = {
   // token:loadData("token_")||"",
   token:loadData("token_")||"",
    isError:false,
    isLoading:false,
    isSignup:false
}
export const authReducer = (state=init,{type,payload})=>{
    console.log(type);
    switch (type){
        case types.LOGIN_LOADING :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:true
            }
        } 
        case types.LOGIN_SUCCESS :{
            console.log(payload.token);
            let newtoken = payload.token;
            saveData("token_",newtoken)
           // saveData("token_",newtoken);
            return {
                ...state,
                token:payload.token,
                isError:false,
                isLoading:false
            }
        }
        case types.LOGIN_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false

            }
        }
        case types.REGISTER_LOADING:{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:true,
                isSignup:false
            }
        }

        case types.REGISTER_SUCCESS :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:false,
                isSignup:true
            }
        } 
        case types.REGISTER_FAILURE :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:false,
                isSignup:false
            }
        } 
        case types.LOGOUT_SUCCESS:{
        //    removeData("user_");
        //    removeData("token_");
        removeData("user_");
        removeData("token_");
           return{
            ...state,
            token:""
           }
        }
        default :{
            return state;
        }
    }
}