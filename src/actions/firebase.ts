import { Action } from '../utility/nj_types';
import { validateActionTypes } from '../utility/validateActionTypes';
import Article from '../models/article';

export enum FirebaseActionTypes {
    setLetters = 'nahj_firebase_set_letters'
}

validateActionTypes('FirebaseActionTypes', 'nahj_firebase', FirebaseActionTypes);

export type SetLetters = Action<FirebaseActionTypes.setLetters, Article[]>;

const CreateAction = {
    setLettersAction: (letters: Article[]): SetLetters => ({
        payload: letters,
        type: FirebaseActionTypes.setLetters
    })
};

export default CreateAction;