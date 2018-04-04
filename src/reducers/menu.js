import { Reducer } from 'redux'
import {ACTION_MENU_ENABLED} from '../actions/menu'

export interface MenuState {
	isEnabled: boolean
}

export const INITIAL_STATE: MenuState = {
	isEnabled: true
}

const menuReducer: Reducer<MenuState> = (
	state: MenuState = INITIAL_STATE,
	action
): MenuState => {
	switch (action.type) {
		case ACTION_MENU_ENABLED:
			return {
				...state,
				isEnabled: action.isEnabled
			}

		default:
			return state
	}
}

export default menuReducer