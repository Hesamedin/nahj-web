/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           utility.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */

import database, { DataSnapshot, firebase, googleAuthProvider } from '../firebase';
import article from '../models/article';
import { logger } from '../utility/logger';

const DASHTI_LETTERS = '/farsi/dashti/letters';

export const startLoginByEmail = (email: string, password: string,
                                  nextAction: () => void,
                                  onErrorByEmailLogin: (msg: string) => void) => {
    logger('Login by email...');
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            logger('Successful Login!');
            nextAction();
        })
        .catch((error) => {
            logger('oops, Couldn\'t login. Message: ' + error.message);
            onErrorByEmailLogin(error.message);
        });
};

export const startLoginByGoogle = (nextAction: () => void, onErrorByGoogleLogin: (msg: string) => void) => {
    logger('Login by Google...');
    return firebase.auth().signInWithPopup(googleAuthProvider)
        .then(() => {
            logger('Successful Login!');
            nextAction();
        })
        .catch((error) => {
            logger('oops, Couldn\'t login. Message: ' + error.message);
            onErrorByGoogleLogin(error.message);
        });
};

export const startLogout = (nextAction: () => void) => {
    logger('Firebase signout...');
    firebase.auth().signOut()
        .then(() => {
            logger('Signed out.');
            nextAction();
        })
        .catch((error) => {
            logger('oops, Couldn\'t logout. Message: ' + error.message);
        });
};

export const getListOfLetters = (start: number, end: number) => {
    return database.ref(DASHTI_LETTERS)
        .orderByKey()
        .startAt(start.toString())
        .endAt(end.toString())
        .once('value')
        .then((snapshot) => {
            const articles: article[] = [];
            snapshot.forEach((element: DataSnapshot) => {
                articles.push({
                    id: element.key,
                    ...element.val()
                });
            });

            return articles;
        });
};