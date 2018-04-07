import { Reducer } from 'redux'
import article from '../models/article'
import {ACTION_GET_LETTERS} from './../actions/firebase'

export interface FirebaseState {
	letters: article[]
}

export const INITIAL_STATE: FirebaseState = {
	letters: []
}

const firebaseReducer: Reducer<FirebaseState> = (
	state: FirebaseState = INITIAL_STATE,
	action
): FirebaseState => {
	switch (action.type) {
		case ACTION_GET_LETTERS:
			return {
				...state,
				letters: action.letters
			}

		default:
			return state
	}
}

export default firebaseReducer