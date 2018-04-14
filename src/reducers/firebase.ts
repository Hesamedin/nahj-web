import { Reducer } from 'redux';
import article from '../models/article';
import { FirebaseActionTypes, SetLetters } from '../actions/firebase';

export interface FirebaseState {
    articles: article[];
}

export const INITIAL_STATE: FirebaseState = {
    articles: []
};

const firebaseReducer: Reducer<FirebaseState> = (
    state: FirebaseState = INITIAL_STATE,
    action: SetLetters
): FirebaseState => {
    switch (action.type) {
        case FirebaseActionTypes.setLetters:
            return {
                ...state,
                articles: action.payload
            };

        default:
            return state;
    }
};

export default firebaseReducer;