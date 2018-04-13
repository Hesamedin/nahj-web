import { Reducer } from 'redux';
import { AuthActionTypes, LoginByEmail, LoginByGoogle, LoginAction, LogoutAction } from '../actions/auth';

export interface AuthState {
    loggedIn: boolean;
    isLoggedInByEmail: boolean;
    isLoggedInByGoogle: boolean;
    uid: string;
}

export const INITIAL_STATE: AuthState = {
    loggedIn: false,
    isLoggedInByEmail: false,
    isLoggedInByGoogle: false,
    uid: ''
};

const authReducer: Reducer<AuthState> = (
    state: AuthState = INITIAL_STATE,
    action: LoginByEmail | LoginByGoogle | LoginAction | LogoutAction
): AuthState => {
    switch (action.type) {
        case AuthActionTypes.loginAction:
            return {
                ...state,
                loggedIn: true,
                uid: action.payload,
            };

        case AuthActionTypes.loginByEmailAction:
            return {
                ...state,
                loggedIn: true,
                isLoggedInByEmail: true,
            };

        case AuthActionTypes.loggedInByGoogle:
            return {
                ...state,
                loggedIn: true,
                isLoggedInByGoogle: true,
            };

        case AuthActionTypes.logoutAction:
            return {
                ...state,
                loggedIn: false,
                isLoggedInByEmail: false
            };

        default:
            return state;
    }
};

export default authReducer;