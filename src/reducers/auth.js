import { Reducer } from 'redux'
import { ACTION_LOGIN_BY_EMAIL, ACTION_LOGIN_BY_GOOGLE, ACTION_LOGOUT } from "../actions/auth"

export interface AuthState {
	loggedIn: boolean,
	isLoggedInByEmail: boolean,
	isLoggedInByGoogle: boolean
}

export const INITIAL_STATE: AuthState = {
	loggedIn: false,
	isLoggedInByEmail: false,
    isLoggedInByGoogle: false,
};

const authReducer: Reducer<AuthState> = (
	state: AuthState = INITIAL_STATE,
	action
): AuthState => {
	switch (action.type) {
		case ACTION_LOGIN_BY_EMAIL:
			return {
				...state,
				loggedIn: true,
				isLoggedInByEmail: true,
			}

        case ACTION_LOGIN_BY_GOOGLE:
            return {
                ...state,
                loggedIn: true,
                isLoggedInByGoogle: true,
            }

		case ACTION_LOGOUT:
			return {
				...state,
				loggedIn: false,
				isLoggedInByEmail: false
			}

		default:
			return state
	}
}

export default authReducer