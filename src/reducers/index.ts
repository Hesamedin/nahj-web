import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer, { AuthState } from './auth';
import menuReducer, { MenuState } from './menu';
import firebaseReducer, { FirebaseState } from './firebase';
import contentReducer, { ContentState } from './content';

export interface NahjReduxState {
    auth: AuthState;
    firebase: FirebaseState;
    menu: MenuState;
    content: ContentState;
}

export default combineReducers({
    routing: routerReducer,
    auth: authReducer,
    menu: menuReducer,
    firebase: firebaseReducer,
    content: contentReducer
});
