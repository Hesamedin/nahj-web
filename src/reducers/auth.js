import { Reducer } from 'redux'
import { ACTION_LOGIN, ACTION_LOGIN_BY_EMAIL, ACTION_LOGIN_BY_GOOGLE, ACTION_LOGOUT } from "../actions/auth"

export interface AuthState {
	loggedIn: boolean,
	isLoggedInByEmail: boolean,
	isLoggedInByGoogle: boolean,
	uid: string
}

export const INITIAL_STATE: AuthState = {
	loggedIn: false,
	isLoggedInByEmail: false,
    isLoggedInByGoogle: false,
	uid: ''
};

const authReducer: Reducer<AuthState> = (
	state: AuthState = INITIAL_STATE,
	action
): AuthState => {
	switch (action.type) {
		case ACTION_LOGIN:
			return {
				...state,
				loggedIn: true,
				uid: action.uid,
			}

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