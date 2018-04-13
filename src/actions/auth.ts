import { Action } from '../utility/nj_types';
import { validateActionTypes } from '../utility/validateActionTypes';

export enum AuthActionTypes {
    loginByEmailAction = 'nahj_auth_ActionLoginByEmail',
    loggedInByGoogle = 'nahj_auth_ActionLoginByGoogle',
    loginAction = 'nahj_auth_ActionLogin',
    logoutAction = 'nahj_auth_ActionLogOut'
}

validateActionTypes('AuthActionTypes', 'nahj_auth', AuthActionTypes);

export type LoginByEmail = Action<AuthActionTypes.loginByEmailAction, string>;
export type LoginByGoogle = Action<AuthActionTypes.loggedInByGoogle, string>;
export type LoginAction = Action<AuthActionTypes.loginAction, string>;
export type LogoutAction = Action<AuthActionTypes.logoutAction, string>;

const CreateAction = {
    loggedInByGoogle: (uid: string): LoginByGoogle => ({
        payload: uid,
        type: AuthActionTypes.loggedInByGoogle
    }),
    loginAction: (uid: string): LoginAction => ({
        payload: uid,
        type: AuthActionTypes.loginAction
    }),
    loginByEmailAction: (): LoginByEmail => ({
        payload: '',
        type: AuthActionTypes.loginByEmailAction
    }),
    logoutAction: (): LogoutAction => ({
        payload: '',
        type: AuthActionTypes.logoutAction
    })
};

export default CreateAction;